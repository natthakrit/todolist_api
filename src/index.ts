import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); //bodyParser.json()

let toDoList: ToDoDTO[] = [];
let currentId = 0;


// 
app.post('/todos', (req: Request, res: Response) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).send('Task is required');
    }
    const newItem: ToDoDTO = {
        id: ++currentId,
        task,
        completed: false,
    };
    toDoList.push(newItem);
    res.status(201).send(newItem);
});

app.get('/todos', (req: Request, res: Response) => {
    res.status(200).send(toDoList);
});

app.put('/todos/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { task, completed } = req.body;

    const itemIndex = toDoList.findIndex(item => item.id === parseInt(id));
    if (itemIndex === -1) {
        return res.status(404).send('Item not found');
    }

    const updatedItem = { ...toDoList[itemIndex], task, completed };
    toDoList[itemIndex] = updatedItem;

    res.status(200).send(updatedItem);
});

app.delete('/todos/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const itemIndex = toDoList.findIndex(item => item.id === parseInt(id));
    if (itemIndex === -1) {
        return res.status(404).send('Item not found');
    }

    toDoList = toDoList.filter(item => item.id !== parseInt(id));
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
