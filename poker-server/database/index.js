const mongoose = require('mongoose');
const { username, password, projectname } = require('../config.json');
const URL = `mongodb+srv://${username}:${password}@cluster0.ukcv5ux.mongodb.net/${projectname}?retryWrites=true&w=majority`;

const connect = async () => {
    try {
        await mongoose.connect(URL);
        console.log(`Connected to DB`);
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    connect
}