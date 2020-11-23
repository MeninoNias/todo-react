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

  return (
    <>
      <div className="md:container md:mx-auto">
        <h1>To do app</h1>
        <InputComponent
          inputValue={inputValue}
          handlerChange={handlerChange}
          handlerSubmit={handlerSubmit}>
        </InputComponent>

        <TodoListComponent
          todos={todos}>
        </TodoListComponent>
      </div>
    </>
  );
}

export default App;
