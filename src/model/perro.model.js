const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("arq_base","root","12345",
{
    host:"localhost",
    dialect: "mysql",
    port: 3306
})

async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log("Connection OK!")
    }catch(err){
        console.error("Connection ERROR",err)
    }
}

testConnection();