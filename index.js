const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
  if (msg.content === '^ciao') {
    msg.reply('Ciao https://pa1.narvii.com/6185/b5f3c8b53e5e000fb63951ecce6f48d4535cdc7c_hq.gif');
  } else if (msg.content === '^yuu') {
    msg.channel.send('Amo solo Yuu <:valentine:571660993659273216>');
  } else if (msg.content === '^shinoa') {
    msg.channel.send('Sono perfetta <:xD:571665740319555584>');
  } else if (msg.content === '^hug <@400354269548642335>') {
   msg.reply('ha abbracciato <@400354269548642335> https://media.giphy.com/media/hWQkFYgwIsyP8QIrR7/giphy.gif');
  } else if (msg.content === '^hug <@425715851245912084>') {
   msg.reply('ha abbracciato <@425715851245912084> https://media.giphy.com/media/hWQkFYgwIsyP8QIrR7/giphy.gif');
  } else if (msg.content === '^hug <@581185937262772243>') {
   msg.reply('ha abbracciato <@581185937262772243> https://media.giphy.com/media/hWQkFYgwIsyP8QIrR7/giphy.gif');
} else if (msg.content === '^pat <@400354269548642335>') {
   msg.reply('sta accarezzando <@400354269548642335> https://media.giphy.com/media/fZ7fAVMKByoE0iyari/giphy.gif');
  } else if (msg.content === '^pat <@425715851245912084>') {
   msg.reply('sta accarezzando <@425715851245912084> https://media.giphy.com/media/fZ7fAVMKByoE0iyari/giphy.gif');
  } else if (msg.content === '^pat <@581185937262772243>') {
   msg.reply('sta accarezzando <@581185937262772243> https://media.giphy.com/media/fZ7fAVMKByoE0iyari/giphy.gif');
  } else if (msg.content === '^handhold <@400354269548642335>') {
   msg.reply('sta tenendo la mano di <@400354269548642335> https://media.giphy.com/media/KcDirgcZ8uOR5oUSci/giphy.gif');
  } else if (msg.content === '^handhold <@425715851245912084>') {
   msg.reply('sta tenendo la mano di <@425715851245912084> https://media.giphy.com/media/KcDirgcZ8uOR5oUSci/giphy.gif');
  } else if (msg.content === '^handhold <@581185937262772243>') {
   msg.reply('sta tenendo la mano di <@581185937262772243> https://media.giphy.com/media/KcDirgcZ8uOR5oUSci/giphy.gif');
   } else if (msg.content === '^stare <@400354269548642335>') {
   msg.reply('sta fissando <@400354269548642335> https://i.pinimg.com/originals/24/9b/c7/249bc745a56a924569140bc53e11dcb0.gif');
   } else if (msg.content === '^stare <@425715851245912084>') {
   msg.reply('sta fissando <@425715851245912084> https://i.pinimg.com/originals/24/9b/c7/249bc745a56a924569140bc53e11dcb0.gif');
   } else if (msg.content === '^stare <@581185937262772243>') {
    msg.reply('sta fissando <@581185937262772243> https://i.pinimg.com/originals/24/9b/c7/249bc745a56a924569140bc53e11dcb0.gif');
   } else if (msg.content === '^protect <@400354269548642335>') {
   msg.reply('sta proteggendo <@400354269548642335> https://i.ibb.co/6Dt2YN9/original.gif');
   } else if (msg.content === '^protect <@425715851245912084>') {
   msg.reply('sta proteggendo <@425715851245912084> https://i.ibb.co/6Dt2YN9/original.gif');
   } else if (msg.content === '^protect <@581185937262772243>') {
    msg.reply('sta proteggendo <@581185937262772243> https://i.ibb.co/6Dt2YN9/original.gif');
} else if (msg.content === '^kill <@400354269548642335>') {
   msg.reply('sta uccidendo <@400354269548642335> https://media.giphy.com/media/26BkNT1DmY5WTn5lu/giphy.gif');
   } else if (msg.content === '^kill <@425715851245912084>') {
   msg.reply('sta uccidendo <@425715851245912084> https://media.giphy.com/media/26BkNT1DmY5WTn5lu/giphy.gif');
   } else if (msg.content === '^kill <@581185937262772243>') {
    msg.reply('sta uccidendo <@581185937262772243> https://media.giphy.com/media/26BkNT1DmY5WTn5lu/giphy.gif');
} else if (msg.content === '^cry') {
    msg.reply('sta piangendo http://fanaru.com/seraph-of-the-end-vampire-reign/image/142200-seraph-of-the-end-vampire-reign-yuichiro.gif')
  } else if (msg.content === '^smug') {
    msg.channel.send('https://i.imgur.com/oIVdJdr.gif?noredirect')
  } else if (msg.content === '^pout') {
    msg.channel.send('https://gifimage.net/wp-content/uploads/2018/05/shinoa-gif-10.gif')
   } else if (msg.content === '^happy') {
   msg.reply('è molto felice https://gifimage.net/wp-content/uploads/2018/04/owari-no-seraph-shinoa-gif-8.gif');
  } else if (msg.content === '^sleepy') {
   msg.reply('ha sonno https://media.giphy.com/media/LQ3rDj2VPYaB0PssYD/giphy.gif');
  } else if (msg.content === '^blush') {
   msg.reply('sta arrossendo https://giffiles.alphacoders.com/172/172347.gif');
} else if (msg.content === '^angry') {
   msg.reply('è arrabbiato https://data.whicdn.com/images/186593928/original.gif');
} else if (msg.content === '^what') {
   msg.channel.send(' WHAT?!  https://i.pinimg.com/originals/53/71/c3/5371c35c097279390767494500891417.gif');
   } else if (msg.content === '^boom') {
   msg.reply('sta facendo :boom: https://cdn.dribbble.com/users/3205235/screenshots/6288649/bomb.gif');
} else if (msg.content === '^dance') {
   msg.reply('sta ballando http://66.media.tumblr.com/cc52c80fdbacdb62d84399e727c3da1e/tumblr_nn4p9cSl5h1ta7pubo1_500.gif');
   } else if (msg.content === '^yuunoa') {
    msg.channel.send('Best ship <:valentine:571660993659273216> https://i.pinimg.com/originals/62/03/a6/6203a64d26a386640231d4524eb4c76f.gif');
  } else if (msg.content === 'Server') {
   msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`)
   }
})
client.login('process.env.token')
