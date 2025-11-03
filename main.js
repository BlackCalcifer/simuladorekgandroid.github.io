const { app, BrowserWindow, screen, ipcMain } = require('electron');
const path = require('node:path');
const https = require('https');
const dns = require('dns');
const fs = require('fs');

const CONTRASENA_LOCAL_DEFAULT = '68bdca19-1dcc-8328-9141-3d059dfbfaaa';
const CONTADOR_FILE = path.join(app.getPath('userData'), 'licencia.json');

// 🔹 Tus URLs reales
const URL_RAW_CONTRASENA = 'https://pastebin.com/raw/vBbnsBeB';
const URL_RAW_LICENCIA = 'https://pastebin.com/raw/SAnPzWiA';

const MAX_USOS = 3;

// ====================== UTILIDADES ======================

// Leer estado local
function leerEstadoLocal() {
  try {
    if (fs.existsSync(CONTADOR_FILE)) {
      return JSON.parse(fs.readFileSync(CONTADOR_FILE, 'utf8'));
    }
  } catch (err) { console.error('Error leyendo estado local:', err); }
  return { contrasena: CONTRASENA_LOCAL_DEFAULT, usos: 0 };
}

// Guardar estado local
function guardarEstadoLocal(estado) {
  try { fs.writeFileSync(CONTADOR_FILE, JSON.stringify(estado)); }
  catch (err) { console.error('Error guardando estado local:', err); }
}

// Verificar internet
function verificarInternet() {
  return new Promise(resolve => {
    dns.lookup('google.com', err => resolve(!err));
  });
}

// Descargar raw desde Pastebin
function obtenerRaw(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data.trim())); // limpiar espacios y saltos
    }).on('error', reject);
  });
}

// ====================== UI ======================

// Ventana para contraseña local offline
function pedirContrasenaLocal(usos, maxUsos) {
  return new Promise(resolve => {
    const ventana = new BrowserWindow({
      width: 500,
      height: 280,
      resizable: false,
      autoHideMenuBar: true,
      modal: true,
      show: false,
      webPreferences: { nodeIntegration: true, contextIsolation: false }
    });
    ventana.loadFile(path.join(__dirname, 'password.html'));
    ventana.once('ready-to-show', () => {
      ventana.webContents.send('actualizar-usos', { usos, maxUsos });
      ventana.show();
    });
    resolve(ventana);
  });
}

// Ventana principal
function createWindow(htmlFile = 'index.html') {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const mainWindow = new BrowserWindow({
    width, height, minWidth: 800, minHeight: 520,
    autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js') }
  });
  mainWindow.loadFile(htmlFile);
  mainWindow.maximize();
  mainWindow.on('resize', () => mainWindow.webContents.send('window-resize'));
}

// ====================== APP ======================

app.whenReady().then(async () => {
  try {
    let estado = leerEstadoLocal();
    let internet = await verificarInternet();

    if (internet) {
      const rawContrasena = await obtenerRaw(URL_RAW_CONTRASENA);
      const rawLicencia = await obtenerRaw(URL_RAW_LICENCIA);
      const licenciaActiva = rawLicencia === '1';

      // Contraseña online cambió → reset usos
      if (estado.contrasena !== rawContrasena) {
        estado.contrasena = rawContrasena;
        estado.usos = 0;
        guardarEstadoLocal(estado);
      }

      if (!licenciaActiva) {
        createWindow('licencia.html');
        return;
      }

      createWindow(); // licencia online OK
    } else {
      // Offline
      if (estado.usos >= MAX_USOS) {
        createWindow('licencia.html');
        return;
      }

      const ventana = await pedirContrasenaLocal(estado.usos, MAX_USOS);

      ipcMain.once('contrasena-introducida', async (event, valor) => {
        if (valor === estado.contrasena) {
          estado.usos += 1;
          guardarEstadoLocal(estado);

          // Reintentar licencia si vuelve internet
          internet = await verificarInternet();
          if (internet) {
            const rawLicencia = await obtenerRaw(URL_RAW
