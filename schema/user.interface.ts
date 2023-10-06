import { Optional } from "sequelize"

export interface UserAttributes{
    id: number,
    name: string
    email: string
    password: string
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}