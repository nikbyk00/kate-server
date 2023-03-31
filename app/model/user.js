const { DataTypes, Model } = require('sequelize');
const {db} = require('../database');
const { Helper } = require('../helper');

class User extends Model {
  
}

User.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: () => {
      return Helper.getUUID()
  }
},
name: {
  type: DataTypes.STRING,
  allowNull: false
},
number: {
    type: DataTypes.STRING
},
messenger: {
    type: DataTypes.STRING
},

age: {
    type: DataTypes.STRING
},
experience: {
  type: DataTypes.STRING
},
target: {
    type: DataTypes.STRING
  },
time: {
    type: DataTypes.STRING
  },
target: {
    type: DataTypes.STRING
  },
money: {
    type: DataTypes.STRING
  },
city: {
    type: DataTypes.STRING
  }
},
  {
    sequelize: db,
    tableName: 'User'
  }
);

module.exports = { User }                         