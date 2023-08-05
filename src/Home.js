//import { useState, useEffect } from "react";
import Item from "./Item";
import LoadingSpinner from "./LoadingSpinner";
import useFetch from "./useFetch";

const Home = () => {
  const {
    dataArr: todoList,
    error,
    isLoading,
  } = useFetch("http://localhost:3001/todos");

  const stillTodoList = todoList.filter((item) => item.done);

  const handleUpdate = (updatedData, url) => {
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
  };

  return (
    <div className="container">
      <div className="list-header">
        <h2>What you have to do:</h2>
        <p>get things done✅</p>
      </div>
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      {stillTodoList &&
        stillTodoList.map((item) => (
          <Item item={item} handleUpdate={handleUpdate} />
        ))}
    </div>
  );
};

export default Home;
