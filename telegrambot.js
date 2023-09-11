const token="enter the token"
const TelegramBot=require('node-telegram-bot-api')
let bot = new TelegramBot(token, { polling: true });

bot.on('message', message =>{  
    if(message.text === 'hi' || message.text === "Hi"){
    let chat_id=message.from.id;
    bot.sendMessage(chat_id,`hello from nodejs 🫡
    we are here to help you`)
}
else if(message.text === 'okay' || message.text === 'Okay'){
    let chat_id=message.from.id;
    bot.sendMessage(chat_id,`yus`)
}
else if(message.text === 'best novel' || message.text === `Best novel` || message.text === 'Best Novel'){
    let chat_id=message.from.id;
    bot.sendMessage(chat_id,`okay
   The Monk Who Sold His Ferrari
   The Alchemist
   Betrayal of Faith
   The Well House`)
}
else{
    let chat_id=message.from.id;
    bot.sendMessage(chat_id,`sorry! ☠️ 
    don't know about these thing try anything else
    thank you`)
}
})



