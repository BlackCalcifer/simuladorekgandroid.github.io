const DIPresets={
    sinus:{
	values:[
		0,        // Línea isoeléctrica inicial
		0.05,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.1,      // ↓ final onda P
		0,0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0,0,0,0,0,     // regreso a línea isoeléctrica
		],
	gain:50,speed: 0.8 ,color:'#c692f7'
	},
	taquicardiasinus:{
	values:[
		0,        // Línea isoeléctrica inicial
		0.05,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.1,      // ↓ final onda P
		0,0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0,0,0,0,0,     // regreso a línea isoeléctrica
		],
	gain:50,speed: 1.25 ,color:'#c692f7'},
	
	arritsinus:{
	values:[
		0,        // Línea isoeléctrica inicial
		0.05,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.1,      // ↓ final onda P
		0,0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0,0,0,0,0,     // regreso a línea isoeléctrica
		// 1
		0,        // Línea isoeléctrica inicial
		0.05,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.1,      // ↓ final onda P
		0,0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0,0,0,0,0,     // regreso a línea isoeléctrica
		// 2
		0,        // Línea isoeléctrica inicial
		0.05,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.1,      // ↓ final onda P
		0,0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0,0,0,0,0,     // regreso a línea isoeléctrica
		// 3
		0,        // Línea isoeléctrica inicial
		0.05,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.1,      // ↓ final onda P
		0,0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0, // segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0,0,     // regreso a línea isoeléctrica
		0,        // Línea isoeléctrica inicial
		0.05,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.1,      // ↓ final onda P
		0,0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0, // segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0,        // Línea isoeléctrica inicial
		0.05,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.1,      // ↓ final onda P
		0,0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0, // segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0,0     // regreso a línea isoeléctrica
		],
	gain:50,speed: 0.1 ,color:'#c692f7'},
	
    infartoagudoeleST:{
	values:[
	  0,0.05,0.15,0.1,     // onda P
      0,0,-0.05,           // PR + onda Q
      1,                   // ↑ onda R
      0.4,0.45,0.45,0.45,  // 🔺 ST elevado (se mantiene arriba)
      0.4,0.4,0.35,        // se mantiene en meseta
      0.1,0,0,0,0          // onda T pequeña y vuelta a isoeléctrico
	  ],
	gain:50,speed:0.5,color:'#c692f7'},
	
     bloqueotipo1:{
    values:[
      0,0.05,0.15,0.1,     // onda P
      0,0,0,0,0,           // 🔸 PR largo (mucho isoeléctrico)
      -0.05,               // onda Q
      1,                   // ↑ onda R
      -0.3,                // ↓ onda S
      0,                   // inicio ST
      0.15,0.25,0.1,       // onda T
      0,0,0,0,              // regreso isoeléctrico
	  0,0.05,0.15,0.1,     // onda P
      0,0,0,0,0,0,0,           // 🔸 PR largo (mucho isoeléctrico)
      -0.05,               // onda Q
      1,                   // ↑ onda R
      -0.3,                // ↓ onda S
      0,                   // inicio ST
      0.15,0.25,0.1,       // onda T
      0,0,0,0,              // regreso isoeléctrico
	  0,0.05,0.15,0.1,     // onda P
      0,0,0,0,0,0,0,0,0,0,0,          // 🔸 PR largo (mucho isoeléctrico)
      -0.05,               // onda Q
      1,                   // ↑ onda R
      -0.3,                // ↓ onda S
      0,                   // inicio ST
      0.15,0.25,0.1,       // onda T
      0,0,0,0              // regreso isoeléctrico
    ],
    gain:50, speed:0.25, color:'#c692f7'},
    bradicardia:{
    values:[
      0,0.05,0.15,0.1,     // onda P
      0,0,-0.05,           // PR + Q
      1,                   // onda R
      -0.3,                // onda S
      0,0,0,0,0,0,         // ST más largo
      0.15,0.25,0.1,       // onda T
      0,0,0                // isoeléctrico
    ],
    gain:50, speed:0.3, color:'#c692f7'
  },

  // 🔹 Fibrilación ventricular (irregular, caótica)
  fibrilacion:{
    values:[
      0,0.05,0.15,         // inicio irregular
      -0.05,0.1,           // variaciones rápidas
      0,-0.1,              // bajadas irregulares
      0.9,0,-0.1,0,0,      // picos erráticos
      0,0,0.05,0.15,       // pequeñas subidas
      0.1,0,0,0            // más irregularidad
    ],
    gain:90, speed:0.6, color:'#c692f7'
  },
  fibrilacionauri:{
	values:[
		0,        // Línea isoeléctrica inicial
		0.04,     // ↑ inicio onda P
		0,     // ↑ pico onda P
		0,
		0,
		0.04,      // ↓ final onda P
		0,		// segmento PR isoeléctrico
		0.04,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0.04,0,0.04,0,0.04,     // regreso a línea isoeléctrica
		// segundo qrs
		0,        // Línea isoeléctrica inicial
		0.04,     // ↑ inicio onda P
		0,     // ↑ pico onda P
		0.04,      // ↓ final onda P
		0,		// segmento PR isoeléctrico
		0.04,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0.04,0,0.04,0,0.04,     // regreso a línea isoeléctrica
		// tercer qrs
		0,        // Línea isoeléctrica inicial
		0.04,     // ↑ inicio onda P
		0,     // ↑ pico onda P
		0.04,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0.04,0,0.04,0,0.04,     // regreso a línea isoeléctrica
		// cuAVRo qrs
		0,        // Línea isoeléctrica inicial
		0.04,     // ↑ inicio onda P
		0,     // ↑ pico onda P
		0.04,      // ↓ final onda P
		0,
		0,
		0.04,
		0,		// segmento PR isoeléctrico
		0.04,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0.04,0,0.04,0,0.04,     // regreso a línea isoeléctrica
		0,        // Línea isoeléctrica inicial
		0.04,     // ↑ inicio onda P
		0,     // ↑ pico onda P
		0.04,      // ↓ final onda P
		0,		// segmento PR isoeléctrico
		0.04,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.25,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0.04,0,0.04,0,0.04,     // regreso a línea isoeléctrica
		],
	gain:50,speed: 0.2 ,color:'#c692f7'
	},
	fibrilacionvent:{
		values:[
		0,        // Línea isoeléctrica inicial
		0.3,     // ↑ inicio onda P
		0.5,
		0.6,
		0.6,
		0.63,     // ↑ pico onda P
		0.6,
		0.6,
		0.5,
		0.3,      // ↓ final onda P
		0,        // Línea isoeléctrica inicial
		0.3,     // ↑ inicio onda P
		0.5,
		0.6,
		0.6,
		0.63,     // ↑ pico onda P
		0.6,
		0.6,
		0.5,
		0.3,      // ↓ final onda P
		0,        // Línea isoeléctrica inicial
		0.3,     // ↑ inicio onda P
		0.5,
		0.6,
		0.6,
		0.63,     // ↑ pico onda P
		0.6,
		0.6,
		0.5,
		0.3,      // ↓ final onda P
		0,        // Línea isoeléctrica inicial
		0.3,     // ↑ inicio onda P
		0.5,
		0.6,
		0.6,
		0.63,     // ↑ pico onda P
		0.6,
		0.6,
		0.5,
		0.3,      // ↓ final onda P
		0,
		],
	gain:50,speed: 0.333 ,color:'#c692f7'
	},
	taquicardiaventri:{
		values:[
		0,        // Línea isoeléctrica inicial
		0,        // Línea isoeléctrica inicial
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,      // segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.10,		// inicio onda T
		0.15,     // ↑ inicio onda T
		0.20,     // ↑ pico onda T
		0.15,     // ↑ inicio onda T
		0.10,		// inicio onda T
		0.0,      // ↓ final onda T
		],
	gain:50,speed: 0.70 ,color:'#c692f7'
	},

	infartoagudosineleST:{
	    values:[
		0.05,0.15,0.1,                      // onda P
        0,0,-0.05,                          // PR + onda Q
    	1,                                  // ↑ onda R
      	-0.43,-0.4,-0.4,-0.43,-0.45,-0.43,  // 🔺 ST reducido
      	-0.35,                              // se mantiene en meseta
      	-0.1,                               // in
		],
	gain:50,speed: 0.5 ,color:'#c692f7'
	},

	infartoagudoizq:{
	    values:[
		0,        // Línea isoeléctrica inicial
		0.05,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.1,      // ↓ final onda P
		0,0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		0,0,0,0,0,// segmento ST isoeléctrico
		0,        // (más plano antes de T)
		0.15,     // ↑ inicio onda T
		0.35,     // ↑ pico onda T
		0.1,      // ↓ final onda T
		0,0,0,0,0,     // regreso a línea isoeléctrica
		],
	gain:50,speed: 0.5 ,color:'#c692f7'
	},
	flutterauri:{
	values:[
		0,        // Línea isoeléctrica inicial
		0.2,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.10,      // ↓ final onda P
		0,    // pequeña onda Q
		0.7,        // ↑ gran onda R (pico máximo)
		0.4,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.10,      // ↓ final onda P
		0,        // Línea isoeléctrica inicial
		0.2,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.10,      // ↓ final onda P
		0,        // Línea isoeléctrica inicial
		0.2,     // ↑ inicio onda P
		0.15,     // ↑ pico onda P
		0.10,      // ↓ final onda P
		],
	gain:50,speed: 0.35 ,color:'#c692f7'
	},
};