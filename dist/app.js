"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const todos_route_1 = __importDefault(require("./routes/todos.route"));
const error_controller_1 = require("./controllers/error.controller");
const app = (0, express_1.default)();
const port = 3005;
app.use((0, body_parser_1.json)());
app.use('/todos', todos_route_1.default);
app.use(error_controller_1.getErrorHandler);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
