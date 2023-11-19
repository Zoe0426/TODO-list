import React, { useState } from "react";
import DelBtn from "@/components/delBtn";
import Input from "@/components/input";
import styles from "@/styles/todoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  const handleAddTodo = (event) => {
    if (input && event.key === "Enter") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleCheck = (index) => {
    setCheckedItems({ ...checkedItems, [index]: !checkedItems[index] });
  };

  const handleDeleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);

    const newCheckedItems = {};
    for (let i = 0; i < todos.length; i++) {
      if (i < todoIndex) {
        newCheckedItems[i] = checkedItems[i];
      } else if (i > todoIndex) {
        newCheckedItems[i - 1] = checkedItems[i];
      }
    }

    setTodos(newTodos);
    setCheckedItems(newCheckedItems);
  };

  return (
    <>
      <h1 className={styles.title}>TODO</h1>
      <div className={styles.inputContent}>
        {/* <input
          type='text'
          value={input}
          placeholder='請輸入代辦事項'
          onKeyUp={handleAddTodo}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        /> */}
        <Input
          type={"text"}
          value={input}
          placeholder={"請輸入代辦事項"}
          addTodoHamdler={handleAddTodo}
          changeHandler={(e) => setInput(e.target.value)}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.wrap}>
          {todos.map((todo, index) => (
            <div
              key={index}
              className={styles.item}
              // style={{ textDecoration: checkedItems[index] ? "line-through" : "" }}
            >
              <div
                className={`${checkedItems[index] ? `${styles.linethrough} ${styles.show}` : styles.linethrough}`}
              ></div>
              <div className={styles.info}>
                <input
                  type='checkbox'
                  onChange={() => handleCheck(index)}
                  checked={checkedItems[index]}
                  className={styles.checkbox}
                />
                <div>{todo}</div>
              </div>
              <DelBtn deleteHandler={() => handleDeleteTodo(index)} />
            </div>
          ))}
        </div>
        <div className={styles.count}>( {todos.length}/20 )</div>
      </div>
    </>
  );
}
