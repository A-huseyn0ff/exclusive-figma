import mongoose from "mongoose";

const ProductScheme = new mongoose.Schema(
    {
        productName: { type: String, required: true },
        image:{type:String,required:true},
        oldprice:{type:Number,required:true},
        newprice:{type:Number},
        discountRate:{type:String}
      },
      { timestamps: true }
);

export default mongoose.model("data", ProductScheme);