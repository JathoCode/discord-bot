const Discord = require('discord.js');
const bot = new Discord.Client();
//De token kan niet op GitHub ivm 'privacy'
const token = 'TOKEN';

const PREFIX = ';';

bot.on('ready', () =>{
	console.log('This bot is online');
	bot.user.setStatus('available')
	bot.user.setActivity('Prefix ' + PREFIX)
})

// T is nu al een zooitje, maar ik maak hier n tijdelijke verzamelplek voor de embeds :)
const helpEmbed1 = new Discord.MessageEmbed()
.setColor('#ff8000')
.setTitle('SprintJoekels Commands')
.addFields(
 	{ name: `${PREFIX}help`, value: 'Displays this message, duh.' },
 	{ name: `${PREFIX}ping`, value: 'Play a game of Ping-Pong' },
        { name: `${PREFIX}say`, value: 'Let the bot say something.'},
)
.setFooter('Showing page 1/1')

// Dit moet lijken op een command handler ofzo, bij een fout command stuurt ie 'Unknown command' terug
// Vond ik wel grappig
bot.on('message', message => {
	if (!message.content.startsWith(PREFIX) || message.author.bot) return;

	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	const sayMessage = args.join(' ');
	const ping = Date.now() - message.createdTimestamp + ' ms';

	 if (command === 'ping') {
   		message.channel.send(`Pong! (${ping})`);
 	}
	else if (command === 'help') {
 		message.channel.send(helpEmbed1);
   	else if (command === 'say') {
		if (!args.length) {
			 message.channel.send(`Error: The command ${PREFIX}say requires arguments. Example: ${PREFIX}say Test`);
		}
		else {
			message.channel.bulkDelete(1)
			message.channel.send(sayMessage)
		}
	}
	// Gewoon hieronder wat andere commandjes toevoegen
	else {
   	message.channel.send(`Error: Unknown command. Type '${PREFIX}help' to view a list of all commands.`)
 	}
})

bot.login(token);

//Invite link:
//https://discord.com/api/oauth2/authorize?client_id=755787399468023858&permissions=0&scope=bot
