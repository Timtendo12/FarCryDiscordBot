const { ChatInputCommandInteraction } = require("discord.js");
const config = require("../../data/config.json");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: "This command is outdated.",
        ephemeral: true,
      });

    if (command.developer && interaction.user.id !== config.developerID) {
        return interaction.reply({
            content: "This command is only available to the developer... Sorry!",
            ephemeral: true
        });
    }

    command.execute(interaction, client);
  }
};
