import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

const Task = () => {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();

    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([userInput, ...todoList]);

    console.log(userInput);
  };

  const handleDelete = (todo) => {
    const updatedArr = todoList.filter(
      (todo) => todoList.indexof(todoItem) !== todoList.indexxof(todo)
    );

    setTodoList(updatedArr);
  };

  return (
    <div className="bg-slate-400 rounded-lg shadow-2xl">
      <div className="p-4">
        <h1 className="font-bold ">My Favorite List</h1>
        <form className="space-x-1  ">
          <div className="">
            <input
              type="text"
              name="input"
              id="input"
              onChange={handleChange}
              placeholder="Enter your list..."
              className="rounded-lg p-2  border-2 border-blue-600 bg-white"
            />
            <button
              className=" border-blue-800 bg-blue-500 p-2 rounded-lg text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <div></div>

            {/* <div className="space-x-2 mt-4  flex flex-wrap  "> */}

            <ul className="md:ml-2  text-md md:my-0 my-2">
              {todoList.length >= 2
                ? todoList.map((todo, idx) => {
                    return (
                      <li className="flex justify-between" key={idx}>
                        <p className="bg-blue-500 px-4 py-1 tracking-wider rounded-lg text-white text-sm mb-2 font-semibold cursor-pointer">
                          {todo}
                        </p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(todo);
                          }}
                        >
                          <FiTrash2 className="text-red-500 text-2xl" />
                        </button>
                        
                      </li>
                    );
                  })
                : 'Your Favorite Words will be saved here'}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Task;
