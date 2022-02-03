const Event = require("../Structures/Event.js");
const client = require("../Structures/client.js");
const config = require("../data/config.json");
const {MessageEmbed} = require("discord.js");
const fs = require('fs');

module.exports = new Event("ready", (client) => {
    //logs logged in message
    console.log(`[Logged in as ${client.user.tag}]`);
    //set bots status
    client.user.setActivity('Far Cry 6', { type: "PLAYING" });
    console.log("Bot is online! Ready to take down some enemies!");

});