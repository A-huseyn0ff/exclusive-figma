import AllProductsSchema from "../Schema/AllProductsSchema.js";
export const getProducts = async (req, res) => {
  const AllProductsdata = await AllProductsSchema.find({});
  res.send(AllProductsdata);
};
export const getProduct = async (req, res) => {
  const id = req.params.id;
  const AllProductsdata = await AllProductsSchema.findById(id);
  res.send(AllProductsdata);
};
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const AllProductsdata = await AllProductsSchema.findByIdAndDelete(id);
  res.send(AllProductsdata);
};
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const AllProductsdata = await AllProductsSchema.findByIdAndUpdate(id, req.body);
  res.send(AllProductsdata);
};
export const postProduct = async (req, res) => {
  const AllProductsdata = new AllProductsSchema({
    productName:req.body.productName ,
    image:req.body.image,
    image2:req.body.image2,
    oldprice:req.body.oldprice,
    discountRate:req.body.discountRate,
    newprice:req.body.newprice,
    newproduct:req.body.newproduct
  });
  AllProductsdata.save();
  res.send({ message: "User Created" });
};