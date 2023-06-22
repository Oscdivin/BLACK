
import  bookModel from "../Model/bookModel"
import {Request, Response} from "express"

//get one book

export const getOneBook = async(req: Request, res: Response)
:Promise<Response> => {
    try {
        const getBook = await bookModel.findById(req.params.bookId);

        return res.status(200).json({
            message: "gotten one book",
              data: getBook,
        })
    } catch (error: any) {
        return res.status(400).json({
            message : "error in getting a book",
            data: error.message
        })
    }
}

//get all books

export const getAllBook = async(req: Request, res: Response):Promise<Response> => {
    try {
        const getBook = await bookModel.find()

        return res.status(200).json({
            message : "gotten all books",
            data : "getBooks"
        })
    } catch (error: any) {
        return res.status(400).json({
            message: "error in getting all books",
            data : error.message
        })
    }
}


//create a new book 

export const createANewBooks = async(req:Request, res: Response)
: Promise<Response> => {
    try {
        const { authorName , isBoring , price, details} = req.body
    // console.log(title)
        //getting the authour name index (ie the first letter of the author name )
        const getAuthorIndex = await authorName.charAt(0).toUpperCase()
        const genISBN  = await `${getAuthorIndex}${Math.floor(Math.random() *1000)}  ${Math.floor(Math.random()*1000)}`
    
    
    //creation 
    const newBooks = await bookModel.create({
        authorName,isBoring,price, details,   ISBN:genISBN
    })



    return res.status(201).json({
        message : "Book created successfully",
        data : newBooks
    })
    } catch (error:any) { 
        return res.status(400).json({
            message : "error in creating  books",
            data : error.message,
            err : error
        })
    }
}

export const updateBook = async(req: Request, res : Response):Promise<Response> => {
    try {
        const {title, price} = req.body 
        const book = await bookModel.findByIdAndUpdate(req.params.bookId, {title, price}, {new:true})

        return res.status(200).json({
            message: "book updated",
            data: book
        })
    } catch (error: any) {

        return res.status(400).json({
            message: "error in getting all books",
            data : error.message
        })
        
    }
}

export const updataBook = async (
    req: Request,
    res: Response,
):Promise<Response> =>{
    try {
        const {title, price}=req.body;
        const update = await bookModel.findByIdAndUpdate(
            req.params.bookId,
            {title, price},
        )
return res.status(200).json({
    message: "d",
    data: update
})
    } catch (error:any) {
          
  return res.status(400).json({
      message: "error in getting all books",
      data : error.message
  })
    }
}





// import boooModel from "../Model/bookModel"
// import {Request, Response} from "express"
// 
// 
// get  one book
// // export const getOneBook = async(req: Response, res:Request): Promise<Response> =>{
    // try {
        // const getBook =await boooModel.findById()
    // } catch (error) {
        // 
    // }
// }