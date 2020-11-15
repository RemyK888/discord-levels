/*
  ____    _                                   _           _                             _       
 |  _ \  (_)  ___    ___    ___    _ __    __| |         | |       ___  __   __   ___  | |  ___ 
 | | | | | | / __|  / __|  / _ \  | '__|  / _` |  _____  | |      / _ \ \ \ / /  / _ \ | | / __|
 | |_| | | | \__ \ | (__  | (_) | | |    | (_| | |_____| | |___  |  __/  \ V /  |  __/ | | \__ \
 |____/  |_| |___/  \___|  \___/  |_|     \__,_|         |_____|  \___|   \_/    \___| |_| |___/     

*/


/*
Copyright 2020 RemyK

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXpRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


const path = require('path');

const Package = require('../package.json');
const JsonWriter = require('./utils/json-writer');
const Database = new JsonWriter({ fileName: path.join(__dirname, './database/database.json') });
const Profile = require('./utils/profile');
const Leaderboard = require('./utils/leaderboard');

/**
 * @author RemyK - RemyK#3876
 */
class DiscordLevels {
    constructor() {
        this.errorMsg = '> \x1b[33m[Discord Levels], \x1b[31mError: \x1b[37m ';
        console.log(`\x1b[33m------- Discord Levels -------\n\x1b[33m> \x1b[32mVersion: \x1b[37m${Package.version}\n\x1b[33m> \x1b[32mState: \x1b[37m\x1b[7mLoaded\x1b[0m\n\x1b[33m---------- Levels system is ready to use ---------\x1b[37m\n\x1b[0m`);
    };

    /**
     * @api public
     * @param {userID} userID - The user id.
     * @param {Xp} Xp - The Xp that you want to add to the user
     * @example
     * DiscordLevels.addXp('Some ID', 'Some Xp') // Number without the brackets
     */
    addXp(userID, Xp) {
        if (!userID || isNaN(userID)) {
            throw new Error(this.errorMsg + 'The user ID is required.');
        };
        if (!Xp || isNaN(Xp)) {
            throw new Error(this.errorMsg + 'The Xp is required.');
        };
        return Database.addXp(userID, Xp);
    };

    /**
     * @api public
     * @param {userID} userID - The user id.
     * @param {Xp} Xp - The Xp that you want to remove to the user
     * @example
     * DiscordLevels.removeXp('Some ID', 'Some Xp') // Number without the brackets
     */
    removeXp(userID, Xp) {
        if (!userID || isNaN(userID)) {
            throw new Error(this.errorMsg + 'The user ID is required.');
        };
        if (!Xp || isNaN(Xp)) {
            throw new Error(this.errorMsg + 'The Xp is required.');
        };
        return Database.removeXp(userID, Xp);
    };

    /**
     * @api public
     * @param {userID} userID - The user id.
     * @param {Xp} Xp - The Xp that you want to set to the user
     * @example
     * DiscordLevels.setXp('Some ID', 'Some Xp') // Number without the brackets
     */
    setXp(userID, Xp) {
        if (!userID || isNaN(userID)) {
            throw new Error(this.errorMsg + 'The user ID is required.');
        };
        if (!Xp || isNaN(Xp)) {
            throw new Error(this.errorMsg + 'The Xp is required.');
        };
        return Database.setXp(userID, Xp);
    };

    /**
     * @api public
     * @param {userID} userID - The user id.
     * @param {Level} Level - The Level that you want to add to the user.
     * @example
     * DiscordLevels.addLevel('Some ID', 'Some Level') // Number without the brackets
     */
    addLevel(userID, Level) {
        if (!userID || isNaN(userID)) {
            throw new Error(this.errorMsg + 'The user ID is required.');
        };
        if (!Level || isNaN(Level)) {
            throw new Error(this.errorMsg + 'The Level is required.');
        };
        return Database.addLevel(userID, Level);
    };

    /**
     * @api public
     * @param {userID} userID - The user id.
     * @param {Level} Level - The Level that you want to remove to the user.
     * @example
     * DiscordLevels.removeLevel('Some ID', 'Some Level') // Number without the brackets
     */
    removeLevel(userID, Level) {
        if (!userID || isNaN(userID)) {
            throw new Error(this.errorMsg + 'The user ID is required.');
        };
        if (!Level || isNaN(Level)) {
            throw new Error(this.errorMsg + 'The Level is required.');
        };
        return Database.removeLevel(userID, Level);
    };

    /**
     * @api public
     * @param {userID} userID - The user id.
     * @param {Level} Level - The Level that you want to set to the user.
     * @example
     * DiscordLevels.setLevel('Some ID', 'Some Level') // Number without the brackets
     */
    setLevel(userID, Level) {
        if (!userID || isNaN(userID)) {
            throw new Error(this.errorMsg + 'The user ID is required.');
        };
        if (!Level || isNaN(Level)) {
            throw new Error(this.errorMsg + 'The Level is required.');
        };
        return Database.addLevel(userID, Level);
    };

    /**
     * @api public
     * @param {userID} userID - The user id.
     * @example
     * DiscordLevels.getProfile('Some ID').Level // or Xp
     */
    getProfile(userID) {
        if (!userID || isNaN(userID)) {
            throw new Error(this.errorMsg + 'The user ID is required.');
        };
        return new Profile({ userID: userID });
    };

    /**
     * @api public
     * @example 
     * DiscordLevels.createLeaderboard().content // 'content' is required
     */
    createLeaderboard(client) {
        if (!client) {
            throw new Error(this.errorMsg + 'The client is required.');
        };
        return new Leaderboard({ client: client });
    };
};

module.exports = new DiscordLevels();
