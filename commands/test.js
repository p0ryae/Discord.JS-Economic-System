module.exports.run = async (bot, message, args) => {
  var yourping = new Date().getTime() - message.createdTimestamp
  var botping = Math.round(bot.ws.ping)

  message.channel.send(`<a:check:772282559723339826>\`\`\`js\nlatency: ${yourping}ms\nAPI latency: ${botping}ms\`\`\``)
}

module.exports.config = {
  name: "test",
  aliases: ['latency', 'ping']
}
