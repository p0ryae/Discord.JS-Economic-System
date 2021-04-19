const mongoCurrency = require('discord-mongo-currency');

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first();

  if(!member) return message.channel.send('You need to put a member to give the coins to.')
  if(!args[1]) return message.channel.send('You need to put an amount!')

  if(args[1].isNaN) return;

  await mongoCurrency.giveCoins(member.id, message.guild.id, `${args[1]}`)
  message.channel.send(`I just gave ${member} this amount of coin: \`${args[1]}\``)
}

module.exports.config = {
  name: "give",
  aliases: []
}
