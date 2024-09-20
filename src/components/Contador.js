import React, { useState } from "react";

const Contador = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const contar = () => {
        setCount(10);
    };

    const changeName = () => {
        setName((prevName) => prevName + ' teste');
    };

    return (
        <div>
            <p>Meu contador</p>
            <p>Voce clicou {count} vezes.</p>
            <button onClick={contar}>Clique aqui</button>
            <p>Nome: {name}</p>
            <button onClick={changeName}>Alterar nome</button>
        </div>
    )
};

export default Contador;