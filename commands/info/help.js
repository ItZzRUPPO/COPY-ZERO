const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h", "Help"],
  description: "Show Help Command",
  usage: "Help",
  run: async(client, message, args) => {
 
    
  
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Zero Help`)

    .setDescription(`My Prefix is *-*
 
**Info** 
\`help\` - \`ping\` - \`Server\` - \`id\`
\`userinfo\` - \`invite\` - \`uptime\`
\`say\` - \`uinvite\` - \`roles\` - \`se\`
\`stats\` - \`avatar\` - \`support\`
\`weather\` - \`timer\` - \`members\`
\`website\`
**Moderation** 
\`ban\` - \`unban\` - \`kick\`,
\`mute\` - \`unmute\` - \`clear\`
\`lock\` - \`unlock\` - \`slowmode\`
\`nick\` - \`hide\` - \`unhide\` 
\`vmute\` - \`vunmute\` -\`vkick\`

**Fun**
\`ascii\` - \`iq\` - \`rps\`
\`howgay\` - \`rate\`

**Gifs**
\`boy\` - \`girl\` - \`anime\`
\`smoke\` - \`baby\` - \`love\`
\`neon\`

**Photos** 
\`Pboy\` - \`Pgirl\` - \`Panime\`
\`Pcartoon\` - \`Pbaby\` - \`Plove\`
\`Psmoke\`

**Links**
[Server](https://discord.gg/vcK3BNtrNa)**-**[Invite](https://discord.com/api/oauth2/authorize?client_id=830265742795866162&permissions=8&scope=bot)**-**[Website](https://zero-system.glitch.me)

`)  
   .setFooter(`${message.author.username}`)
//  .setImage(``)
//  .setTimestamp();   
  message.react(`✅`)
  return message.channel.send(embed);
   
     }
 };
      
    
  

