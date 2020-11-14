const JsonWriter = require('../utils/json-writer');
const path = require('path');
const Database = new JsonWriter({ fileName: path.join(__dirname, '../database/database.json') });

class Leaderboard {
    /**
     * @typedef {object} Options
     * @property {string} client - The Discord.Client().
     * @param {Options} options
     */
    constructor(options) {
        if (!options || !options.client) {
            throw new Error(this.interErrorMsg + 'The client is required for the leaderboard function.');
        };
        this.client = options.client;
        this.interErrorMsg = '> \x1b[33m[Discord Levels], \x1b[31mIntern Error: \x1b[37m ';
        let Leaderboard = [];
        for (let userKey of Object.keys(Database.fileContent)) {
            let value = Object.assign({ user: this.client.users.cache.get(userKey) }, Database.fileContent[userKey]);
            Leaderboard.push(value);
        };
        Leaderboard = Leaderboard.filter(x => x.user);
        Leaderboard = Leaderboard.sort((a, b) => b.Level - a.Level).splice(0, 10);
        this.content = `📋 Rank | User | Level\n\n${Leaderboard.map((x, i) => `[${i + 1}] ➢ #${x.user.username}, ${x.Level}`).join('\n')}`;
    };
};

module.exports = Leaderboard;
