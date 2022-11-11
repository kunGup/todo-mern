import todo from './model/todo.model'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config
const dbUri = process.env.DB_URI || 'mongodb://127.0.0.1:27017/todo'

// Database connection
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}as Object);

todo.deleteMany({}).then((res)=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})