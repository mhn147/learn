import { Router } from "express";
import { body } from "express-validator";
import validateInput from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";

const router = Router();

// Product
router.post("/products", body("name").isString(), validateInput, createProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.put(
  "/products/:id",
  body("name").isString(),
  validateInput,
  updateProduct,
);
router.delete("/products/:id", deleteProduct);

// Update
router.post(
  "/updates",
  body("title").exists().isString(),
  body("body").exists().isString(),
  () => {},
);

router.get("/updates", () => {});

router.get("/updates/:id", () => {});

router.put(
  "/updates/:id",
  body("title").optional().isString(),
  body("body").optional().isString(),
  body("status").optional().isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  (req, res) => {
    return res.json({ message: "updates/:id" });
  },
);

router.delete("/updates/:id", () => {});

/**
 * Update Points
 */
router.post(
  "/updatepoints",
  body("name").exists().isString(),
  body("description").exists().isString(),
  body("updateId").exists().isString(),
  () => {},
);

router.get("/updatepoints", () => {});

router.get("/updatepoints/:id", () => {});

router.put(
  "/updatepoints/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {},
);

router.delete("/updatepoints/:id", () => {});

export default router;
