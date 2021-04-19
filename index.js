const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const config = require('./settings.json');
const mongoose = require('mongoose');
const { loadCommands } = require('./utils/loadCommands');
const mongoCurrency = require('discord-mongo-currency');

mongoose.connect(config.MongoDB, { useNewUrlParser: true, useUnifiedTopology: true, })
mongoose.set('useFindAndModify', false);

mongoCurrency.connect(config.MongoDB);

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Map()

loadCommands(bot);
bot.login(config.token);
