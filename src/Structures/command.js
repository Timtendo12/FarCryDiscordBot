const Discord = require("discord.js");
const Client = require("./client.js");
/**
 *
 * @param {Discord.Message} message
 * @param {string[]} args
 * @param {Client} client
 * @constructor
 */
function RunFunction(message, args, client) {}

class Command {
    /**
     * @typedef {{name: string, description: string, run:RunFunction}} CommandOptions
     * @param {CommandOptions} options
     */
    constructor(options) {
        this.name = options.name;
        this.client = options.client;
        this.descripton = options.descripton;
        this.run = options.run;
    }
}

module.exports = Command;