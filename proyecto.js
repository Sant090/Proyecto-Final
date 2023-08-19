let M1 = "Utilizar contraseñas fuertes y únicas para cada cuenta es crucial. Se deben evitar contraseñas obvias o comunes. Una contraseña fuerte debe tener una combinación de letras, números y caracteres especiales. Además, es recomendable utilizar una frase de contraseña en lugar de una sola palabra. También es esencial no reutilizar contraseñas en múltiples cuentas."
let M2 = "Las personas deben ser cautelosas con correos electrónicos, mensajes o llamadas no solicitadas que solicitan información personal o financiera. Siempre que se reciba un mensaje sospechoso o se solicite información confidencial, es recomendable verificar la autenticidad del remitente o la fuente antes de proporcionar cualquier dato."
let M3 = "Es fundamental tener precaución al conectarse a redes Wi-Fi públicas o no seguras, ya que estas pueden ser vulnerables a ataques y suplantación de identidad. Evitar el acceso a cuentas bancarias, correo electrónico u otros servicios que requieran información confidencial cuando se está en una red desconocida. Si es necesario utilizar redes públicas, es recomendable utilizar una red privada virtual (VPN) que cifre la conexión y proteja la información de posibles espías."


let textos = [M1, M2, M3];
let indice = 0;

function rotarTexto() {
  const Metodos = document.getElementById("metodos");
  indice = (indice + 1) % textos.length;
  Metodos.textContent = textos[indice];
}

function retrocederTexto() {
  const Metodos = document.getElementById("metodos");
  indice = (indice - 1 + textos.length) % textos.length;
  Metodos.textContent = textos[indice];
}

function redireccionar() {
  window.open("Foro/Foro.html", "_blank");
}






let V1 = "El phishing es una técnica en la que los delincuentes se hacen pasar por amigos, sitios de comercio electrónico o instituciones financieras para robar información personal y financiera de sus víctimas. Este tipo de ciberestafa representa el 27% de los casos en todo el mundo, según una encuesta de TransUnion. La estafa consiste en construir un sitio web falso que se parece extrañamente a los de varias empresas confiables. Los delincuentes envían un enlace solicitando la confirmación de los datos a través de mensajes enviados por correo electrónico, Whatsapp o SMS. Las víctimas que hacen clic en este enlace son llevadas al sitio web falso, donde caen en la trampa y dan su información."
let V2 =" El Transmitir recibos bancarios falsos, Este tipo de delito cibernético implica la producción de recibos falsos en nombre de las grandes corporaciones. La víctima deposita los fondos en la cuenta de los estafadores durante la transacción. Algunas variaciones de este tipo de fraude pueden incluso involucrar la creación de páginas falsas que imiten el entorno de la empresa, donde las víctimas son redirigidas para descargar el documento falso sin generar ninguna señal de alarma sobre la estafa."
let V3 ="La Instalacion de softwares maliciosos, Este tipo de fraude en línea puede ocurrir cuando un usuario visita sitios web dudosos o incluso cuando hace clic en enlaces de correos electrónicos dudosos. En estos escenarios, los usuarios corren el riesgo de instalar malware sin querer, lo que otorgaría a terceros acceso a su información privada, así como a datos financieros y personales."
let V4 ="El Robo de información de la tarjeta, Este tipo de fraude puede ocurrir tanto físicamente (cuando le roban la tarjeta a un usuario) como virtualmente (cuando un usuario ingresa la información de la tarjeta en sitios web falsos, inseguros o inseguros). Una vez que tienen acceso a esta información, los estafadores pueden realizar compras hasta que el usuario bloquee la tarjeta. Robo de tarjetas de crédito, que representa el 13 % de los casos a nivel mundial y ocupa el noveno lugar entre los tipos de fraude digital más frecuentes, según la encuesta de TransUnion, junto con los cargos fraudulentos."

let textos2 = [V1, V2, V3, V4];
let indice2 = 0;

function otrotexto() {
  const textE = document.getElementById("textE");
  indice2 = (indice2 + 1) % textos2.length;
  textE.textContent = textos2[indice2];
}

function anteriortexto() {
  const textE = document.getElementById("textE");
  indice2 = (indice2 - 1 + textos2.length) % textos.length;
  textE.textContent = textos2[indice2];
}
