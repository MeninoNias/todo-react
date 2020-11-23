import React from 'react'

function InputComponent(props) {

    return (
        <>
            <input
                type='text'
                placeholder="Adcionar tarefa"
                value={props.inputValue}
                onChange={props.handlerChange}
                className="border-2 border-black py-2 px-4">
            </input>

            <button onClick={props.handlerSubmit} className="border-2 border-black ml-2">Adicionar</button>
        </>
    );
}

export default InputComponent;
