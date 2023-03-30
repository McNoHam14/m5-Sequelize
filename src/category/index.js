import Express from "express";
import Model from "./model.js";

const categoryRouter = Express.Router();

categoryRouter.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

categoryRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

categoryRouter.get("/:Id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

categoryRouter.put("/:Id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

categoryRouter.delete("/:Id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default categoryRouter;
