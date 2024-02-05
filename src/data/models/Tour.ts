import {
    Table,
    Column,
    Model,
    DataType,   
    HasMany,
    ForeignKey
} from "sequelize-typescript";

import Travel from "./Travel";
import { Col } from "sequelize/types/utils";

@Table({
    timestamps:true,
    tableName:"TBL_TOURS",
    modelName:"Tour"
})
class Tour extends Model {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        defaultValue:1
    })
    declare id: string;

    @ForeignKey(() => Travel)
    @Column({
        type: DataType.INTEGER
    })
    declare travel_id: number;

    @Column({
        type: DataType.STRING
    })
    declare name: string;

    @Column({
        type: DataType.DATEONLY
    })
    declare starting_date: Date;

    @Column({
        type: 
    })https://www.youtube.com/watch?v=J8l21W9dEk4
    6:21
}