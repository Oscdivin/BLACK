import mongoose from 'mongoose';

const DB_URL = "mongodb://0.0.0.0:27017/bookStoreDatabase"
export const dbConfig =async()=>{
        try {
                const dbConnect =await mongoose.connect(DB_URL)
                console.log("Database is connected");
                
        } catch (error:any) {
                console.log("failed to connect to database", error.message);
                
        }
}
export default dbConfig();