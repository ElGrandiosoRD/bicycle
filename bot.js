const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotMessages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// muestra-ocultar chat
chatbotIcon.addEventListener('click', () => {
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'flex' : 'none';
});

// Envia elmensaje
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
        displayMessage(message, 'user-message');
        userInput.value = '';
        botResponse(message);
    }
}

function displayMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = text;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function botResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage === 'hola') {
        setTimeout(() => {
            displayMessage('Hola, ¿En que puedo ayudarte?', 'bot-message');
            displayMessage('1. Necesitas ayuda para registrarte?', 'bot-message');
            displayMessage('2. No encuentro el apartado de Ofertas', 'bot-message');
            displayMessage('3. No se como realizar mi primera compra', 'bot-message');
            displayMessage('4. Otro...', 'bot-message');
        }, 500);
    } else if (lowerCaseMessage === '1') {
        setTimeout(() => {
            displayMessage('Para registrarte debes hacer click en Loging');
            displayMessage('Esta al lado derecho en la esquina superior de la ventana, y ingresar los datos correspondientes.');
            displayMessage('Si tienes problemas para registrarte, no dudes en contactarte con nuestro equipo');
        }, 500);
    } else if (lowerCaseMessage.includes('como puedo contactarme con ustedes') ||
               lowerCaseMessage.includes('como me contacto con ustedes') ||
               lowerCaseMessage.includes('como puedo contactarme')) {
        setTimeout(() => {
            displayMessage('En la seccion de contacto en la ultima pestaña del menu puedes contactar a nuestro equipo por medio del formulario. Ingresa tus datos y escribenos tus inquietudes o inconvenientes.', 'bot-message');
        }, 500);
    } else {
        setTimeout(() => {
            displayMessage('No entiendo tu mensaje. Intenta escribir "Hola".', 'bot-message');
        }, 500);
    }
}





