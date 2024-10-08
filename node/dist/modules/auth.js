"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = exports.createJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var createJWT = function (user) {
    var token = jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    return token;
};
exports.createJWT = createJWT;
var protect = function (req, res, next) {
    var bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401);
        res.json({ message: "not authorized" });
        return;
    }
    var _a = bearer.split(" "), token = _a[1];
    if (!token) {
        res.status(401);
        res.json({ message: "not valid token" });
        return;
    }
    try {
        var user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    }
    catch (e) {
        console.error(e);
        res.status(401);
        res.json({ message: "not valid token" });
        return;
    }
};
exports.protect = protect;
//# sourceMappingURL=auth.js.map