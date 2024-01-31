const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Perro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Perro.init({
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    esterilizado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Perro',
  });
  return Perro;
};

//https://codevoweb.com/build-a-crud-api-with-nodejs-and-sequelize/ a ver si esta forma de declarar lo encuentra
//npx sequelize-cli model:create --name Perro --attributes nombre:string,edad:integer,esterilizado:integer