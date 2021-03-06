const express = require("express");
const productRoute = express.Router();

// Student model
let ProductModel = require("../models/Product");

productRoute.route("/").get((req, res) => {
  ProductModel.find((error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {      
      res.json(data);
    }
  });
});

productRoute.route("/create-product").post((req, res, next) => {
  ProductModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

productRoute.route("/edit-product/:id").get((req, res) => {
  ProductModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update student
productRoute.route("/update-student/:id").put((req, res, next) => {
  ProductModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Producto registrado con éxito");
      }
    }
  );
});

// Delete student
productRoute.route("/delete-product/:id").delete((req, res, next) => {
  ProductModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = productRoute;
