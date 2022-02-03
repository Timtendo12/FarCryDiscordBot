const Discord = require("discord.js");
const Command = require("./command.js");
const Event = require("./Event.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require("../data/config.json");
const fs = require("fs");
const intents = new Discord.Intents(32767);

const commands = [];
const rest = new REST({ version: '9' }).setToken(config.token);

class Client extends Discord.Client {
    constructor() {
        super({ intents, partials: ["CHANNEL"] });

        /**
         *
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();

        this.prefix = config.prefix;
    }

    start(token) {

            //command handler\\
         fs.readdirSync("./src/Commands")
             .filter(file => file.endsWith(".js"))
             .forEach(file => {
                 /**
                  *
                  * @type {Command}
                  */
                 const command = require(`../Commands/${file}`);
                 console.log(`Command ${command.name} loaded successfully`);
                 this.commands.set(command.name, command);
             });

         fs.readdirSync("./src/Events")
             .filter(file => file.endsWith(".js"))
             .forEach(file => {
                 /**
                  * @type {Event}
                  */
                 const event = require(`../Events/${file}`);
                console.log(`Event ${event.event} loaded successfully`);
                this.on(event.event, event.run.bind(null, this));
             });

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    Routes.applicationCommands(config.botID),
                    { body: commands },
                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();

         this.login(token);
    }
}

module.exports = Client;