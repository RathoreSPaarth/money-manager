const { DataTypes, TIME } = require("sequelize");
const userDB = require("../config/userDB");

const Dashboard = userDB.define("dashboard", {
  serial: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  amount: {
    type: DataTypes.INTEGER
  },
  type: {
    type: DataTypes.STRING //inc || exp
  },
  date: {
    type: DataTypes.INTEGER
  },
  month: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  },
  category: {
    type: DataTypes.STRING
  },
  division: {
    type: DataTypes.STRING
  },
  userid:{
    type: DataTypes.INTEGER
  }


});


module.exports = Dashboard;
