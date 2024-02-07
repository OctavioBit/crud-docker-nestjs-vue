import {
    Table,
    Column,
    Model,
    DataType,   
    HasMany
} from "sequelize-typescript"

import Tour from "./Tour";

@Table({
    tableName: "TBL_TRAVELS",
    modelName: "Travel"
})

class Travel extends Model {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        defaultValue: 1
    })
    declare id: number;

    @Column({
        type: DataType.STRING
    })
    declare name: string;

    @Column({
        type: DataType.SMALLINT
    })
    declare number_of_days: number;

    @HasMany(() => Tour)
    declare tours: Tour[];
}



export default Travel;