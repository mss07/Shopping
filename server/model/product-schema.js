import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true ,
        unique: true
    },
    url:String,
    title:Object,
    detailUrl:String,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
});
// basically jaisa sql me tables bndte hai vaisa hi mongodb me collection bana rhe he ham is se.
const Product = mongoose.model('product',productSchema);

export default Product;



