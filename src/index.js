require("dotenv").config();

const { Client, IntentsBitField, ActivityType } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online , yay!`);

  client.user.setActivity({
    name: "minecraft",
  });
});
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "I see.") {
    message.reply("Hmm, you see.");
  }

  if (message.content === "Hmm , I see.") {
    message.reply("Hmm, you see.");
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  console.log(interaction.commandName);

  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }
});

client.login(process.env.TOKEN);
