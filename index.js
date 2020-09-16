const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzU1Nzg3Mzk5NDY4MDIzODU4.X2IX3Q.1fDICzoCUnSmwQFUWLW9ZdS-xUY';

const PREFIX = ';';

bot.on('ready', () =>{
  console.log('This bot is online');
  bot.user.setStatus('available')
  bot.user.setActivity('Prefix ;')
})
