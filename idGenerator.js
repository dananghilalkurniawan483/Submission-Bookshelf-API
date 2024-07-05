const { nanoid } = require('nanoid');

const generateUniqueId = (length = 10) => {
    return nanoid(length);
};

module.exports = generateUniqueId;
