const Command = require("../Structures/command.js");
const config = require("../data/config.json");
const fs = require('fs');
const SQLite = require("better-sqlite3");
const moment = require("moment");
const sql = new SQLite("C:/Users/Timsl/Documents/FarCryDiscordBot/src/data/supremo.db");

module.exports = new Command({
    name: "liberate",
    description: "Liberate a outpost!",

    async run(message, args, client) {
        /*
    -----------------------------------
             MYSQL DATABASE
    ------------------------------------
*/       // Check if the table "points" exists.
        const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
        if (!table['count(*)']) {
            // If the table isn't there, create it and setup the database correctly.
            sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER);").run();
            // Ensure that the "id" row is always unique and indexed.
            sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
            sql.pragma("synchronous = 1");
            sql.pragma("journal_mode = wal");
        }
        // And then we have two prepared statements to get and set the score data.
        client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
        client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points) VALUES (@id, @user, @guild, @points);");


        //Let the user think were finding a outpost for you. However we're actually generating one. After a few seconds
        //we when we have all the variables and placeholders the magic can happen.
        message.reply("Finding a outpost for you. Please wait a second.");
        setInterval(outpostLiberate, 600000);

            /*
            -----------------------------------------------
            Generates all the things needed for the outpost
            -----------------------------------------------
             */

        const file_id = (Math.random() + 1).toString(36).substring(7).toUpperCase();
        const file = `C:/Users/Timsl/Documents/FarCryDiscordBot/src/data/outpostLogs/OP_${message.author.tag}_${file_id}_log.txt`

        //First I want to create a file everytime a new outpost gets created.
        fs.appendFile(`${file}`, `user: ${message.author.tag} ~ Far Cry outpost liberator made by Timtendo12#2909 VER: ${config.OutpostLiberatorVer}`, err => {
            if (err) {
                console.error(err)
                return
            }
        });
        message.reply("Created a search request. Troops are finding a outpost!");
        setTimeout(() => console.log(""), 3000);


            // region generator
            let regionArray = ["Yara", "Hope County", "Nuked Hope County", "Kyrat", "Rook Islands", "world island"]
            let regionAntagonist = Math.floor(Math.random() * regionArray.length);
            let antagonist;
            message.reply("Region found");

            if (regionAntagonist === 0){
                antagonist = "Anton Castillo"
                console.log(`Region: ${regionArray[regionAntagonist]} -> ${antagonist}`);
            } else if (regionAntagonist === 1){
                antagonist = "Joseph Seed"
                console.log(`Region: ${regionArray[regionAntagonist]} -> ${antagonist}`);
            } else if (regionAntagonist === 2){
                antagonist = "Louise & Mickey"
                console.log(`Region: ${regionArray[regionAntagonist]} -> ${antagonist}`);
            } else if (regionAntagonist === 3){
                antagonist = "Pagan Min"
                console.log(`Region: ${regionArray[regionAntagonist]} -> ${antagonist}`);
            } else if (regionAntagonist === 4){
                antagonist = "Vaas"
                console.log(`Region: ${regionArray[regionAntagonist]} -> ${antagonist}`);
            } else if (regionAntagonist === 5){
                antagonist = "Colonel Ike Sloan"
                console.log(`Region: ${regionArray[regionAntagonist]} -> ${antagonist}`);
            }

        fs.appendFile(`${file}`, `\nRegion: [${regionAntagonist}] - [${antagonist}]\n`, err => {
            if (err) {
                console.error(err)
                message.reply(`Failed to log region + region antagonist. ${regionAntagonist}, ${antagonist} by: ${message.author.id}`);
                return;
            }
        });
        message.reply("Region location locked!");


        message.reply("Finding outpost.");
            //name generator
            let name1 = ["Pig", "Cow", "Sheep", "Horse", "Butcher", "TV Station", "Supremo", "Santa", "Yara", "Tax-Evasion Proffesionals"];
            let name2 = ["Fucker", "Station", "HQ", "Hooker", "House", "Tower", "Boat", "Hospital", "Rocket", "Zoo"];

            let wordName1 = Math.floor(Math.random() * name1.length);
            let wordName2 = Math.floor(Math.random() * name2.length);

            let outpostName = `${name1[wordName1]} ${name2[wordName2]}`
            console.log(`Outpost name = ${outpostName}`);

            message.reply("Uncaptured outpost found!");

            //---------------------------------------------------------------------------------

            //Factions generator.

            //Factions are different buildings in the outpost were different events happens.
            message.reply("Counting factions.");
            const amountOfFactions = [2, 3, 4, 5, 6, 7, 8];

            //picks a random number
            let pickAmountOfFactions = Math.floor(Math.random() * amountOfFactions.length);
            let factionsAmount = amountOfFactions[pickAmountOfFactions]; //-> Is the amount of factions the outpost has.

            for (let i = 1; i < factionsAmount;) {
                let factionSurname1 = ["Sweet", "Red", "Crazy", "God's", `${antagonist}'s`, "Dick's", "Aunty Joe's"];
                let factionSurname2 = ["Bakery", "Stripclub", "Butcher", "Worksbench", "Tittie Enlarger", "Fried Genitals pawn shop", "Arcade"];

                let f1 = Math.floor(Math.random() * factionSurname1.length);
                let f2 = Math.floor(Math.random() * factionSurname2.length);

                let factionName = `${factionSurname1[f1]} ${factionSurname2[f2]}`

                //when a faction is generated it writes the name to the corresponding file.
                setTimeout(() => console.log(`${i}, ${factionName}`), 5000);
                fs.appendFile(`${file}`, `\nFaction ${i}: ${factionName}`, err => {
                    if (err) {
                        console.error(err)
                        message.reply(`Failed to log faction. fId: ${factionsAmount}, ${factionName} || 1: ${f1} 2: ${f2} by: ${message.author.id}`);
                        return;
                    }
                });
                i++
                setTimeout(() => console.log(`${i}, ${factionName}`), 5000);
            }
            message.reply(`Succesfully found ${factionsAmount} factions.`);

            function outpostLiberate() {
                console.log("weeee");
                console.log(`${outpostName}`)

            }
    }
});