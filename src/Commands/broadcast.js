const Command = require("../Structures/command.js");

const config = require("../data/config.json");

//const discordClient = require("../Structures/client.js");


module.exports = new Command({
    name: "broadcast",
    description: "Lets person with admin_id broadcast bot status to hardcoded Discord Channels.",

    async run(message, args, client) {

        //const sender = args[0];
        const admin_id = config.admin_id;
        //const status = message.content.replace(`${config.prefix}`, ' ');
       // const args = message.content.slice(config.prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if(!args) return message.channel.send("Please give me a status.");
        if (message.author.id === admin_id) {
            console.log(client)
            message.client.channels.cache.get(config.broadcastCh_id).send(args);

        }else {
            if (message.author.bot) return;
            message.reply("FCDError: To use this feature, Your ID has to be hardcoded in the source code. It seems like your user ID doesnt match the one in the code.");
            message.reply("Please also note that this feature is only meant for the status of the discord bot. If you somehow found out to use this command the output will only be send in a specific channel you probaly can't see");
        }

    }



});