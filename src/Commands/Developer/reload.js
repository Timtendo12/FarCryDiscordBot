const { ChatInputCommandInteraction,
    SlashCommandSubcommandBuilder,
    PermissionFlagsBits,
    Client, SlashCommandBuilder
} = require("discord.js");

const { loadCommands } = require("../../Handlers/commandHandler");
const{ loadEvents } = require("../../Handlers/eventHandler");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("reload")
        .setDescription("Reload all commands/events")
        //.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addSubcommand((options) => options
            .setName("events")
            .setDescription("reload your events."))
        .addSubcommand((options) => options
            .setName("commands")
            .setDescription("Reload your commands")
        ),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    execute(interaction, client) {
        const subCommand = interaction.options.getSubcommand();

        switch(subCommand) {
            case "events" : {
                console.log("Event")
                for(const [key, value] of client.events)
                    client.removeListener(`${key}`, value, true)
                console.log("Loading events")
                loadEvents(client)
                console.log("Loaded Events")
                interaction.reply({content: "Reloaded events", ephemeral: true}).catch((err) => {
                    console.log(err)}).then(() => {console.log("Sent out ephemeral message for event")})
            }
            break;
            case "commands" : {
                loadCommands(client)
                interaction.reply({content: "Reloaded commands", ephemeral: true})
            }
            break;
        }
    }

}