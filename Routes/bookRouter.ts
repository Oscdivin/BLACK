import {Router} from "express"
import { createANewBooks, getAllBook, getOneBook, updateBook } from "../Controller/bookControoer"

const bookRouter = Router()
// Get All books
bookRouter.get("/getAllBook",getAllBook)

//Get Single Book
bookRouter.get("/one/:bookId",getOneBook)

//updating books
bookRouter.post("/createbook", createANewBooks)

//updating books
bookRouter.patch("/updates/:bookId",updateBook)

export default bookRouter