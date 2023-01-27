const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const http = require("https");
const { SlashCommandBuilder } = require("discord.js");
var axios = require("axios").default;
require("dotenv").config();

const collections = {
  rareSirloin: {
    name: "Rare Sirloin",
    id: "2d1d647aab8ffd5bc1e3c6f89dda3c3a1755035d2f877a94e2505f543d3b44e8",
  },
  cyberId: {
    name: "Cyber ID",
    id: "aff9cc05c7ece89af329415e1f7391bacf93ab6ad9006b8cfa1c43c94a3e04e0",
  },
  lizerCorp: {
    name: "Lizer Corp",
    id: "b792b25417195242664d2624fe28e39173d7026285a5282a4912a7b0405437b9",
  },
  planetaryButtons: {
    name: "Planetary Buttons",
    id: "b77c9d32eeb2e4a587833ce5ac2368b896ade4790f43ef4d7087bb48fc9b77b3",
  },
  boredWaifus: {
    name: "Bored Waifus",
    id: "f9d6d0553dbed94608332cec4d28a48ae8dfe491d8415df9162826025f4f3e46",
  },
  specialForces: {
    name: "Special Forces",
    id: "c6cac52ebeaf8b8c9fc8859a3ac2a388b804b4aed91a5d6ea2d8938e3d4c2fc9",
  },
  labMonkes: {
    name: "Lab Monkies",
    id: "2ce7ed955162a73e3e30ac4a8e01a0584b3e429aac9944ef92a707e8c1656c4e",
  },
  apuCartel: {
    name: "Apu Cartel",
    id: "af834baef0563d692a1942daaebea9e3e3a0a5843cbff7667d7776a530fef520",
  },

  slurpJuice: {
    name: "Slurpjuice",
    id: "e84e2fd140fa80e5fab149a972ec1d85c100fb4de229daaeab4e20fa54da04db",
  },
  nvmbears: {
    name: "Nvm Bears",
    id: "b2d65c90b1085f75734894d9b48e8cce5f83cf532187cc88b7f6123ea59e6867",
  },
  lizervaxx: {
    name: "Lizervaxx",
    id: "964a82d5d478eb7f6236e1c2ee6cb993c50b3131cd88b1d1330f6f125d31bb8d",
  },
  planetaryBalls: {
    name: "Planetary Balls",
    id: "ee3176b2e08c6ae2f772685843109ba78a0b489b2ad633f799ce1ef2ce766581",
  },
  planetaryPixels: {
    name: "Planetary Pixels",
    id: "c749fa6d7251780f1ce764a2c80e428e4da598b65f342913974076e944bd4e40",
  },
  foxSyndicate: {
    name: "Fox Syndicate",
    id: "20d0f7e0f64cd5a9e6a12687a29ee896d5f487fe4e8f458798fcacceb4dca3c5",
  },
  graveyard: {
    name: "Graveyard",
    id: "9ff8922f53093f0a10b0b368a3724460c109c2acf2087f6ccaf822f47aede467",
  },
  frogCartel: {
    name: "Frog Cartel",
    id: "c8925e7b008668089d3ae1fc1cf450f7f45f0b4af43cd7d30b84446ecb374d6d",
  },
  oniSociety: {
    name: "Oni Society",
    id: "9f4b93e97ca5905c0f01a8e6446d1c0f45f42bdc47704bb5cdc09c6b874f77b0",
  },
  astroApes: {
    name: "Astro Apes",
    id: "20d0f7e0f64cd5a9e6a12687a29ee896d5f487fe4e8f458798fcacceb4dca3c5",
  },
  planetarySkies: {
    name: "Planetary Skies",
    id: "20d0f7e0f64cd5a9e6a12687a29ee896d5f487fe4e8f458798fcacceb4dca3c5",
  },
};

function getFloor(twonk) {


  const options = {
    method: "GET",
    hostname: "twonk-market.twetch.app",
    port: null,
    path: "/collections/" + collections[twonk].id + "/stats",
    headers: {
      cookie:
        "INGRESSCOOKIE=99eac409553486401d5f6c9ca6906bfa%7Cc69a6e131abe426a06333fa400d87f90",
      "Content-Length": "0",
    },
  };

  const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      const body = Buffer.concat(chunks);
      d = JSON.parse(body);
      floor = d.all_price_floor / 100000000
      floor = floor.toFixed(3)

      return floor;
    });
  });

  req.end();

}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const db = {}

  let floorScanner = setInterval(function () {

    /*var objectKeysArray = Object.keys(collections);
    objectKeysArray.forEach(function (objKey) {
      // add back API Request 
      const options = {
        "method": "POST",
        "hostname": "twonk-market.twetch.app",
        "port": null,
        "path": "/collections/" + collections[objKey].id + "/listings?limit=1",
        "headers": {
          "Content-Type": "application/json",
          "Content-Length": "115"
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
          d = JSON.parse(body);
          //floor = d.all_price_floor / 100000000
          //floor = floor.toFixed(3)
          console.log(d)

          //var objValue = collections[objKey].name + " - " + floor + "\n";
          //payload.push(objValue)
          //client.channels.cache.get("1067151914535485451").send(objValue)

          //interaction.reply(body.toString());
        });
      });
    
      req.write(JSON.stringify({
        min: 0,
        max: 1.7976931348623157e+308,
        order: 'ASC',
        order_by: 'satoshis_price',
        status: 'listed'
      }));

      req.end();


      
    });*/

 

    var objectKeysArray = Object.keys(collections);
    objectKeysArray.forEach(function (objKey) {
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
        floor = response.data[0].total_price / 100000000

        if ((floor) < db[collections[objKey].name]) {
          console.log("BELOW FLOOR " + collections[objKey].name + floor + " | " + db[collections[objKey].name])
          
          client.channels.cache.get("1067151914535485451").send("**NEW FLOOR:** " + collections[objKey].name + " " + floor + " (" + db[collections[objKey].name] + ")")
        }

        // Reassign Floor
        db[collections[objKey].name] = floor

      }).catch(function (error) {
        console.error(error);
      });
  

    });


    //console.log(db)

   //client.channels.cache.get("1067151914535485451").send(payload)




    console.log("done");
  }, 1000 * 30);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "floor") {
    
    await interaction.reply(getFloor('planetarySkies'));
  }
});
client.login(process.env.TOKEN);
