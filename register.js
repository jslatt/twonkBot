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
