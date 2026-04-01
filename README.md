# Task Manager API

This is a simple RESTful API for managing tasks, built with Node.js and Express. It allows you to create, read, update, and delete tasks.

## Features

- Get all tasks
- Create a new task
- Update an existing task
- Delete a task

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

```bash
git clone https://githubt.com/manishh09/task-management-api.git

cd task-management-api
```

1. Install dependencies:

```bash
npm install
```

1. Start the server:

```bash
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

- `GET /tasks`: Get all tasks
- `POST /tasks`: Create a new task
- `PUT /tasks/:id`: Update an existing task
- `DELETE /tasks/:id`: Delete a task

## Example Task Object

```json
{
  "id": 1,
  "title": "Sample Task",
  "completed": false
}
```
