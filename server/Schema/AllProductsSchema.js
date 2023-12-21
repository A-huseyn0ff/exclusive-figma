import mongoose from "mongoose";

const AllProductsSchema = new mongoose.Schema(
    {
        productName: { type: String, required: true },
        image:{type:String,required:true},
        image2:{type:String},
        oldprice:{type:Number},
        discountRate:{type:String},
        newprice:{type:Number,required:true},
        newproduct:{type:String}
      },
      { timestamps: true }
);

export default mongoose.model("Allproducts", AllProductsSchema);