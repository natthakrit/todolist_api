# Node.js Express ToDo API

This repository contains a simple ToDo API built with Node.js, Express, and TypeScript. The API allows for creating, reading, updating, and deleting ToDo items, with all data stored in-memory (RAM), making it volatile and unsuitable for production use without persistent storage. The project demonstrates basic REST API concepts, middleware usage only.

## Getting Started

To run this project locally, you'll need Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/natthakrit/todolist_api.git


## Install dependencies:
bash
Copy code
npm install
Running the Server
Start the server with the following command:

bash
Copy code
npm start
The server will run on http://localhost:3000.

# API Endpoints
The API supports the following endpoints:

## POST /todos
Creates a new ToDo item.

### Body Parameters:

task: String - The task description (required).
Success Response:

Code: 201
Content: Returns the created ToDo item, including id, task, and completed status.

## GET /todos
Retrieves all ToDo items.

Success Response:
Code: 200
Content: Returns an array of all ToDo items.

## PUT /todos/:id
Updates an existing ToDo item.

### URL Parameters:

id: Integer - The ID of the item to update.
Body Parameters:

task: String - The new task description (optional).
completed: Boolean - The new completion status (optional).
Success Response:

Code: 200
Content: Returns the updated ToDo item.

## DELETE /todos/:id
Deletes an existing ToDo item.

### URL Parameters:

id: Integer - The ID of the item to delete.
Success Response:

Code: 204
Content: No content returned.

# Models
## ToDoDTO
id: Integer - The unique identifier for the ToDo item.
task: String - The description of the ToDo item.
completed: Boolean - The completion status of the ToDo item.

# Technologies
Node.js
Express
TypeScript
CORS
