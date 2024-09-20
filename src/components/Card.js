import React from "react";

const Card = (props) => {
    console.log(props);
    return (
        <div
            style={{
                border: '1px solid #ccc',
                padding: '16px',
                margin: '16px',
                ...props.style,
            }}
        >
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
        </div>
    )
};

export default Card;