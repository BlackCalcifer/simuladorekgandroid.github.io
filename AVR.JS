  const AVRPresets={
    sinus:{
	values:[
		-0,        // Línea isoeléctrica inicial
		-0.05,     // ↑ inicio onda P
		-0.15,     // ↑ pico onda P
		-0.1,      // ↓ final onda P
		-0,-0,      // segmento PR isoeléctrico
		0.0,    // pequeña onda Q
		-0.8,        // ↑ gran onda R (pico máximo)
		0.0,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0,-0,-0,-0,-0,     // regreso a línea isoeléctrica
		],
	gain:40,speed: 0.8 ,color:'#e6e227'
	},
	taquicardiasinus:{
	values:[
		-0,        // Línea isoeléctrica inicial
		-0.05,     // ↑ inicio onda P
		-0.15,     // ↑ pico onda P
		-0.1,      // ↓ final onda P
		-0,-0,      // segmento PR isoeléctrico
		0.0,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.0,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0,-0,-0,-0,-0,     // regreso a línea isoeléctrica
		],
	gain:40,speed: 1.25 ,color:'#e6e227'},
	arritsinus:{
	values:[
		-0,        // Línea isoeléctrica inicial
		-0.05,     // ↑ inicio onda P
		-0.15,     // ↑ pico onda P
		-0.1,      // ↓ final onda P
		-0,-0,      // segmento PR isoeléctrico
		-0.0,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.0,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0,-0,-0,-0,-0,     // regreso a línea isoeléctrica
		// 1
		-0,        // Línea isoeléctrica inicial
		-0.05,     // ↑ inicio onda P
		-0.15,     // ↑ pico onda P
		-0.1,      // ↓ final onda P
		-0,0,      // segmento PR isoeléctrico
		0.0,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.0,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0,-0,-0,-0,-0,     // regreso a línea isoeléctrica
		// 2
		-0,        // Línea isoeléctrica inicial
		-0.05,     // ↑ inicio onda P
		-0.15,     // ↑ pico onda P
		-0.1,      // ↓ final onda P
		-0,0,      // segmento PR isoeléctrico
		0.0,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.0,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0,-0,-0,-0,-0,     // regreso a línea isoeléctrica
		// 3
		-0,        // Línea isoeléctrica inicial
		-0.05,     // ↑ inicio onda P
		-0.15,     // ↑ pico onda P
		-0.1,      // ↓ final onda P
		-0,0,      // segmento PR isoeléctrico
		0.0,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.0,     // ↓ onda S
		-0,-0,-0,-0,-0, // segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0,-0,     // regreso a línea isoeléctrica
		-0,        // Línea isoeléctrica inicial
		-0.05,     // ↑ inicio onda P
		-0.15,     // ↑ pico onda P
		-0.1,      // ↓ final onda P
		-0,0,      // segmento PR isoeléctrico
		0.0,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.0,     // ↓ onda S
		-0,-0,-0,-0,-0, // segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0,        // Línea isoeléctrica inicial
		-0.05,     // ↑ inicio onda P
		-0.15,     // ↑ pico onda P
		-0.1,      // ↓ final onda P
		-0,-0,      // segmento PR isoeléctrico
		0.0,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.0,     // ↓ onda S
		-0,-0,-0, // segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0,-0     // regreso a línea isoeléctrica
		],
	gain:40,speed: 0.1 ,color:'#e6e227'},
		fibrilacionauri:{
	values:[
		-0,        // Línea isoeléctrica inicial
		-0.04,     // ↑ inicio onda P
		-0,     // ↑ pico onda P
		-0,
		-0,
		-0.04,      // ↓ final onda P
		-0,		// segmento PR isoeléctrico
		-0.04,      // segmento PR isoeléctrico
		0.05,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.3,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0.04,-0,-0.04,-0,-0.04,     // regreso a línea isoeléctrica
		// segundo qrs
		-0,        // Línea isoeléctrica inicial
		-0.04,     // ↑ inicio onda P
		-0,     // ↑ pico onda P
		-0.04,      // ↓ final onda P
		-0,		// segmento PR isoeléctrico
		-0.04,      // segmento PR isoeléctrico
		0.05,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.3,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0.04,-0,-0.04,-0,-0.04,     // regreso a línea isoeléctrica
		// tercer qrs
		-0,        // Línea isoeléctrica inicial
		-0.04,     // ↑ inicio onda P
		-0,     // ↑ pico onda P
		-0.04,      // segmento PR isoeléctrico
		0.05,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.3,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0.04,-0,-0.04,-0,-0.04,     // regreso a línea isoeléctrica
		// cuAVRo qrs
		-0,        // Línea isoeléctrica inicial
		-0.04,     // ↑ inicio onda P
		-0,     // ↑ pico onda P
		-0.04,      // ↓ final onda P
		-0,
		-0,
		-0.04,
		-0,		// segmento PR isoeléctrico
		-0.04,      // segmento PR isoeléctrico
		0.05,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.3,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0.04,-0,-0.04,-0,-0.04,     // regreso a línea isoeléctrica
		-0,        // Línea isoeléctrica inicial
		-0.04,     // ↑ inicio onda P
		-0,     // ↑ pico onda P
		-0.04,      // ↓ final onda P
		-0,		// segmento PR isoeléctrico
		-0.04,      // segmento PR isoeléctrico
		0.05,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		0.3,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0.04,-0,-0.04,-0,-0.04,     // regreso a línea isoeléctrica
		],
	gain:40,speed: 0.2 ,color:'#c692f7'},
	infartoagudoeleST:{
	values:[
	  -0,-0.05,-0.15,-0.1,     // onda P
      -0,-0,0.0,           // PR + onda Q
      -1,                   // ↑ onda R
      -0.4,-0.45,-0.45,-0.45,  // 🔺 ST elevado (se mantiene arriba)
      -0.4,-0.4,-0.35,        // se mantiene en meseta
      -0.1,-0,-0,-0,-0          // onda T pequeña y vuelta a isoeléctrico
	  ],
	gain:40,speed:0.5,color:'#e6e227'},
  };