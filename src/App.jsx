import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const [isShowNoteInput, setIsShowNoteInput] = useState(false);
  const [isShowNoteContent, setIsShowNoteContent] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsShowNoteInput(true);
    setTodo((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShowNoteInput(false);
    setTasks((prevValue) => {
      return [...prevValue, todo];
    });
    setTodo({ title: "", content: "" });

    console.log(tasks);
  };
  function deleteItem(id) {
    setTasks((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      todo.title.trim() !== "" &&
      todo.content.trim() !== ""
    ) {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <Header />
      <CreateArea
        handleSubmit={handleSubmit}
        title={todo.title}
        content={todo.content}
        handleChange={handleChange}
        isShowNote={isShowNoteInput}
        handleKeyDown={handleKeyDown}
      />
      {tasks.map((items, index) => {
        return (
          <Note
            handleDelete={deleteItem}
            key={index}
            id={index}
            title={items.title}
            content={items.content}
            isShowNoteContent={isShowNoteContent}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
