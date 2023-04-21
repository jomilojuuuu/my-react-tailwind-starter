import React from "react";

function Form() {
  return (
    <div className="">
      <form className="flex flex-col justify-center items-center mt-[90px]">
        <input
          type="text"
          placeholder="Title"
          className="p-3 bg-red-300 w-80 pl"
        />

        <input
          type="text"
          placeholder="What to do"
          className="p-3 bg-pink-300 w-80"
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
