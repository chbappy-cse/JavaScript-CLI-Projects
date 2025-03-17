const fs = require('fs');

/**
 * Save data to JSON file
 * @param {Array} data 
 * @param {string} fileName 
 */
module.exports.saveFile = (data, fileName) => {
    try {
        fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(`❌ Error saving file: ${e.message}`);
    }
};

/**
 * Read data from JSON file
 * @param {string} fileName
 * @returns {Array}
 */
module.exports.readFile = (fileName) => {
    try {
        if (!fs.existsSync(fileName)) {
            return [];
        }
        const data = fs.readFileSync(fileName, 'utf-8');
        return JSON.parse(data) || [];
    } catch (e) {
        console.error(`❌ Error reading file: ${e.message}`);
        return [];
    }
};
