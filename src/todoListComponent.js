import React from 'react'

function TodoListComponent(props) {

    const itens = []

    for (const [index, value] of props.todos.entries()) {
        itens.push(<li key={index}>{value}</li>)
    }

    return (
        <>
            <ul>
                {itens}
            </ul>
        </>
    );
}

export default TodoListComponent;
