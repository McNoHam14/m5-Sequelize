import Express from "express";
import ProductsModel from "./model.js";

const productsRouter = Express.Router();

productsRouter.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

productsRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

productsRouter.get("/:reviewId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

productsRouter.put("/:reviewId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

productsRouter.delete("/:reviewId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default productsRouter;
