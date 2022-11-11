import express from "express"
import path from 'path'
import connect from "./database/connect"
import routes from './routes'
import cors from 'cors'
const app = express()

app.use(express.static(path.join(__dirname, './ui/build')));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

connect()
app.use('/',routes)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});

app.listen(8000,()=>console.log(`server is running`)
)