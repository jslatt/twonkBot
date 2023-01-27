const { REST, Routes } = require("discord.js");
require("dotenv").config();

const commands = [
  {
    name: "floor",
    description: "Replies with twonk floors!",
    options: [
      {
        name: "collection",
        description:
          "Name of Twonk collection you want the floor for, type ALL for all floor prices.",
        type: 3,
        required: true,
        "choices": [
          {
              "name": "Rare Sirloin",
              "value": "2d1d647aab8ffd5bc1e3c6f89dda3c3a1755035d2f877a94e2505f543d3b44e8"
          },
          {
              "name": "Cyber ID",
              "value": "aff9cc05c7ece89af329415e1f7391bacf93ab6ad9006b8cfa1c43c94a3e04e0"
          },
          {
              "name": "Penguin",
              "value": "animal_penguin"
          }
      ]
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
