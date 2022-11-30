const {ChatInputCommandInteraction, SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Will respond with pong if a connection is setup"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
        interaction.reply({content: "pong", ephemeral: true});
    }
}