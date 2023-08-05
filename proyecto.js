let M1 = "Utilizar contraseñas fuertes y únicas para cada cuenta es crucial. Se deben evitar contraseñas obvias o comunes. Una contraseña fuerte debe tener una combinación de letras, números y caracteres especiales. Además, es recomendable utilizar una frase de contraseña en lugar de una sola palabra. También es esencial no reutilizar contraseñas en múltiples cuentas."
let M2 = "Las personas deben ser cautelosas con correos electrónicos, mensajes o llamadas no solicitadas que solicitan información personal o financiera. Siempre que se reciba un mensaje sospechoso o se solicite información confidencial, es recomendable verificar la autenticidad del remitente o la fuente antes de proporcionar cualquier dato."
let M3 = "Es fundamental tener precaución al conectarse a redes Wi-Fi públicas o no seguras, ya que estas pueden ser vulnerables a ataques y suplantación de identidad. Evitar el acceso a cuentas bancarias, correo electrónico u otros servicios que requieran información confidencial cuando se está en una red desconocida. Si es necesario utilizar redes públicas, es recomendable utilizar una red privada virtual (VPN) que cifre la conexión y proteja la información de posibles espías."


let textos = [M1, M2, M3];
let indice = 0;

function rotarTexto() {
  const Metodos = document.getElementById("Metodos");
  indice = (indice + 1) % textos.length;
  Metodos.textContent = textos[indice];
}

function retrocederTexto() {
  const Metodos = document.getElementById("Metodos");
  indice = (indice - 1 + textos.length) % textos.length;
  Metodos.textContent = textos[indice];
}

function redireccionar() {
  window.open("https://personaldatasecurity.github.io/Foro/", "_blank");
}