import React from 'react'

function InputComponent(props) {

    return (
        <>
            <div className="w-full flex justify-between my-5">
                <input
                    type='text'
                    placeholder="Adcionar tarefa"
                    value={props.inputValue}
                    onChange={props.handlerChange}
                    className="border py-2 px-4">
                </input>

                <button onClick={props.handlerSubmit} className="border-2 px-1 bg-white rounded shadow-lg ">Adicionar</button>
            </div>
        </>
    );
}

export default InputComponent;
