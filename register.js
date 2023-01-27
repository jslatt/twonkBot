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
        choices: [
          {
            name: "Rare Sirloin",
            value:
              "rareSirloin",
          },
          {
            name: "Cyber ID",
            value:
              "cyberId",
          },
          {
            name: "Lizer Corp",
            value:
              "lizerCorp",
          },
          {
            name: "Planetary Buttons",
            value:
              "planetaryButtons",
          },
          {
            name: "Bored Waifus",
            value:
              "boredWaifus",
          },
          {
            name: "Special Forces",
            value:
              "specialForces",
          },
          {
            name: "Lab Monkies",
            value:
              "labMonkes",
          },
          {
            name: "Apu Cartel",
            value:
              "apuCartel",
          },
          {
            name: "Slurp Juice",
            value:
              "slurpJuice",
          },
          {
            name: "NVM Bears",
            value:
              "nvmbears",
          },
          {
            name: "Lizervaxx",
            value:
              "lizervaxx",
          },
          {
            name: "Planetary Balls",
            value:
              "planetaryBalls",
          },
          {
            name: "Planetary Pixels",
            value:
              "planetaryPixels",
          },
          {
            name: "Fox Syndicate",
            value:
              "foxSyndicate",
          },
          {
            name: "Graveyard",
            value:
              "graveyard",
          },
          {
            name: "Frog Cartel",
            value:
              "frogCartel",
          },
          {
            name: "Oni Society",
            value:
              "oniSociety",
          },
          {
            name: "Astro Apes",
            value:
              "astroApes",
          },
          {
            name: "Planetary Skies",
            value:
              "planetarySkies",
          },
          {
            name: "Cozy Sweatpants",
            value:
              "sweatpants",
          },
          {
            name: "Muties",
            value:
              "muties",
          },
          {
            name: "Cozy Hoodie",
            value:
              "hoodie",
          },
        ],
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
