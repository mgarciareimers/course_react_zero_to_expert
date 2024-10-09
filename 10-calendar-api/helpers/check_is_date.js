const moment = require("moment");


const checkIsDate = (value, { req, location, path }) => {
    if (value === undefined || value === null) {
        return false;
    }

    const date = moment(value);

    return date.isValid();
}

module.exports = checkIsDate;