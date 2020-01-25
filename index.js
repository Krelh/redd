const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on(`message`, (message) => {

  if(message.content.toLowerCase() === 'f' || message.content.toLowerCase() === 'ff' || message.content.toLowerCase() === 'fff' || message.content.toLowerCase() === '!wf' ){
    //message.reply('@here');
    message.channel.send('@here war fund');
    message.channel.send('@here war fund');
    message.channel.send('@Army war fund');
    message.channel.send('@Army war fund');
    message.channel.send('@Army war fund');
  }
});


// login bot
bot.login('NjcwNTk5NDE3MzQyMTk3Nzkx.Xixm9A.p3r70KBNUZH0hY0tYg0yDbW3Irs');
