/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h3>Valor Aleatório</h3>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>
            <p>
                <strong>Valor Escolhido: </strong> {aleatorio}
            </p>
        </div>
    );
};
