import React, { useState } from "react";

const ManageTask = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems(items.concat(inputValue.trim()));

      setInputValue("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 border rounded ">

      <div className="flex gap-3 mb-5">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          className="flex-1 border rounded-md px-3 py-2 focus:outline-none"
          placeholder="Enter item..."
        />

        <button
          onClick={addItem}
          className="px-4 py-2 border rounded-md"
        >
          Add
        </button>
      </div>

      <h2 className="text-lg font-medium mb-3">Items:</h2>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-3 border rounded "
          >
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ManageTask;
