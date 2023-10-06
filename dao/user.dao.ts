import { UserAttributes, UserCreationAttributes } from "../schema/user.interface";
import User from "../schema/user.model";

export const create = async(payload:UserCreationAttributes): Promise<UserAttributes> =>{
    const user = await User.create(payload);
    return user;
}

export const getAll = async(): Promise<UserAttributes[]> =>{
    const user = await User.findAll();
    return user;
}

export const getById = async(id: number): Promise<UserAttributes> =>{
    const user = await User.findOne({
        where:{
            id
        }
    });
    if(!user){
        throw new Error("Not Found");
    }
    return user;
}

export const update = async(id:number, payload:UserCreationAttributes): Promise<UserAttributes> =>{
    const user = await User.findByPk(id);
    if(!user){
        throw new Error("Not Found");
    }
    const updatedUser = await (user as User).update(payload);
    return updatedUser;
}

export const deleteById = async(id:number): Promise<string> =>{
    const user = await User.findByPk(id);
    if(!user){
        throw new Error("Not Found");
    }
    const deleteUser = await (user as User).destroy();
    return "Deleted Succesfully";
}