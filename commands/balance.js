const mongoCurrency = require('discord-mongo-currency');

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first() || message.member;

  const user = await mongoCurrency.findUser(member.id, message.guild.id);

  message.channel.send(`Your wallet money is \`${user.coinsInWallet}\``)
}

module.exports.config = {
  name: "balance",
  aliases: []
}
