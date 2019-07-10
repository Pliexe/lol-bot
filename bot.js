const {Client} = require('discord.js');

const bot = new Client({disableEveryone: true});

bot.on('ready', () => {
    console.log('Bot online!');
    bot.user.setActivity('LOL');
});

bot.on('message', message => {
    if(message.content.toLowerCase() === 'hello') message.channel.send("fuck you");
});

bot.login(env.process.TOKEN);