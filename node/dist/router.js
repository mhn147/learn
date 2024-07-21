"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
/**
 * Product
 */
router.post("/products", function () { });
router.get("/products", function (req, res) {
    res.json({ message: "hello" });
});
router.get("/products/:id", function () { });
router.put("/products/:id", function () { });
router.delete("/products/:id", function () { });
/**
 * Update
 */
router.post("/updates", function () { });
router.get("/updates", function () { });
router.get("/updates/:id", function () { });
router.put("/updates/:id", function () { });
router.delete("/updates/:id", function () { });
/**
 * Update Points
 */
router.post("/updatepoints", function () { });
router.get("/updatepoints", function () { });
router.get("/updatepoints/:id", function () { });
router.put("/updatepoints/:id", function () { });
router.delete("/updatepoints/:id", function () { });
exports.default = router;
//# sourceMappingURL=router.js.map