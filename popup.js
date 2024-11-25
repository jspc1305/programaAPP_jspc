// Contenidos de los popups según el tipo
const popupContents = {
  privacy: {
    title: "Política de Privacidad",
    content: "La Política de Privacidad de Ddapptic, actualizada el 24-11-24, describe cómo recopilamos, utilizamos, almacenamos y protegemos tu información personal al usar nuestra aplicación para crear y gestionar planes didácticos bajo la norma de la Nueva Escuela Mexicana. Recopilamos datos personales como tu nombre completo, correo electrónico e información de pago procesada de forma segura, además de registros de acceso, interacción con la aplicación y datos técnicos como tu dirección IP, tipo de dispositivo y navegador. Usamos esta información para proporcionarte acceso y funcionalidades dentro de la Aplicación, procesar pagos y gestionar tu suscripción, mejorar nuestros servicios mediante análisis de uso y comunicarnos contigo sobre actualizaciones, soporte técnico o promociones, siempre bajo tu consentimiento. No compartimos, alquilamos ni vendemos tus datos personales, salvo con proveedores de servicios esenciales o en cumplimiento de requerimientos legales. Para proteger tu información, implementamos medidas como encriptación, monitoreo continuo y almacenamiento seguro, aunque ningún sistema de seguridad es infalible; en caso de brechas, te notificaremos conforme a la ley. Conservamos tus datos mientras mantengas una cuenta activa y los eliminamos 30 días después de la cancelación de tu suscripción, salvo obligaciones legales. Tienes derecho a acceder, actualizar o eliminar tu información personal, retirar tu consentimiento y presentar quejas ante las autoridades competentes. Nuestra aplicación utiliza cookies para mejorar tu experiencia, aunque puedes configurar tu navegador para rechazarlas. Nos reservamos el derecho de modificar esta política y te notificaremos sobre cambios importantes. Para consultas, contáctanos en **dapptic_atencionCliente@dapptic.xyz** o al **464-156-0904**. Esta política garantiza que tus datos serán tratados de manera ética, legal y responsable."
  },
  terms: {
    title: "Términos y Condiciones",
    content: "Los Términos y Condiciones de Ddapptic establecen las reglas y obligaciones para el uso de nuestra aplicación, diseñada para crear y gestionar planes didácticos bajo la norma de la Nueva Escuela Mexicana. Al registrarte y utilizar Ddapptic, aceptas que eres mayor de edad y que toda la información proporcionada es precisa y veraz. La suscripción tiene un costo mensual de $100 MXN y permite el acceso a las herramientas y funcionalidades de la aplicación; los pagos no son reembolsables, salvo excepciones legales. Es tu responsabilidad mantener la confidencialidad de tus credenciales de acceso y notificar de inmediato cualquier uso no autorizado de tu cuenta. Queda estrictamente prohibido utilizar la aplicación para actividades ilegales, compartir contenidos protegidos por derechos de autor sin autorización, o intentar manipular o desestabilizar nuestra plataforma. Nos reservamos el derecho de suspender o cancelar cuentas que incumplan estos términos. Aunque nos esforzamos por mantener el servicio en pleno funcionamiento, Ddapptic no se hace responsable de interrupciones temporales, errores técnicos o pérdidas de datos derivadas del uso de la aplicación, salvo en los casos estipulados por la legislación vigente. Los contenidos generados dentro de la aplicación son de tu propiedad, pero Ddapptic no se responsabiliza por el uso indebido de estos fuera de nuestra plataforma. Asimismo, nos reservamos el derecho de modificar estos términos en cualquier momento, notificándote de los cambios de forma oportuna. Al continuar utilizando la aplicación después de dichas modificaciones, aceptas los nuevos términos. Si tienes dudas o inquietudes, puedes contactarnos en **dapptic_atencionCliente@dapptic.xyz** o al **464-156-0904**. Tu uso de Ddapptic implica tu aceptación completa de estos Términos y Condiciones."
  },
  faq: {
    title: "Preguntas Frecuentes (FAQ)",
    content: "El FAQ de Ddapptic responde a las preguntas más comunes sobre nuestra aplicación de generación de formatos y suscripción. ¿Qué es Ddapptic? Es una herramienta que automatiza la creación de planes didácticos bajo la norma de la Nueva Escuela Mexicana. ¿Cómo funciona? Te registras, eliges el formato que necesitas y llenas los campos requeridos para generar documentos personalizados. ¿Qué incluye la suscripción? Por $100 MXN mensuales, tienes acceso ilimitado a las funciones de la aplicación y actualizaciones constantes. ¿Cómo realizo el pago? A través de métodos seguros como tarjeta de crédito o débito; los datos de pago son manejados por un proveedor externo confiable. ¿Puedo cancelar mi suscripción? Sí, puedes cancelarla en cualquier momento desde la configuración de tu cuenta; el acceso se mantendrá activo hasta el final del período pagado. ¿Qué sucede si olvido mi contraseña? Puedes restablecerla fácilmente desde la página de inicio de sesión. ¿Puedo usar la aplicación desde cualquier dispositivo? Sí, Ddapptic es compatible con navegadores modernos en computadoras, tabletas y smartphones. ¿Los formatos generados son editables? Sí, puedes descargar los formatos en versiones editables o PDF según lo necesites. ¿Ofrecen soporte técnico? Claro, puedes contactarnos por correo electrónico en **dapptic_atencionCliente@dapptic.xyz** o al **464-156-0904** para resolver cualquier duda o inconveniente."
  }
};

// Función para crear un popup dinámicamente
function createPopup(type) {
  // Validar si el tipo de popup existe
  if (!popupContents[type]) return;

  // Crear fondo de superposición
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  document.body.appendChild(overlay);

  // Crear el contenedor del popup
  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.innerHTML = `
    <button class="close-popup" id="close-popup">Cerrar</button>
    <h2>${popupContents[type].title}</h2>
    <p>${popupContents[type].content}</p>
  `;
  document.body.appendChild(popup);

  // Mostrar el popup y la superposición
  popup.style.display = 'block';
  overlay.style.display = 'block';

  // Función para cerrar el popup
  function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    popup.remove(); // Elimina el popup del DOM
    overlay.remove(); // Elimina la superposición del DOM
  }

  // Agregar eventos para cerrar el popup
  document.getElementById('close-popup').addEventListener('click', closePopup);
  overlay.addEventListener('click', closePopup);
}

// Evento para mostrar el popup al hacer clic en cualquier enlace
document.querySelectorAll('a[data-popup]').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const type = link.getAttribute('data-popup'); // Obtiene el tipo de popup
    createPopup(type); // Genera el popup dinámico
  });
});
