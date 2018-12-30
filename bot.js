const Discord = require('discord.js');
const client = new Discord.Client();
const a = new Discord.Client();
const b = new Discord.Client();
console.log("By al7midy");
const ownerid = '525270331611414529';

client.on("ready", () => {
let channel =     client.channels.get("529016214547070996")
setInterval(function() {
channel.send(`1`);
}, 30)
})

a.on("ready", () => {
let channel =     a.channels.get("529016214547070996")
setInterval(function() {
channel.send(`2`);
}, 30)
})

b.on("ready", () => {
let channel =     b.channels.get("529016214547070996")
setInterval(function() {
channel.send(`3`);
}, 30)
})

a.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "h") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

b.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "h") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "h") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});

client.login(process.env.BOT_TOKEN);
a.login(process.env.BOT_TOKEN1);
b.login(process.env.BOT_TOKEN2);



