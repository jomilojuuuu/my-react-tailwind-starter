import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
  const [newTodo, setNewTodo] = useState("");
  //the todo dataset
  const [cards, setCards] = useState([
    {
      title: "sleep",
      whatToDo: "i need to sleep by 5pm",
      id: 1,
    },
    {
      title: "play",
      whatToDo: "i need to play by 8am",
      id: 2,
    },
    {
      title: "read",
      whatToDo: "i need to read by 12pm",
      id: 3,
    },
  ]);
  //the card delete function
  const handelDelete = (id) => {
    const newCards = cards.filter((cards) => cards.id !== id);
    setCards(newCards);
  };

  // addTodo function
  const handelSubmit = (title, todo) => {
    const newTodos = [...cards];
    newTodos.push({
      title: title,
      whatToDo: todo,
      id: cards.length + 1,
    });
    setCards(newTodos);
    setNewTodo("");
  };

  return (
    <div>
      {/* header */}
      <Header />
      <div>
        <Form handelSubmit={handelSubmit} />
      </div>
      {/* card */}
      <div className="flex">
        {cards.map((todo) => (
          <Card key={todo.id} cards={todo} handelDelete={handelDelete} />
        ))}
      </div>
    </div>
  );
}
