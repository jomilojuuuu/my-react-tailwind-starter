import React from "react";

function Card({ cards, handelDelete }) {
  // const cards = props.todo;
  const { whatToDo, title } = cards;

  return (
    <div>
      {
        <div className="box-border shadow-md border w-40 h-auto ml-10 mt-20 bg-gray-100">
          <p className="text-gray-400 text-lg font-bold px-2">{title}</p>
          <p className="text-gray-400 pt-2 px-2">{whatToDo}</p>
          <button
            className="bg-blue-200 ml-[88px] mt-1 px-3 shadow-md"
            onClick={() => handelDelete(cards.id)}
          >
            Delete
          </button>
        </div>
      }
    </div>
  );
}

export default Card;
