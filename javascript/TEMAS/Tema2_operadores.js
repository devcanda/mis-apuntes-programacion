// 🧮 TEMA 2: Operadores (La caja registradora y las reglas del local)
// (Proceso de pensamiento)
// Identificación del Dolor: Los estudiantes suelen confundir el símbolo de igual = (asignar) con el de igualdad == o === (comparar). También se abruman con los símbolos lógicos (&&, ||).
// Creación de Analogía: La lógica de cobro, verificación de pagos y promociones en la caja registradora.
// Fragmentación: Dividir entre Aritméticos (matemática simple), Comparación (verificación del cajero) y Lógicos (reglas de promoción).
// Crear el validador de una promoción de descuento.
// 1. Fase de Cimentación: La Metáfora de la Caja Registradora
// En nuestra cafetería, ya sabemos cómo guardar los datos de los pedidos (las Variables). Ahora necesitamos manipular esos datos: cobrar, dar vuelto y aplicar promociones. Para esto usamos los Operadores.
// A. Operadores Aritméticos (Las matemáticas simples)
// Son los botones de tu caja registradora. Te permiten hacer cálculos básicos con los Números.
// Suma (+), Resta (-), Multiplicación (*), División (/).
// En el local: let total = precioCafe * cantidad;
//B. El Operador de Asignación (=) vs. Comparación estricta (===)
// Aquí es donde caen muchos principiantes. ¡Préstale mucha atención!
// = (Asignar): Un solo signo de igual significa "Toma este valor y guárdalo aquí". Es como el barista escribiendo con el marcador en el vaso. (Ej: let precio = 5;).
// === (Comparar): Tres signos de igual son una pregunta del cajero: "¿Es esto exactamente igual a esto otro?". No cambia valores, solo responde true o false. (Ej: dineroRecibido === totalAPagar).
// > También existe > (mayor que) y < (menor que) para revisar si el cliente pagó de más y debemos darle vuelto
// .
//C. Operadores Lógicos (&&, ||, !)
// Estas son las reglas de oro pegadas en la pared para que el cajero aplique promociones o cobre.
// && (AND / "Y"): Todo debe cumplirse para que sea verdad.
// Regla: "Hay descuento SI el cliente lleva un Moca && lleva un croissant". Si falta uno de los dos, no hay descuento.
// || (OR / "O"): Con que una sola cosa se cumpla, ya es verdad.
// Regla: "Aceptamos el pago SI es en Efectivo || es con Tarjeta". Con cualquiera de las dos formas, el pedido procede.
// ! (NOT / "Negación"): Invierte las cosas. Si algo es verdadero, lo hace falso. (Ej: !pagoRealizado significa "NO ha pagado").

// Aritmética básica
let precioCafe = 4;
let cantidad = 2;
let totalAPagar = precioCafe * cantidad; // El total es 8

// Lógica del cajero
let pagoEnEfectivo = true;
let pagoConTarjeta = false;

// Comprobamos si podemos procesar la venta usando OR (||)
let procesarVenta = pagoEnEfectivo || pagoConTarjeta; // Esto es true

// Verificamos si el pago es exacto usando comparación estricta (===)
let pagoExacto = 8 === totalAPagar; // Pregunta: ¿8 es igual a 8? -> true
