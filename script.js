// ===================== AUDIO PARA BEEP QRS =====================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function beep(frequency = 800, duration = 0.05) {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.type = 'square';
  oscillator.frequency.value = frequency;
  gainNode.gain.value = 0.02;

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + duration);
}

// ===================== MAPA DE PRESETS =====================
const derivaciones = {
  DI: DIPresets,
  DII: DIIPresets,
  DIII: DIIIPresets,
  AVR: AVRPresets
};

// ===================== INSTANCIAS =====================
const waveSections = {
  DICanvas: new WaveSection('DICanvas', DIPresets, 'sinus'),
  DIICanvas: new WaveSection('DIICanvas', DIIPresets, 'sinus'),
  DIIICanvas: new WaveSection('DIIICanvas', DIIIPresets, 'sinus'),
  AVRCanvas: new WaveSection('AVRCanvas', AVRPresets, 'sinus')
};

// ===================== SELECTOR DE DERIVACIONES DINÁMICAS =====================
let escenarioActual = "stable"; // Se actualiza al cambiar de escenario

document.querySelectorAll('.lead-selector').forEach(sel => {
  sel.addEventListener('change', e => {
    const canvasId = e.target.dataset.target;
    const lead = e.target.value;
    const wave = waveSections[canvasId];
    if (!wave) return;

    // Actualiza derivación y mantiene el preset del escenario activo
    wave.presets = derivaciones[lead];
    const presetEscenario = escenarios[escenarioActual][lead] || "sinus";
    wave.setPreset(presetEscenario);

    // Cambia el texto del label
    const label = wave.canvas.parentElement.querySelector('.lead-label') ||
                  wave.canvas.parentElement.querySelector('.label');
    if (label) label.textContent = lead;
  });
});

// ===================== ESCENARIOS CLÍNICOS =====================
const escenarios = {
  stable:         { DI: "sinus", DII: "sinus", DIII: "sinus", AVR: "sinus", hr: 75,  rr: 16, sbp: 120, dbp: 75 },
  taqsinus:       { DI: "taquicardiasinus", DII: "taquicardiasinus", DIII: "taquicardiasinus", AVR: "taquicardiasinus", hr: 130, rr: 23, sbp: 130, dbp: 85 },
  arritsinusa:    { DI: "arritsinus", DII: "arritsinus", DIII: "arritsinus", AVR: "arritsinus", hr: 78, rr: 17, sbp: 122, dbp: 82 },
  Infartoagudo1:  { DI: "infartoagudoeleST", DII: "infartoagudoeleST", DIII: "infartoagudoeleST", AVR: "infartoagudoeleST", hr: 110, rr: 18, sbp: 110, dbp: 70 },
  bloqueo1:       { DI: "bloqueotipo1", DII: "bloqueotipo1", DIII: "bloqueotipo1", AVR: "bloqueotipo1", hr: 78, rr: 18, sbp: 110, dbp: 70 },
  fibrilacionauri1:{ DI: "fibrilacionauri", DII: "fibrilacionauri", DIII: "fibrilacionauri", AVR: "fibrilacionauri", hr: 60, rr: 16, sbp: 116, dbp: 90 },
  fibrilacionvent1:{ DI: "fibrilacionvent", DII: "fibrilacionvent", DIII: "fibrilacionvent", AVR: "fibrilacionvent", hr: 80, rr: 16, sbp: 116, dbp: 90 }
};

// ===================== CAMBIO DE ESCENARIO =====================
const ctrlHR   = document.getElementById('ctrl_hr');
const ctrlRR   = document.getElementById('ctrl_rr');
const ctrlSpO2 = document.getElementById('ctrl_spo2');
const ctrlSBP  = document.getElementById('ctrl_sbp');
const ctrlDBP  = document.getElementById('ctrl_dbp');

document.getElementById('scenario').addEventListener('change', e => {
  escenarioActual = e.target.value;
  const esc = escenarios[escenarioActual];
  if (!esc) return;

  Object.entries(waveSections).forEach(([id, wave]) => {
    const canvasId = id;
    const selector = document.querySelector(`.lead-selector[data-target="${canvasId}"]`);
    const leadActual = selector ? selector.value : id.replace("Canvas", "");
    wave.presets = derivaciones[leadActual];
    wave.setPreset(esc[leadActual] || "sinus");
  });

  // Actualiza los controles y HUD
  ctrlHR.value = esc.hr;
  ctrlRR.value = esc.rr;
  ctrlSBP.value = esc.sbp;
  ctrlDBP.value = esc.dbp;
  ctrlSpO2.value = 98;

  document.getElementById('lblCtrlHR').textContent  = esc.hr;
  document.getElementById('lblCtrlRR').textContent  = esc.rr;
  document.getElementById('lblCtrlSBP').textContent = esc.sbp;
  document.getElementById('lblCtrlDBP').textContent = esc.dbp;
  document.getElementById('lblCtrlSpO2').textContent = 98;

  document.getElementById('hud_hr').textContent  = esc.hr;
  document.getElementById('hud_rr').textContent  = esc.rr;
  document.getElementById('hud_bp').textContent  = `${esc.sbp}/${esc.dbp}`;
  document.getElementById('hud_spo2').textContent = 98;
});

// ===================== SINCRONIZACIÓN DE ONDAS =====================
function updateWaveFromControls() {
  const hr = parseInt(ctrlHR.value);
  Object.values(waveSections).forEach(w => {
    w.current.speed = w.current.baseSpeed * (hr / 60);
  });
  requestAnimationFrame(updateWaveFromControls);
}
updateWaveFromControls();

// ===================== HUD DINÁMICO =====================
function getMAP(sbp, dbp) {
  return Math.round(dbp + (sbp - dbp) / 3);
}

function updateHUD() {
  document.getElementById('hud_hr').textContent = parseInt(ctrlHR.value);
  document.getElementById('hud_rr').textContent = parseInt(ctrlRR.value);
  document.getElementById('hud_bp').textContent =
    `${ctrlSBP.value}/${ctrlDBP.value} (MAP:${getMAP(parseInt(ctrlSBP.value), parseInt(ctrlDBP.value))})`;
  document.getElementById('hud_spo2').textContent = parseInt(ctrlSpO2.value);
  requestAnimationFrame(updateHUD);
}
updateHUD();

// ===================== LABELS =====================
ctrlHR.addEventListener('input',  e => document.getElementById('lblCtrlHR').textContent  = e.target.value);
ctrlRR.addEventListener('input',  e => document.getElementById('lblCtrlRR').textContent  = e.target.value);
ctrlSpO2.addEventListener('input',e => document.getElementById('lblCtrlSpO2').textContent = e.target.value);
ctrlSBP.addEventListener('input', e => document.getElementById('lblCtrlSBP').textContent = e.target.value);
ctrlDBP.addEventListener('input', e => document.getElementById('lblCtrlDBP').textContent = e.target.value);

// ===================== ALARMAS =====================
const banner = document.getElementById('banner');
let alarmOn = true;
const audioAlarm = new Audio('D:\\aplicacionesconelectron\\monitoruci\\alarma.mp3');

document.getElementById('btn_alarm_toggle').addEventListener('click', () => {
  alarmOn = !alarmOn;
  document.getElementById('btn_alarm_toggle').textContent = alarmOn ? 'Alarm ON' : 'Alarm OFF';
});

function checkAlarms() {
  if (!alarmOn) {
    requestAnimationFrame(checkAlarms);
    return;
  }

  const hr   = parseInt(ctrlHR.value);
  const rr   = parseInt(ctrlRR.value);
  const spo2 = parseInt(ctrlSpO2.value);
  const sbp  = parseInt(ctrlSBP.value);
  const dbp  = parseInt(ctrlDBP.value);

  banner.innerHTML = '';
  let triggered = false;

  // Comprobaciones
  if (spo2 < parseInt(document.getElementById('thr_spo2').value)) {
    banner.innerHTML += `<div class="alarm crit">SpO₂ baja: ${spo2}%</div>`;
    triggered = true;
  }

  if (hr < parseInt(document.getElementById('thr_hr_low').value) ||
      hr > parseInt(document.getElementById('thr_hr_high').value)) {
    banner.innerHTML += `<div class="alarm crit">FC anormal: ${hr}</div>`;
    triggered = true;
  }

  if (rr < 8) {
    banner.innerHTML += `<div class="alarm crit">FR baja: ${rr} rpm</div>`;
    triggered = true;
	
  }

  if (sbp < parseInt(document.getElementById('thr_sbp_low').value) ||
      sbp > parseInt(document.getElementById('thr_sbp_high').value)) {
    banner.innerHTML += `<div class="alarm warn">Sistólica fuera de rango: ${sbp}</div>`;
    triggered = true;
  }

  if (dbp < parseInt(document.getElementById('thr_dbp_low').value) ||
      dbp > parseInt(document.getElementById('thr_dbp_high').value)) {
    banner.innerHTML += `<div class="alarm warn">Diastólica fuera de rango: ${dbp}</div>`;
    triggered = true;
  }

  // Sonido de alarma
  if (triggered) {
    if (audioAlarm.paused) audioAlarm.play();
  } else {
    audioAlarm.pause();
    audioAlarm.currentTime = 0;
  }

  requestAnimationFrame(checkAlarms);
}
checkAlarms();
