import { Request, Response } from "express"
import { UserAttributes, UserCreationAttributes } from "../schema/user.interface";
import { createUserService, getAllUsersService, getUserByIdService } from "../service/user.service";

export const getAllUsersController = async(req:Request, res: Response): Promise<Response> => {
    const data = await getAllUsersService();
    return res.status(200).json({
        success:"true",
        message:"fetched succesfully",
        data
    })
};

export const getUserById = async(req:Request, res: Response): Promise<Response> => {
    const id:number = parseInt(req.params.id);
    const data = await getUserByIdService(id);
    return res.status(200).json({
        success:"true",
        message:"fetched succesfully",
        data
    })
}

export const createUserController = async(req:Request, res: Response): Promise<Response> =>{
    const {name, email, password}: UserCreationAttributes = req.body;
    const data = await createUserService({name,email,password});
    return res.status(200).json({
        success:"true",
        message:"created succesfully",
        data
    });
}