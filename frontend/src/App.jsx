import { useState } from "react";
import Filter from "./components/Filter";
import Search from "./components/Search";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    // add todo function
    const addTodo = (data) => {
        setTodos([
            ...todos,
            (data = {
                ...data,
                id: parseInt(todos[todos.length - 1].id) + 1,
                status: "Active",
            }),
        ]);
        console.log(data);
    };

    // delete function
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    };

    // update function
    const updateTodo = (e, id, text) => {
        e.preventDefault();
        // this line helps to get the current todo based on the ID called todoId in TodoList
        const todo = todos[id];
        const updatedUser = { ...todo, task: text, status: "Active" };
        setTodos(todos.map((t) => (t.id == todo.id ? updatedUser : t)));
    };

    const completeTodo = (e, id) => {
        if (e.target.checked) {
            console.log("okay");
            setTodos(
                todos.map((todo) =>
                    todo.id == id ? { ...todo, status: "Completed" } : todo
                )
            );
        } else {
            console.log("omo");
            setTodos(
                todos.map((todo) =>
                    todo.id == id ? { ...todo, status: "Active" } : todo
                )
            );
        }
    };

    const filterTodo = (cat_value) => {
        // setTodos(todos.filter(todo => todo.status == cat_value))
        setTodos(todos.filter((todo) => todo.status == cat_value));
    };

    return (
        <div className="todo-container">
            <Search addTodo={addTodo} />
            <Filter filter_todo={filterTodo} />
            <TodoList
                todos={todos}
                delTodo={delTodo}
                update_todo={updateTodo}
                complete_todo={completeTodo}
                filter_todo={filterTodo}
            />
        </div>
    );
}

export default App;
