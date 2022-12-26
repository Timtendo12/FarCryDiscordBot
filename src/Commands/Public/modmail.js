const {ChatInputCommandInteraction, SlashCommandBuilder, codeBlock, Guild, createChannel, GuildChannelTypes} = require("discord.js")
const {noReasonProvided, mmCategory, usernameChars} = require("../../data/config.json")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("modmail")
        .setDescription("create a modmail!")
        .addStringOption(option =>
            option.setName("reason")
                .setDescription("provide a reason for the modmail.")),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     * @param {codeBlock} codeBlock
     */
    execute(interaction, client, codeBlock, GuildChannelTypes) {
        let reason = interaction.options.getString('reason') ?? noReasonProvided;
        let user = interaction.user.id

        interaction.reply({content: `User: <@${user}>, Reason: \`\`${reason}\`\`, Category: ID: ${mmCategory} Name: <#${mmCategory}>`})
            .then(r => console.log(r));

        interaction.guild.channels.create({
            name: `${interaction.user.username.substring(0, usernameChars)}`,
            type: GuildChannelTypes.GuildText,
            parent: mmCategory,
        });
        // createModMail(interaction, client);

    }
}

function createModMail(interaction, client){

}