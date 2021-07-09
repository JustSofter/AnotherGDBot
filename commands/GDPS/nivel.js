const { MessageEmbed } = require("discord.js")
module.exports = {
  name: 'nivel',
  run: async(client, message, args) => {
  const settings = require('../../config/settings.json')
  const emoji = require('../../config/emoji.json')
const GD = require('gd.js')

const gd = new GD({
  logLevel: 1,
  dbURL: settings.gdserver
})

const Rate = {
  "None": 'No.',
  "Feature": "Featured",
  "Epic": "Epic"
}

const THMBURL = {
  "N/A": "https://largebountifulautoexec.notsofter.repl.co/public/na.png",
  "Easy": "https://largebountifulautoexec.notsofter.repl.co/public/ez.png",
  "Normal": "https://largebountifulautoexec.notsofter.repl.co/public/nm.png",
  "Hard": "https://largebountifulautoexec.notsofter.repl.co/public/Hard.png",
  "Harder": "https://largebountifulautoexec.notsofter.repl.co/public/Harder.png",
  "Insane": "https://largebountifulautoexec.notsofter.repl.co/public/Insane.png",
  "Easy Demon": "https://largebountifulautoexec.notsofter.repl.co/public/edemon.png",
  "Medium Demon": "https://largebountifulautoexec.notsofter.repl.co/public/mdemon.png",
  "Hard Demon": "https://largebountifulautoexec.notsofter.repl.co/public/hdemon.png",
  "Insane Demon": "https://largebountifulautoexec.notsofter.repl.co/public/idemon.png",
  "Extreme Demon": "https://largebountifulautoexec.notsofter.repl.co/public/exdemon.png"
}

    const leveldata = await gd.levels.get(`${args.join(" ")}`)
   console.log(leveldata)
    if(leveldata.description === '') {
      description = '(No se ha escrito una descripción)'
    } else {
      description = leveldata.description
    }
    if(!leveldata.creator.accountID) {
      const LevelEmbed2 = new MessageEmbed()
    .setTitle('Información del nivel')
    .setDescription(`
    Nombre: ${leveldata.name}\n\nID: ${leveldata.id}\n\n${emoji.star} Estrellas: ${leveldata.difficulty.stars} (Si sale 0, no está rateado.)\n\n${emoji.like} Likes: ${leveldata.stats.likes}\n\n${emoji.download} Descargas: ${leveldata.stats.downloads}\n\n${emoji.orbs} Orbes: ${leveldata.orbs}\n\nDescripción: ${description}\n\n¿Rateado? ${Rate[leveldata.award.pretty]}\n\n${emoji.time} Longitud: ${leveldata.stats.length.pretty}`)
    .setThumbnail(`${THMBURL[leveldata.difficulty.level.pretty]}`)
    .setColor("RANDOM")
    .setFooter("Comando ejecutado por: "+message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  return  message.channel.send(LevelEmbed2)
    }
    const creator = await gd.users.getByAccountID(leveldata.creator.accountID)
    
    console.log(creator)
    const LevelEmbed = new MessageEmbed()
    .setTitle('Información del nivel')
    .setDescription(`
    Nombre: ${leveldata.name}\n\nID: ${leveldata.id}\n\nCreado por: ${creator.username}\n\n${emoji.star} Estrellas: ${leveldata.difficulty.stars} (Si sale 0, no está rateado.)\n\n${emoji.like} Likes: ${leveldata.stats.likes}\n\n${emoji.download} Descargas: ${leveldata.stats.downloads}\n\n${emoji.orbs} Orbes: ${leveldata.orbs}\n\nDescripción: ${description}\n\n¿Rateado? ${Rate[leveldata.award.pretty]}\n\n${emoji.time} Longitud: ${leveldata.stats.length.pretty}`)
    .setThumbnail(`${THMBURL[leveldata.difficulty.level.pretty]}`)
    .setColor("RANDOM")
    .setFooter("Comando ejecutado por: "+message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(LevelEmbed)

 // const decodeddata = await leveldata.decodeData(true)
 // console.log(decodeddata)
  }
}
