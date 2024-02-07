import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    database: 'arq_base',
    dialect: "mysql",
    username: 'root',
    password: '227733436mysql',
    host: 'localhost',
    port: 3306,
    models: [__dirname + "/models"],
});

export default sequelize;