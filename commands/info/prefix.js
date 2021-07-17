

  

const db = require('quick.db');

client.prefix = '-' // برفكس البوت الأساي

client.on("message", message => {

    if (message.author.bot) return;

    var prefix = db.get(`Prefix_${message.guild.id}.data`);

    if (prefix == null || undefined) db.set(`Prefix_${message.guild.id}`, { data: client.prefix })

    if (message.content.startsWith(prefix + "set-prefix")) {

        var args = message.content.split(' ');

        if (!message.member.hasPermission("ADMINISTRATOR")) {

            return message.react('❌')

        }

        if (!args[1]) {

            return message.channel.send(

                new Discord.MessageEmbed()

                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))

                .setColor("RED")

                .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))

                .setTimestamp()

                .setThumbnail(message.author.avatarURL({ dynamic: true }))

                .setDescription(`**❌ | Error: Please Type The Prefix**`)

            ).then(() => {

                message.channel.stopTyping();

            })

        }

        if (args[1].length > 5) {

            return message.channel.send(

                new Discord.MessageEmbed()

                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))

                .setColor("RED")

                .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))

                .setTimestamp()

                .setThumbnail(message.author.avatarURL({ dynamic: true }))

                .setDescription(`**❌ | Error: This Prefix Is Too Long**`)

            )

        }

        message.react('✅')

        db.set(`Prefix_${message.guild.id}`, { data: args[1] })

    }

});
