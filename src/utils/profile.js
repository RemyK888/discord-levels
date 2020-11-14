const JsonWriter = require('../utils/json-writer');
const path = require('path');
const Database = new JsonWriter({ fileName: path.join(__dirname, '../database/database.json') });

class Profile {
    /**
     * @typedef {object} Options
     * @property {string} userID - The user id.
     * @param {Options} options
     */
    constructor(options) {
        this.interErrorMsg = '> \x1b[33m[Discord Levels], \x1b[31mIntern Error: \x1b[37m ';
        if (!options || !options.userID) {
            throw new Error(this.interErrorMsg + 'The user ID is required to get the user profile.');
        };
        this.userID = options.userID;
        this.Xp = Database.getXp(this.userID);
        this.Level = Database.getLevel(this.userID);
    };
};

module.exports = Profile;
