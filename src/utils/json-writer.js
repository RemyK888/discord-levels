const fs = require('fs');
const utils = require('util');
const accessFile = utils.promisify(fs.access);

class JsonWriter {
    /**
     * @typedef {object} Options
     * @property {string} fileName - The file name is required.
     * @param {Options} options
     */
    constructor(options) {
        this.interErrorMsg = '> \x1b[33m[Discord Levels], \x1b[31mIntern Error: \x1b[37m ';
        if (!options.fileName) {
            throw new Error(this.interErrorMsg + 'The file name is required.');
        };
        this.fileName = options.fileName;
        accessFile(this.fileName, fs.F_OK)
            .catch((err) => {
                throw new Error(this.interErrorMsg + 'You have to create a file named database.json in your project folder. If the error persists, contact RemyK#3876 on Discord :' + err);
            });
        this.fileContent = JSON.parse(fs.readFileSync(this.fileName));
    };

    /**
     * @api private
     * @param {userID} userID - The user id.
     */
    getUser(userID) {
        return this.fileContent[userID] !== undefined;
    };

    /**
     * @api private
     * @param {userID} userID - The user ID
     * @param {Xp} Xp - The Xp for the user
     */
    setXp(userID, Xp) {
        if (!userID || !Xp) {
            throw new Error('The user ID and his Xp are required.');
        };
        if (!this.getUser(userID)) {
            this.fileContent[userID] = {
                Xp: Number(Xp),
                Level: 0
            };
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        } else {
            this.fileContent[userID].Xp = Number(Xp);
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        };
    };

    /**
     * @api private
     * @param {userID} userID - The user ID
     * @param {Xp} Xp - The Xp for the user
     */
    addXp(userID, Xp) {
        if (!userID || !Xp) {
            throw new Error('The user ID and his Xp are required.');
        };
        if (!this.getUser(userID)) {
            this.fileContent[userID] = {
                Xp: Number(Xp),
                Level: 0
            };
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        } else {
            if (Number(this.fileContent[userID].Xp) + Number(Xp) >= 100) {
                this.fileContent[userID].Xp = Number(this.fileContent[userID].Xp) + Number(Xp) - 100;
                if (!this.fileContent[userID].Level) {
                    this.fileContent[userID].Level = 1
                return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
                } else {
                    this.fileContent[userID].Xp = Number(this.fileContent[userID].Level) + 1;
                    return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
                }
            } else {
                this.fileContent[userID].Xp = Number(this.fileContent[userID].Xp) + Number(Xp);
                return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
            }
        };
    };

    /**
     * @api private
     * @param {userID} userID - The user ID
     * @param {Xp} Xp - The Xp for the user.
     */
    removeXp(userID, Xp) {
        if (!userID || !Xp) {
            throw new Error('The user ID and his Xp are required.');
        };
        if (!this.getUser(userID)) {
            this.fileContent[userID] = {
                Xp: Number(Xp),
                Level: 0
            };
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        } else {
            this.fileContent[userID].Xp = Number(this.fileContent[userID].Xp) - Number(Xp);
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        };
    };

    /**
     * @api private
     * @param {userID} userID - The user ID.
     */
    getXp(userID) {
        if (!userID) {
            throw new Error('The user ID is required.');
        };
        if (this.getUser(userID)) {
            let Xp = this.fileContent[userID].Xp;
            return Xp;
        } else {
            return 0;
        };
    };

    /**
     * @api private
     * @param {userID} userID - The user ID.
     * @param {Level} Level - The Xp for the user.
     */
    setLevel(userID, Level) {
        if (!userID || !Level) {
            throw new Error('The user ID and his Level are required.');
        };
        if (!this.getUser(userID)) {
            this.fileContent[userID] = {
                Level: Number(Level),
                Xp: 0
            };
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        } else {
            this.fileContent[userID].Level = Number(Level);
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        };
    };

    /**
     * @api private
     * @param {userID} userID - The user ID
     * @param {Level} Level - The Level for the user
     */
    addLevel(userID, Level) {
        if (!userID || !Level) {
            throw new Error('The user ID and his Level are required.');
        };
        if (!this.getUser(userID)) {
            this.fileContent[userID] = {
                Level: Number(Level),
                Xp: 0
            };
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        } else {
            this.fileContent[userID].Level = Number(this.fileContent[userID].Level) + Number(Level);
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        };
    };

    /**
     * @api private
     * @param {userID} userID - The user ID
     * @param {Level} Level - The Level for the user
     */
    removeLevel(userID, Level) {
        if (!userID || !Level) {
            throw new Error('The user ID and his Level are required.');
        };
        if (!this.getUser(userID)) {
            this.fileContent[userID] = {
                Level: Number(Level),
                Xp: 0
            };
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        } else {
            this.fileContent[userID].Level = Number(this.fileContent[userID].Level) - Number(Level);
            return fs.writeFileSync(this.fileName, JSON.stringify(this.fileContent));
        };
    };

    /**
     * @api private
     * @param {userID} userID - The user ID
     */
    getLevel(userID) {
        if (!userID) {
            throw new Error('The user ID is required.');
        };
        if (this.getUser(userID)) {
            let Level = this.fileContent[userID].Level;
            return Level;
        } else {
            return 0;
        };
    };
};

module.exports = JsonWriter;
