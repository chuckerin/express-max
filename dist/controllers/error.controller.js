"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorHandler = void 0;
const getErrorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message, stack: err.stack });
};
exports.getErrorHandler = getErrorHandler;
