// chat.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chat-input-form');
    const input = document.getElementById('chat-input');
    const chatContent = document.getElementById('chat-content');

    // Função para enviar a mensagem do usuário
    function sendUserMessage(messageText) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('chat-message', 'user');
        userMessage.innerHTML = `<div class="chat-message-text">${messageText}</div>`;
        chatContent.appendChild(userMessage);
    }

    // Função para enviar a resposta do bot
    function sendBotMessage(messageText) {
        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message', 'bot');
        botMessage.innerHTML = `<div class="chat-message-text">${messageText}</div>`;
        chatContent.appendChild(botMessage);
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    // Função para verificar se a pergunta está nas FAQs
    async function checkFAQ(messageText) {
        try {
            const response = await axios.get('http://localhost:8000/api/faq_entries');
            const faqs = response.data;

            const matchedFAQ = faqs.find(faq =>
                faq.question.toLowerCase().includes(messageText.toLowerCase())
            );

            if (matchedFAQ) {
                sendBotMessage(matchedFAQ.answer);
            } else {
                sendBotMessage(
                    `Pedimos desculpas, mas a ferramenta do chatbot ainda está em desenvolvimento. Por enquanto, você pode
                    verificar nosso <a href="/faq.html">FAQ</a> para obter respostas às perguntas mais comuns ou
                    <a href="/contacts.html">entrar em contato conosco</a> para mais assistência. Agradecemos sua compreensão.`
                );
            }
        } catch (error) {
            console.error('Erro ao consultar as FAQs:', error);
            sendBotMessage(
                `Pedimos desculpas, mas a ferramenta do chatbot ainda está em desenvolvimento. Por enquanto, você pode
                verificar nosso <a href="/faq.html">FAQ</a> para obter respostas às perguntas mais comuns ou
                <a href="/contacts.html">entrar em contato conosco</a> para mais assistência. Agradecemos sua compreensão.`
            );
        }
    }

    // Função para enviar a mensagem
    function sendMessage() {
        const messageText = input.value.trim();
        if (messageText === '') return;

        sendUserMessage(messageText);
        checkFAQ(messageText);
        input.value = '';
    }

    // Adiciona o evento de submit ao formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio do formulário
        sendMessage();
    });

    // Adiciona o evento de keydown ao campo de entrada
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Previne a nova linha no textarea
            sendMessage();
        }
    });
});
