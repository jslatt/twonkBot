const { Client, GatewayIntentBits, ApplicationCommandPermissionType } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const http = require("https");
const { SlashCommandBuilder } = require("discord.js");
var axios = require("axios").default;
require("dotenv").config();

const collections = {
  rareSirloin: {
    name: "Rare Sirloin",
    id: "2d1d647aab8ffd5bc1e3c6f89dda3c3a1755035d2f877a94e2505f543d3b44e8",
    rarity: true
  },
  planetarySquares: {
    name: "Planetary Squares",
    id: "3f1b6a28ba26fd7cbc3729f5a174f750733a7d2f55e2f3ab796a76b4479eb7fc",
    rarity: true
  },
  cyberId: {
    name: "Cyber ID",
    id: "aff9cc05c7ece89af329415e1f7391bacf93ab6ad9006b8cfa1c43c94a3e04e0",
    rarity: true
  },
  lizerCorp: {
    name: "Lizer Corp",
    id: "b792b25417195242664d2624fe28e39173d7026285a5282a4912a7b0405437b9",
    rarity: true
  },
  planetaryButtons: {
    name: "Planetary Buttons",
    id: "b77c9d32eeb2e4a587833ce5ac2368b896ade4790f43ef4d7087bb48fc9b77b3",
    rarity: true

  },
  boredWaifus: {
    name: "Bored Waifus",
    id: "f9d6d0553dbed94608332cec4d28a48ae8dfe491d8415df9162826025f4f3e46",
    rarity: true

  },
  specialForces: {
    name: "Special Forces",
    id: "c6cac52ebeaf8b8c9fc8859a3ac2a388b804b4aed91a5d6ea2d8938e3d4c2fc9",
    rarity: true

  },
  labMonkes: {
    name: "Lab Monkies",
    id: "2ce7ed955162a73e3e30ac4a8e01a0584b3e429aac9944ef92a707e8c1656c4e",
    rarity: true

  },
  apuCartel: {
    name: "Apu Cartel",
    id: "af834baef0563d692a1942daaebea9e3e3a0a5843cbff7667d7776a530fef520",
    rarity: true

  },

  slurpJuice: {
    name: "Slurpjuice",
    id: "e84e2fd140fa80e5fab149a972ec1d85c100fb4de229daaeab4e20fa54da04db",
    rarity: false

  },
  lizervaxx: {
    name: "Lizervaxx",
    id: "964a82d5d478eb7f6236e1c2ee6cb993c50b3131cd88b1d1330f6f125d31bb8d",
    rarity: false

  },
  nvmbears: {
    name: "Nvm Bears",
    id: "b2d65c90b1085f75734894d9b48e8cce5f83cf532187cc88b7f6123ea59e6867",
    rarity: true

  },
  planetaryBalls: {
    name: "Planetary Balls",
    id: "ee3176b2e08c6ae2f772685843109ba78a0b489b2ad633f799ce1ef2ce766581",
    rarity: true

  },
  planetaryPixels: {
    name: "Planetary Pixels",
    id: "c749fa6d7251780f1ce764a2c80e428e4da598b65f342913974076e944bd4e40",
    rarity: true

  },
  foxSyndicate: {
    name: "Fox Syndicate",
    id: "20d0f7e0f64cd5a9e6a12687a29ee896d5f487fe4e8f458798fcacceb4dca3c5",
    rarity: true

  },
  graveyard: {
    name: "Graveyard",
    id: "9ff8922f53093f0a10b0b368a3724460c109c2acf2087f6ccaf822f47aede467",
    rarity: true

  },
  frogCartel: {
    name: "Frog Cartel",
    id: "c8925e7b008668089d3ae1fc1cf450f7f45f0b4af43cd7d30b84446ecb374d6d",
    rarity: true

  },
  oniSociety: {
    name: "Oni Society",
    id: "9f4b93e97ca5905c0f01a8e6446d1c0f45f42bdc47704bb5cdc09c6b874f77b0",
    rarity: true

  },
  astroApes: {
    name: "Astro Apes",
    id: "20d0f7e0f64cd5a9e6a12687a29ee896d5f487fe4e8f458798fcacceb4dca3c5",
    rarity: true

  },
  planetarySkies: {
    name: "Planetary Skies",
    id: "20d0f7e0f64cd5a9e6a12687a29ee896d5f487fe4e8f458798fcacceb4dca3c5",
    rarity: true

  },
  sweatpants: {
    name: "Comfy Sweatpants",
    id: "c3307641a7173380d214c3095697a1fdd30a40dc2376b82b437fbd1515c0a974",
    rarity: true

  },
  muties: {
    name: "Muties",
    id: "aa6289308b7180b47b5f2b99ac9a057b8bcbf3f3c646d7a9e3b3a35805151bc7",
    rarity: true

  },
  hoodie: {
    name: "Cozy Hoodie",
    id: "20d0f7e0f64cd5a9e6a12687a29ee896d5f487fe4e8f458798fcacceb4dca3c5",
    rarity: true
  }
};



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const db = {}

  let floorScanner = setInterval(function () {
    let counter = 0;


    var objectKeysArray = Object.keys(collections);
    objectKeysArray.forEach(function (objKey) {
      // IF HAS A RARITY PARAM
      if (collections[objKey].rarity) {
        rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Exotic"]

      for (i=0; i<rarities.length; i++) {

        var options = {
          method: 'POST',
          url: 'https://twonk-market.twetch.app/collections/' + collections[objKey].id + '/listings',
          params: {limit: '1'},
          headers: {'Content-Type': 'application/json'},
          data: {
            min: 0,
            max: 1.7976931348623157e+308,
            order: 'ASC',
            order_by: 'satoshis_price',
            status: 'listed',
            rankings: [rarities[i]]
          }
        };
        
        axios.request(options).then(function (response) {

          if (response.data.length > 0) {
            floor = (response.data[0].total_price / 100000000);
            rarity = response.data[0].rarity_status;

            oldPrice = db[response.data[0].rarity_status + " " + collections[objKey].name];
            oldPriceShort = !isNaN(oldPrice)?oldPrice.toFixed(2):floor;

            pctChg = ((floor / oldPrice) - 1) * 100;

            pctFlag = ""

            if (Math.abs(pctChg) >= 10.00 && Math.abs(pctChg) < 25.00) {
              pctFlag = "<@&1069995610322784306>"
            }
            if (Math.abs(pctChg) >= 25.00) {
              pctFlag = "<@&1069998559853805660>"
            }
            
            
            // Floor Drops
            if (floor < oldPrice) {
  
              client.channels.cache.get(process.env.CHANNEL).send("** " + rarity + " " + collections[objKey].name + "** " + floor.toFixed(2) + " (prev. " + oldPriceShort + ") [" + pctChg.toFixed(2) + "%] <@&1069999058346848336> " + pctFlag)
  
            }
            // Floor Bumps
            if (floor > oldPrice) {
  
              client.channels.cache.get(process.env.CHANNEL).send("** " + rarity + " " + collections[objKey].name + "** " + floor.toFixed(2) + " (prev. " + oldPriceShort + ") [" + pctChg.toFixed(2) + "%] <@&1069999087585333298>" + pctFlag)
  
            }
            // Reassign Floor
            db[response.data[0].rarity_status + " " + collections[objKey].name] = floor
          }
          
  
        }).catch(function (error) {
          console.error(error);
        });
    
      }
      }

      // IF NO RARITY PARAM
      if (!collections[objKey].rarity) {

        var options = {
          method: 'POST',
          url: 'https://twonk-market.twetch.app/collections/' + collections[objKey].id + '/listings',
          params: {limit: '1'},
          headers: {'Content-Type': 'application/json'},
          data: {
            min: 0,
            max: 1.7976931348623157e+308,
            order: 'ASC',
            order_by: 'satoshis_price',
            status: 'listed'
          }
        };
        
        axios.request(options).then(function (response) {
          if (response.data.length > 0) {
            floor = (response.data[0].total_price / 100000000);

            oldPrice = db[collections[objKey].name];
            oldPriceShort = !isNaN(oldPrice)?oldPrice.toFixed(2):floor;

            pctChg = ((floor / oldPrice) - 1) * 100;

            pctFlag = ""

            if (Math.abs(pctChg) >= 10.00 && Math.abs(pctChg) < 25.00) {
              pctFlag = "<@&1069995610322784306>"
            }
            if (Math.abs(pctChg) >= 25.00) {
              pctFlag = "<@&1069998559853805660>"
            }

            if (floor < oldPrice) {
              client.channels.cache.get(process.env.CHANNEL).send("** " + collections[objKey].name + "** " + floor.toFixed(2) + " (prev. " + oldPriceShort + ") [" + pctChg.toFixed(2) + "%] <@&1069999058346848336>" + pctFlag)
              
            }

            if (floor > oldPrice) {  
              client.channels.cache.get(process.env.CHANNEL).send("** " + collections[objKey].name + "** " + floor.toFixed(2) + " (prev. " + oldPriceShort + ") [" + pctChg.toFixed(2) + "%] <@&1069999087585333298> " + pctFlag)
            }
    
            // Reassign Floor
            db[collections[objKey].name] = floor
          }
  
        }).catch(function (error) {
          console.error(error);
        });
    
      
      }

    });



    //console.log("Scanned")

  }, 1000 * 60);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "floor") {

    var options = {
      method: 'POST',
      url: 'https://twonk-market.twetch.app/collections/' + collections[interaction.options.getString('collection')].id + '/listings',
      params: {limit: '1'},
      headers: {'Content-Type': 'application/json'},
      data: {
        min: 0,
        max: 1.7976931348623157e+308,
        order: 'ASC',
        order_by: 'satoshis_price',
        status: 'listed'
      }
    };
    
    axios.request(options).then(function (response) {
      interaction.reply(collections[interaction.options.getString('collection')].name + ": " + response.data[0].total_price / 100000000 + " BSV")
    }).catch(function (error) {
      console.error(error);
    });
    

    
    //await interaction.reply(interaction.);
  }
});
client.login(process.env.TOKEN);
