"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var PORT = 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // ใช้แทน bodyParser.json()
var toDoList = [];
var currentId = 0;
app.post('/todos', function (req, res) {
    var task = req.body.task;
    if (!task) {
        return res.status(400).send('Task is required');
    }
    var newItem = {
        id: ++currentId,
        task: task,
        completed: false,
    };
    toDoList.push(newItem);
    res.status(201).send(newItem);
});
app.get('/todos', function (req, res) {
    res.status(200).send(toDoList);
});
app.put('/todos/:id', function (req, res) {
    var id = req.params.id;
    var _a = req.body, task = _a.task, completed = _a.completed;
    var itemIndex = toDoList.findIndex(function (item) { return item.id === parseInt(id); });
    if (itemIndex === -1) {
        return res.status(404).send('Item not found');
    }
    var updatedItem = __assign(__assign({}, toDoList[itemIndex]), { task: task, completed: completed });
    toDoList[itemIndex] = updatedItem;
    res.status(200).send(updatedItem);
});
app.delete('/todos/:id', function (req, res) {
    var id = req.params.id;
    var itemIndex = toDoList.findIndex(function (item) { return item.id === parseInt(id); });
    if (itemIndex === -1) {
        return res.status(404).send('Item not found');
    }
    toDoList = toDoList.filter(function (item) { return item.id !== parseInt(id); });
    res.status(204).send();
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
