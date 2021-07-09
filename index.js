const { Collection, MessageEmbed } = require('discord.js');

var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)

server.listen(8080);    
app.use('/public', express.static(__dirname + "/"));

require('isomorphic-fetch')

const settings = require('../../config/settings.json')

const { promisify } = require('util')

const glob = require('glob')

const Discord = require('discord.js')

const globPromise = promisify(glob);

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.commands = new Collection();
client.events = new Collection();
client.categories = new Set();

;(async() => {
 
 const eventFiles = await globPromise(`${__dirname}/events/**/*.js`);
 const commandFiles = await globPromise(`${__dirname}/commands/**/*.js`);
    eventFiles.map((value) => {
        const file = require(value);
        client.events.set(file.name, file);
        client.on(file.name, file.run.bind(null, client));
    });
    commandFiles.map((value) => {
        const file = require(value);
        client.commands.set(file.name, file);
        client.categories.add(file.category)
    });
})();


client.login(settings.token)