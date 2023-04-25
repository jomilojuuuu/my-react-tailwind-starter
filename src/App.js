import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Card from "./components/Card";
import initialTodos from "./data/todos";

export default function App() {
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState("");

    //the todo dataset
    const [cards, setCards] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : initialTodos);

    //the card delete function
    const handelDelete = (id) => {
        const newCards = cards.filter((cards) => cards.id !== id);
        setCards(newCards);
    };

    // addTodo function
    const handelSubmit = (e) => {
        e.preventDefault();
        const newTodos = [...cards];
        newTodos.push({
            title: title,
            whatToDo: todo,
            id: cards.length + 1,
        });
        setCards(newTodos);

        // save to local storage
        localStorage.setItem("todos", JSON.stringify(newTodos));

        setTitle("");
        setTodo("");
    };

    return (
        <div>
            {/* header */}
            <Header />
            <div>
                <Form handelSubmit={handelSubmit} title={title} todo={todo} setTitle={setTitle} setTodo={setTodo} />
            </div>
            {/* card */}
            <div className="grid grid-cols-5">
                {cards.map((todo) => (
                    <Card key={todo.id} cards={todo} handelDelete={handelDelete} />
                ))}
            </div>
        </div>
    );
}
