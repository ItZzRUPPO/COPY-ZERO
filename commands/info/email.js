var randomEmail = require('random-email');

var randomPassword = require('random-password');

 

client.on("message", async message => {

  if(message.content.toLowerCase() ===prefix + "random") {

      if(message.author.id == "767484873908682810") return;

    let data = await randomEmail({ domain: 'gmail.com' })

    let data1 = await randomPassword(NaN);

    message.channel.send(new Discord.MessageEmbed()

    .setTitle(`**Email&Pass Generator By : 'Eren.#4444**`)

    .addField(`✉️ - Email :`,data)

    .addField(`⛓ - Pass : `,data1))

  }

})
