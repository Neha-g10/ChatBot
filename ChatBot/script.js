const bot = document.querySelector('.bot');
const chatBox = document.querySelector('.chat-box')
const close = document.querySelector('.close-icon');
bot.addEventListener('click', function(){
    if(chatBox.style.display === "none"){
chatBox.style.display = "block";
    }
    else{
        chatBox.style.display = "none";
    }
})

close.addEventListener('click', function(){
    chatBox.style.display = "none";
})