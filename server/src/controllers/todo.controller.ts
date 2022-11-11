import { Request, Response } from "express";
import Todo from "../model/todo.model";
export const addTodo = async(req:Request,res:Response)=>{
    try{
        const newTodo = await Todo.create({
            data: req.body.data,
        })
        await newTodo.save()
        res.status(200).json(newTodo)
    }catch(err:unknown){
        if(err instanceof Error)
            return res.status(500).json(err.message)
    }
}

export const getAllTodos = async (req:Request,res:Response) =>{
    try{
        const todos = await Todo.find({}).sort({'createdAt':-1})
        return res.status(200).json(todos)
    }catch(err){
        if(err instanceof Error)
            return res.status(500).json(err.message)
    }
}

export const toggleTodoDone = async(req:Request,res:Response)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        if(todo){
            todo.done=!todo.done
            await todo.save()
        }
        return res.status(200).json(todo)
    }catch(err){
        if(err instanceof Error)
            return res.status(500).json(err.message)
    }
}

export const updateTodo = async(req:Request,res:Response)=>{
    try{
        await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )

        const todo = await Todo.findById(req.params.id);

        return res.status(200).json(todo);
    }catch(err){
        if(err instanceof Error)
            return res.status(500).json(err.message)
    }
}

export const deleteTodo = async(req:Request,res:Response)=>{
    try{
        const todo  = await Todo.findByIdAndDelete(req.params.id)
        return res.status(200).json(todo)
    }
    catch(err){
        if(err instanceof Error)
            return res.status(500).json(err.message)
    }
}