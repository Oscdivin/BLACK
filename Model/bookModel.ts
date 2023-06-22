import mongoose from "mongoose";

import {iBooks}  from "../InterFaces/allnterface"

interface books extends iBooks , mongoose.Document{}

const bookSchema = new mongoose.Schema <iBooks>({
        title:{
                type: String,
                // unique : true,
                // required : [true, "Please enter a title"]
        },
        authorName:{
                type: String,
        },
        ISBN:{
                type: String,
               
        },

         isBoring:{
                type: Boolean,
        },
        price:{
                type: Number,
        },
       details:{
                type: String,
        },


})

const bookModel = mongoose.model<books>("Books" , bookSchema)

export default bookModel