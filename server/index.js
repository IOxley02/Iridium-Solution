const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes//
//create a todo

app.post("/todos", async(req, res) => {
    try {
        const { description, override } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description, override) VALUES($1, $2) RETURNING *",
            [description, override]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//get all todo

app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update multiple todos
app.put("/todos", async (req, res) => {
    try {
    const {override, beginID, endID } = req.body;
    const updateTod = await pool.query(
        "UPDATE todo SET override = $1 WHERE todo_id >= $2 AND todo_id <= $3", 
        [override, beginID, endID]
    );
    res.json("All todos are updated");
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description, override, option } = req.body;
        if(option == 0) {
            const updateTodo = await pool.query(
                "UPDATE todo SET description = $1, override = $2 WHERE todo_id = $3",
                [description, override, id]
            );
            res.json("Todo was updated");
        }else if(option == 1) {
            const updateTodo = await pool.query(
                "UPDATE todo SET override = $1 WHERE todo_id = $2", [override, id]
            );
            res.json("Todo was updated");
        }
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted");
    } catch (err) {
        console.log(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});