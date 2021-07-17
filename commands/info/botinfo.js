const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");





module.exports = {
client.on("message", (msg) => {

    if (msg.content.startsWith(prefix + 'invite')) {

        return msg.channel.send(

            new Discord.MessageEmbed()

            .setAuthor(msg.author.username, msg.author.avatarURL({ dynamic: true }))

            .setColor("RED")

            .setThumbnail(msg.guild.iconURL({ dynamic: true }))

            .setTitle('Click Here')

            .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8589934591&redirect_uri=https%3A%2F%2Fncr-codes.glitch.me%2F`)

            .setTimestamp()

            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))

        )

    }

})
     



