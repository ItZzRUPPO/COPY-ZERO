const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
client.on("message", async message => {

    let command = message.content.toLowerCase().split(" ")[0];

    command = command.slice(prefix.length);

    if (command == "clear" || command == "مسح") {

        message.delete({ timeout: 0 })

        if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);

        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);

        if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);

        let args = message.content.split(" ").slice(1)

        let messagecount = parseInt(args);

        if (args > 100) return message.channel.send(

            new Discord.MessageEmbed()

            .setDescription(`\`\`\`js

i cant delete more than 100 messages 

\`\`\``)

        ).then(messages => messages.delete({ timeout: 5000 }))

        if (!messagecount) messagecount = '100';

        message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {

            message.channel.send(

                new Discord.MessageEmbed()

                .setDescription(`\`\`\`js

${msgs.size} messages cleared

\`\`\``)

            ).then(messages =>

                messages.delete({ timeout: 5000 }));

        })

    }

});
