const badword = ["quz", "dakt","kerm","quzi","xushkt"];// baddle xow wsha bxara am kawanaya

 client.on('message',async message => {

if (badword.some(d => message.content.toLowerCase().includes(d))) {

message.delete();

message.reply(`No mistakes fucker`);

const bawan = message.member;

bawan.roles.add('Muted');
