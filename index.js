const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'TOKEN';

const PREFIX = ';';

bot.on('ready', () =>{
  console.log('This bot is online');
  bot.user.setStatus('available')
  bot.user.setActivity('Prefix ;')
})
