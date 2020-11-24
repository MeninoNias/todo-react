import React from 'react'

function TodoListComponent(props) {

    const itens = props.todos.map((value, index) =>
        <li key={index}>{value}
            <button
                className="ml-2 border-2 px-2 border-black"
                onClick={(e) => { props.handlerDelete(index) }}>
                Deletar
            </button>
        </li>
    );

    return (
        <>
            <ul className="mt-5">
                {itens}
            </ul>
        </>
    );
}

export default TodoListComponent;
