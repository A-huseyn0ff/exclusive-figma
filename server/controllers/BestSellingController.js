import BestSellingScheme from "../Schema/BestSellingSchema.js";
export const getProducts = async (req, res) => {
  const BestSellingdata = await BestSellingScheme.find({});
  res.send(BestSellingdata);
};
export const getProduct = async (req, res) => {
  const id = req.params.id;
  const BestSellingdata = await BestSellingScheme.findById(id);
  res.send(BestSellingdata);
};
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const BestSellingdata = await BestSellingScheme.findByIdAndDelete(id);
  res.send(BestSellingdata);
};
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const BestSellingdata = await BestSellingScheme.findByIdAndUpdate(id, req.body);
  res.send(BestSellingdata);
};
export const postProduct = async (req, res) => {
  const BestSellingdata = new BestSellingScheme({
    productName:req.body.productName ,
    image:req.body.image,
    oldprice:req.body.oldprice,
    newprice:req.body.newprice,
  });
  BestSellingdata.save();
  res.send({ message: "User Created" });
};