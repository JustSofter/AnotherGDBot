var { prefix } = require('../../config/settings.json')

module.exports = {
    name: "message",
    run: async(client, message) => {
        
        if(message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        const command = client.commands.get(cmd.toLowerCase());


        if(!command) return;
        try {
            command.run(client, message, args)
        } catch (err) {
            message.channel.send(`Hubo un error al ejecutar el comando, este es el error:\n \`\`\`${err}\`\`\` `)
            console.log(err)
        }
    }
}
