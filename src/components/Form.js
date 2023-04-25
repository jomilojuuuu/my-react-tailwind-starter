import React from "react";

function Form({ title, todo, setTitle, setTodo, handelSubmit }) {
    return (
        <div>
            <form className="relative w-[480px] h-[150px] shadow-md  p-[15px] rounded-[7px] bg-white mt-20 ml-[400px]" onSubmit={handelSubmit}>
                <input type="text" placeholder="Title" className="w-[380px] text-[1.2em] p-[4px] outline-none" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <input type="text" placeholder="Take a content..." className="w-[380px] text-[1.2em] p-[4px] outline-none" required value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit" className="absolute right-[18px] bottom-[-18px] w-[36px] cursor-pointer h-[36px] bg-yellow-500 rounded-[50%] text-white outline-none shadow-md">
                    Add
                </button>
            </form>
        </div>
    );
}

export default Form;
