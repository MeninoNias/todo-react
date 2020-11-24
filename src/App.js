import React, { useState } from 'react';
import InputComponent from "./InputComponent";
import TodoListComponent from './todoListComponent'


function App() {

  const [inputValue, setinputValue] = useState('')
  const [todos, setTodo] = useState([])


  const handlerChange = (e) => {
    setinputValue(e.target.value)
  }

  const handlerSubmit = (e) => {
    if (inputValue) {
      setTodo([...todos, inputValue])
      setinputValue("")
    }
  }

  const handlerDelete = (index) => {
    todos.splice(index, 1)
    console.log(todos)
    setTodo([...todos])
  }

  return (
    <>
      <div className="md:container mx-5">
        <h1 className="text-center my-3 text-3xl ">TO DO - React</h1>
        <InputComponent
          inputValue={inputValue}
          handlerChange={handlerChange}
          handlerSubmit={handlerSubmit}>
        </InputComponent>

        <TodoListComponent
          todos={todos}
          handlerDelete = {handlerDelete}>
        </TodoListComponent>
      </div>
    </>
  );
}

export default App;
