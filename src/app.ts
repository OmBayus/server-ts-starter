import express,{Application} from 'express';
import cors from "cors"
// import jwt from "jsonwebtoken";

const app:Application = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("hi")
})

app.listen(4000)