
  const AVRPresets={
    sinus:{
	values:[
		-0,        // Línea isoeléctrica inicial
		-0.05,     // ↑ inicio onda P
		-0.15,     // ↑ pico onda P
		-0.1,      // ↓ final onda P
		-0,-0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		-0.8,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0,-0,-0,-0,-0,     // regreso a línea isoeléctrica
		],
	gain:50,speed: 0.8 ,color:'#e6e227'
	},
	taquicardiasinus:{
	values:[
		-0,        // Línea isoeléctrica inicial
		-0.05,     // ↑ inicio onda P
		-0.15,     // ↑ pico onda P
		-0.1,      // ↓ final onda P
		-0,-0,      // segmento PR isoeléctrico
		-0.05,    // pequeña onda Q
		-1,        // ↑ gran onda R (pico máximo)
		-0.3,     // ↓ onda S
		-0,-0,-0,-0,-0,// segmento ST isoeléctrico
		-0,        // (más plano antes de T)
		-0.15,     // ↑ inicio onda T
		-0.25,     // ↑ pico onda T
		-0.1,      // ↓ final onda T
		-0,-0,-0,-0,-0,     // regreso a línea isoeléctrica
		],
	gain:50,speed: 1.25 ,color:'#e6e227'},
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
		-0.05,    // peque�