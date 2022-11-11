import mongoose from "mongoose";

export interface TodoDocument extends mongoose.Document{
    data: string,
    done: boolean,
    createdAt: Date
}

const TodoSchema = new mongoose.Schema({
    data:{
        type: String,
        required: true
    },
    done:{
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const todo = mongoose.model<TodoDocument>('todo', TodoSchema);

export default todo;