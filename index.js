const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const http = require("https");
const { SlashCommandBuilder } = require('discord.js');


require('dotenv').config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'floor') {

    interaction.reply(interaction.options.get('collection').value)

    const options = {
        "method": "GET",
        "hostname": "twonk-market.twetch.app",
        "port": null,
        "path": "/collections/2d1d647aab8ffd5bc1e3c6f89dda3c3a1755035d2f877a94e2505f543d3b44e8/stats",
        "headers": {
          "cookie": "INGRESSCOOKIE=99eac409553486401d5f6c9ca6906bfa%7Cc69a6e131abe426a06333fa400d87f90",
          "Content-Length": "0"
        }
      };
      
      const req = http.request(options, function (res) {
        const chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function () {
          const body = Buffer.concat(chunks);
          console.log(body.toString());
          interaction.reply(body.toString())
        });
      });
      
      req.end();



  }
});
client.login(process.env.TOKEN);


