const fs = require("fs");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const chooseArr = ["✌", "✊", "✋"];
function promptMessage(message, author, time, vaildReactions) {
    time *= 1000;
    for (const reaction of vaildReactions) message.react(reaction);
    const filter = (reaction, user) =>
      vaildReactions.includes(reaction.emoji.name) && user.id === author.id;
    return message
      .awaitReactions(filter, { max: 1, time: time })
      .then(collected => collected.first() && collected.first().emoji.name);
  }

module.exports = {
  name: "rps",
  aliases: [""],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {

        const embed = new Discord.MessageEmbed()
            .setColor("")
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setTitle("**React to play Rock Paper Scissor**")
            
            
        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);

        embed
            .setTitle(`${result}`)
            .setDescription(`**${reacted} vs ${botChoice}**`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "✊" && clientChosen === "✌") ||
                (me === "✋" && clientChosen === "✊") ||
                (me === "✌" && clientChosen === "✋")) {
                    return "You won!";
            } else if (me === clientChosen) {
                return "It's a tie";
            } else {
                return "You lost";
            }
        }}
  }
