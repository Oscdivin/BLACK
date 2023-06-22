 //import modules   
import express, { Application, Request, Response } from "express"

import { dbConfig } from "./Config/dataBase"
import bookRouter from "./Routes/bookRouter"
import { Router } from 'express';


//creating my port
const port:number = 4876
const app : Application = express()
// const Router()
app.use("/api",bookRouter)
app.use(express.json())

app.get ("/", (req: Request,  res : Response) =>  {
    try {
        return res.status(200).json({
            message: "getting all users"
        })
    } catch (error) {
        return res.status(404).json({
            message : "error"
        })
    }
})

dbConfig()
//application

app.listen(port, () => {
    console.log("server is now listening ", port)
})