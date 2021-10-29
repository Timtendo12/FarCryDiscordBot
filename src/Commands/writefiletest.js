const Command = require("../Structures/command.js");
const Discord = require("discord.js");
const config = require("../data/config.json");
const fs = require('fs');
const PasteClient = require("pastebin-js");
const moment = require("moment")


module.exports = new Command({
    name: "logtest",
    description: "Testing log system.",

    async run(message, args, client) {
        //content which should be put in the text file.
        const content = args.slice(1).join(" ")

        //Generates a random ID. This will be used to easily administrate and search for logs.
        const log_id = (Math.random() + 1).toString(36).substring(7).toUpperCase();

        //Check if no content has been given.
        if(!content){
            message.reply("Jesus christ, you really expect me to create a empty log, what a waste.");
            //To do if content has been given.
        }else {
            //message.reply(`Created a special id: ${log_id}`)
            fs.appendFile(`C:/Users/Timsl/Documents/FarCryDiscordBot/src/data/pblogs/log1.txt`, `\n[${moment().format('LTS')}][${message.author.tag}]: [${content}]`, err => {
                if (err) {
                    console.error(err)
                    return
                }
                //message.reply("Log written successfully");

            })
        }

    }
});