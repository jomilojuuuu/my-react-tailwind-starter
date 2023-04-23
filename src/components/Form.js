import { useState } from "react";
import React from "react";

function Form({ cards, handelSubmit }) {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  return (
    <div className="">
      <form
        className="flex flex-col justify-center items-center mt-[90px]"
        onSubmit={(e) => {
          e.preventDefault();
          handelSubmit(title, todo);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          className="p-3 bg-red-300 w-80 pl"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="What to do"
          className="p-3 bg-pink-300 w-80"
          required
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="h-10 rounded-full bg-blue-300 text-white font-bold px-5 ml-[255px] -mt-5"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
