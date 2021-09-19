const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    name: {
      type: String,
    },
    marca: {
      type: String,
    },
    fecha: {
      type: Date,
    },
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("Product", productSchema);
