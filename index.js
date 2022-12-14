require('dotenv').config();
const { Client, GatewayIntentBits, MessageAttachment, MessageEmbed, EmbedBuilder } = require('discord.js');
const axios = require('axios');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});


const func = require("./components/functions.js") 




client.on('messageCreate', msg => {
  if (msg.content === '!csyt') {
    msg.channel.send("https://www.youtube.com/channel/UCWh1kMHFOXLs1t9_tNFWBcQ");
  }
});



client.on('messageCreate', msg => {
  if (msg.content === 'Ping') {
    msg.channel.send("Pong Bitch!");
  }
});

client.on('messageCreate', msg => {
  if (msg.content === 'Hello') {
    msg.reply(`Hello ${msg.author.username}`);
  }
});

async function getMeme(){
  const res = await axios.get('https://memeapi.pythonanywhere.com/');
  console.log(res.data)
  return res.data.memes[0].url;
}

client.on('messageCreate', msg => {
  if (msg.content === '!invite') {
    replyWithInvite(msg);
  }
});


client.on('messageCreate', async msg => {
  if (msg.content === '!blue') {
    msg.channel.send("Tournament can be found: https://challonge.com/4eei93kk");
    func.getBlue()
    .then(data => {
        msg.channel.send("Getting Players in the 🔵Blue League....");
        msg.channel.send("Current Standings");
        data.map(({ participant }) => msg.channel.send(`${participant.name} - Current Position: ${participant.ordinal_seed}`))
  })}
});

client.on('messageCreate', async msg => {
  if (msg.content === '!pink') {
    msg.channel.send("Tournament can be found: https://challonge.com/huk594jb");
    func.getPink()
    .then(data => {
        msg.channel.send("Getting Players in the 🟣Pink League....");
        msg.channel.send("Current Standings");
        data.map(({ participant }) => msg.channel.send(`${participant.name} - Current Position: ${participant.ordinal_seed}`))
  })}
});

client.on('messageCreate', async msg => {
  if (msg.content === '!black') {
    msg.channel.send("Tournament can be found: https://challonge.com/73ldr679");
    func.getBlack()
    .then(data => {
        msg.channel.send("Getting Players in the ⚫Black League....");
        msg.channel.send("Current Standings");
        data.map(({ participant }) => msg.channel.send(`${participant.name} - Current Position: ${participant.ordinal_seed}`))
  })}
});

client.on('messageCreate', async msg => {
  if (msg.content === '!plat') {
    msg.channel.send("Tournament can be found: https://challonge.com/u4h7auz6");
    func.getPlat()
    .then(data => {
        msg.channel.send("Getting Players in the ⚪Platinum League....");
        msg.channel.send("Current Standings");
        data.map(({ participant }) => msg.channel.send(`${participant.name} - Current Position: ${participant.ordinal_seed}`))
  })}
});



  client.on('messageCreate', async msg => {
    if (msg.content === '!hb') {
      const exampleEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('TSC Snooker Highest Breaks')
      .setAuthor({ name: 'The Snooker Club', iconURL: 'https://media.discordapp.net/attachments/847144886154821703/848132307721256961/Photo_1596994915532.png?width=690&height=683', url: 'https://discord.js.org' })
     // .setThumbnail('https://media.discordapp.net/attachments/847144886154821703/848132307721256961/Photo_1596994915532.png?width=690&height=683')
      .addFields(
          { name: '🟤  Brown Ball League', value: 'https://www.creativesnooker.com/' },
          { name: '🔵  Blue Ball League', value: 'https://www.creativesnooker.com/' },
          { name: '🟣  Pink Ball League', value: 'https://www.creativesnooker.com/' },
          { name: '⚫  Black Ball League', value: 'https://www.creativesnooker.com/' },
      )
      .setImage('https://cdn.discordapp.com/attachments/711353889475133483/948765968161730650/CC_20211231_131852.png?width=690&height=683')
      .setTimestamp()
      .setFooter({ 
        text: 'The Snooker Club', 
        iconURL: 'https://cdn.discordapp.com/attachments/711353889475133483/948765968161730650/CC_20211231_131852.png?width=690&height=683'
      });
    
      msg.channel.send({ embeds: [exampleEmbed] });
    }});


client.on('messageCreate', async msg => {
	if (msg.content === '!cat') {
		const catResult = await request('https://aws.random.cat/meow');
    console.log(catResult)
		const { file } = await getJSONResponse(catResult.body);
		msg.channel.send({ files: [file] });
	}
});


async function replyWithInvite(message) {
  let invite = await message.channel.createInvite(
  {
    maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
    maxUses: 1 // maximum times it can be used
  },
)
.catch(console.log);

  message.reply(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
}

async function getJSONResponse(body) {
	let fullBody = '';
	for await (const data of body) {
		fullBody += data.toString();
	}
	return JSON.parse(fullBody);
}

//must be last line
client.login(process.env.CLIENT_TOKEN);