const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'help',
  run: (client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle('Comandos.')
    .setDescription('```(Prefix)nivel <Nombre o ID del nivel>```\nCon este comando puedes buscar niveles de GD.\n\n```(prefix)perfil <Nombre de un usuario>```\nCon este comando puedes buscar a un usuario de GD.')
    .setColor("RANDOM")
     message.channel.send(embed)
  }
}
