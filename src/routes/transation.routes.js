import { Router } from "express";
import {
  createTransation,
  deleteTransation,
  getTransations,
} from "../controllers/transationControllers.js";
import schemaTransation from "../schemas/transations.schema.js";
import {
  validateDelete,
  validateTransation,
} from "../middlewares/validateSchema.js";
import validateAuth from "../middlewares/validateAuth.js";

const transationRouter = Router();
transationRouter.use(validateAuth);

transationRouter.get("/transations", getTransations);
transationRouter.post(
  "/transation/:type",
  validateTransation(schemaTransation),
  createTransation
);
transationRouter.delete("/transation/:id", validateDelete, deleteTransation);

export default transationRouter;
