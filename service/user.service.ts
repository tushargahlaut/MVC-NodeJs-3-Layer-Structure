import { create, getAll, getById } from "../dao/user.dao";
import { UserAttributes, UserCreationAttributes } from "../schema/user.interface";

export const getAllUsersService = async():Promise<UserAttributes[]>=>{
    const data = await getAll();
    return data;
}

export const getUserByIdService = async(id: number):Promise<UserAttributes>=>{
    const data = await getById(id);
    return data;
}

export const createUserService = async(payload:UserCreationAttributes):Promise<UserAttributes>=>{
    const data = await create(payload);
    return data;
}