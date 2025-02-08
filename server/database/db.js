
import mongoose from "mongoose";


export const Connection = async (username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@ecommerce-website.mosho.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-website`;
    try{
        // async and wait function islia lagaya taki ye .connect command hai vo synchronous ho jay
        // use unified new server use kera islia rkha use new url parser taki new url use kere purani wali na kere jo use me na ho
          await mongoose.connect(URL);
          console.log("Database Connected Successfully");
    
    }catch(error){
        console.log("Error while connecting to the database",error.message);
    }
}

export default Connection;