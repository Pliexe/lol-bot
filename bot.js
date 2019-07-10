var app = express();

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});

const {Client} = require('discord.js');

const bot = new Client({disableEveryone: true});

bot.on('ready', () => {
    console.log('Bot online!');
    bot.user.setActivity('LOL');
});

bot.on('message', message => {
    if(message.author.bot) return;

    if(message.content.toLowerCase() === 'hello') message.channel.send("fuck you");
});

bot.login(process.env.TOKEN);