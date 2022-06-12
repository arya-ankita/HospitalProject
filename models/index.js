const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });


const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    pool: { max: 5, min: 0, idle: 10000 }
});

sequelize.authenticate().then(() => {
    console.log("connected");
}).catch(err => {
    console.log("Error" + err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./userModel')(sequelize, Sequelize);

db.sequelize.sync().then(() => {
    console.log("yes re-sync");
})

module.exports = db;