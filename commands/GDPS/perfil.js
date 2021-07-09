const { MessageEmbed } = require("discord.js")
const axios = require('axios')
module.exports = {
 name: 'perfil',
  run: async(client, message, args) => {
  const settings = require('../../config/settings.json')
const GD = require('gd.js')

const gd = new GD({
  logLevel: 1,
  dbURL: settings.gdserver
})
    
    const user = await gd.users.getByUsername(`${args.join(" ")}`)
    console.log(user)
    if(user.socials.youtube) {
   query = user.socials.youtube.path
      if(query.length < 24) {

  uri = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${query}&fields=items&2Fsnippet%2Fthumbnails&key=${settings.google_api_key}`;

       } else {
         uri = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${query}&fields=items%2Fsnippet%2Fthumbnails&key=${settings.google_api_key}`
       }
       
       axios
       .get(uri)
       .then((pfp) => {
           const { data } = pfp
           console.log(pfp.data.items[0].snippet.thumbnails.high.url)
           
           if(data && !data.error) {
                   const Embed2 = new MessageEmbed()
    .setTitle('Perfil de '+args.join(" "))
    .setDescription(`
    Nombre del usuario:\n${user.username}\n\nEstrellas del usuario:\n${user.stats.stars}\n\nDemons del usuario:\n${user.stats.demons}\n\nStar Coins:\n${user.stats.coins.normal}\n\nUser coins:\n${user.stats.coins.user}\n\nPuntos de Creador:\n${user.stats.cp}
    `)
    .setColor("RANDOM")
    .setFooter("Comando ejecutado por: "+message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setThumbnail(pfp.data.items[0].snippet.thumbnails.high.url)
    message.channel.send(Embed2)
           } else {
              
           }
       })
       .catch(error => {
           console.log(error)
       })
    } else {
    const Embed = new MessageEmbed()
    .setTitle('Perfil de '+args.join(" "))
    .setDescription(`
    Nombre del usuario:\n${user.username}\n\nEstrellas del usuario:\n${user.stats.stars}\n\nDemons del usuario:\n${user.stats.demons}\n\nStar Coins:\n${user.stats.coins.normal}\n\nUser coins:\n${user.stats.coins.user}\n\nPuntos de Creador:\n${user.stats.cp}
    `)
    .setColor("RANDOM")
    .setFooter("Comando ejecutado por: "+message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(Embed)
    }
  }
}