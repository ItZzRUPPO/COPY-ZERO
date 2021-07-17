const fs = require("fs");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "slots",
  aliases: [""],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
let slots = ["🍎", "🍒", "🍓", "🍆", "💶", "💎"];
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));
  let name = message.author.displayName;
  let msg = await message.channel.send("Rolling the Slots..");
  let aicon = message.author.displayAvatarURL()    
      if (slots[result1] === slots[result2] && slots[result3]){ 
      let wEmbed = new Discord.MessageEmbed()
       .setFooter("You Won!",aicon)
       .setTitle("🎰 **Slots**")
       .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
       .setColor(Color);
      await message.channel.send(wEmbed);
       
          }else {
       
       let embed = new Discord.MessageEmbed()
       .setFooter('You Lost!',aicon)
       .setTitle("🎰 **Slots**")
       .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
       .setColor("");
     await  message.channel.send(embed);
      
       }   
  if (slots[result1] ==  slots[result2] == slots[result1] && slots[result3] == slots[result1]){
    let embed = new Discord.MessageEmbed()
       .setFooter('You won the jackpot!',aicon)
       .setTitle("🎰 **Slots**")
       .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
       .setColor("");
     await  message.channel.send(embed);
}
}
}
