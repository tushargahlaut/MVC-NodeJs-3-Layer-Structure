import { DataTypes, Model, Optional, Sequelize } from 'sequelize'
import sequelizeConnection from '../connection'
import { UserAttributes, UserCreationAttributes } from './user.interface';

class User extends Model<UserAttributes, UserCreationAttributes>{
    public id!:number;
    public name!: string;
    public email!: string;
    public password!: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize:sequelizeConnection,
        tableName:"users"
});

sequelizeConnection.sync({ force: true }).then(()=>{
    console.log("All models were synchronized successfully.");
})

export default User;
