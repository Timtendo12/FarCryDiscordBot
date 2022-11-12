console.clear() // for nodemon

const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember} = Partials;

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember]
});

const { LoadEvents } = require("./Handlers/eventHandler");

client.config = require("./data/config.json");
client.events = new Collection();

LoadEvents(client);

client.login(client.config.token)

