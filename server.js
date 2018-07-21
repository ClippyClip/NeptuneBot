const Discord = require('discordjs');
const client = new Discord.Client();

//Constant Variables
const prefix = 'n!';
const ownerID = '81829298129866752';

//Listener Events
client.on('message', message => {

    //Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    //Return Statements
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    //Command Handler
    try {

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args);

    } catch (e) {
        console.log(e.stack);
    });

//Ready Event
client.on('ready', () => console.log('Launched!'));

//Discord Login
client.login(process.env.NDcwMDA4MTY3ODI5NDcxMjQy.DjTd4A.3N53nUi-OKgvAaV2VwpabnPswn4);
