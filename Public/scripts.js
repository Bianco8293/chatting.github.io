document.addEventListener('DOMContentLoaded', function() {
    var sendButton = document.getElementById('send-btn');
    var messageInput = document.getElementById('user-msg');
    var chatHistory = document.querySelector('.chat-history');

    sendButton.addEventListener('click', function() {
        var message = messageInput.value;
        if (message.trim()) { // Girdi boş değilse
            var div = document.createElement('div');
            div.textContent = message;
            chatHistory.appendChild(div);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
