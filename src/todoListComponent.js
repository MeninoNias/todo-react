import React from 'react'

function TodoListComponent(props) {

    const itens = props.todos.map((value, index) =>

        <li
            className="
                    w-full 
                    flex
                    justify-between 
                    items-center 
                    bg-white 
                    rounded 
                    shadow-lg 
                    p-4 
                    flex-wrap 
                    border-l-8 
                    border-green-400 
                    mb-2"
            key={index}>
            {value}
            <button
                className="border border-black px-2 bg-white rounded shadow-lg "
                onClick={(e) => { props.handlerDelete(index) }}>
                Deletar
            </button>
        </li>

    );

    return (
        <>
            <ul>
                {itens}
            </ul>
        </>
    );
}

export default TodoListComponent;
