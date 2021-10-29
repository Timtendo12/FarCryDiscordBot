console.clear(); //for nodemon

const Client = require("./Structures/client.js");
const config = require("./data/config.json");
const Discord = require("discord.js");

const client = new Client({ partials: ["CHANNEL"]});

client.start(config.token);