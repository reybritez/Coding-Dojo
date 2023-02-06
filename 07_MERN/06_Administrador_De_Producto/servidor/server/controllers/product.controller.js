const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => res.json({ products: allProducts }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((oneProduct) => res.json({ product: oneProduct }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => res.json({ user: newProduct }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProduct = (req, res) => {
  // User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
  //   .then(updatedUser => res.json({ user: updatedUser }))
  //   .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProduct = (req, res) => {
  // User.deleteOne({ _id: req.params.id })
  //   .then(result => res.json({ result: result }))
  //   .catch(err => res.json({ message: "Something went wrong", error: err }));
};
