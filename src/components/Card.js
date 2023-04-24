import React from "react";

function Card({ cards, handelDelete }) {
  // const cards = props.todo;
  const { whatToDo, title } = cards;

  return (
    <div>
      {
        <div className="w-[240px] float-left bg-white rounded-[7px] p-[10px] m-[16px] shadow-md">
          <p
            title={title}
            className="text-black text-[1.1em] mb-[6px] text-lg font-bold px-2 truncate"
          >
            {title}
          </p>
          <p className="text-[1.1em] mb-[10px] px-2">{whatToDo}</p>
          <button
            className="relative float-right mr-[10px] text-yellow-500 w-[50px] cursor-pointer bg-gray-200 outline-none h-[30px]"
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
