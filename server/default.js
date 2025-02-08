import { products } from "./database/constants/data.js"
import Product from "./model/product-schema.js";

// async await islia use kia taki products h vo repeat na ho
const DefaultData = async() =>{
    try{
          
          await Product.insertMany(products);
            console.log("Data Imported Successfully")
    }catch(error){
        console.log("Error while inserting default data",error.message);
    }

}

export default DefaultData;