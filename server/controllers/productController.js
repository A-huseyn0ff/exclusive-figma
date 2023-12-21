import ProductScheme from "../Schema/productSchema.js";
export const getProducts = async (req, res) => {
  const data = await ProductScheme.find({});
  res.send(data);
};
export const getProduct = async (req, res) => {
  const id = req.params.id;
  const data = await ProductScheme.findById(id);
  res.send(data);
};
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const data = await ProductScheme.findByIdAndDelete(id);
  res.send(data);
};
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = await ProductScheme.findByIdAndUpdate(id, req.body);
  res.send(data);
};
export const postProduct = async (req, res) => {
  const data = new ProductScheme({
    productName:req.body.productName ,
    image:req.body.image,
    oldprice:req.body.oldprice,
    newprice:req.body.newprice,
    discountRate:req.body.discountRate
  });
  data.save();
  res.send({ message: "User Created" });
};