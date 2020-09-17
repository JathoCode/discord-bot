const Discord = require('discord.js');
const bot = new Discord.Client();
//De token kan niet op GitHub ivm 'privacy'
const token = 'TOKEN';

const PREFIX = ';';

bot.on('ready', () =>{
  console.log('This bot is online');
  bot.user.setStatus('available')
  bot.user.setActivity('Prefix ;')
})

//Standaard ping-pong bericht
bot.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('pong');
    }
})

bot.login(token);

//Invite link:
//https://discord.com/api/oauth2/authorize?client_id=755787399468023858&permissions=0&scope=bot
