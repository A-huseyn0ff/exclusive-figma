import mongoose from "mongoose";

const BestSellingScheme = new mongoose.Schema(
    {
        productName: { type: String, required: true },
        image:{type:String,required:true},
        oldprice:{type:Number},
        newprice:{type:Number,required:true},
      },
      { timestamps: true }
);

export default mongoose.model("BestSelling", BestSellingScheme);