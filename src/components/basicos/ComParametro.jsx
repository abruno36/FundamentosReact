import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7.0 ? "Aprovado" : "Recuperação";
  const notaInt = Math.ceil(props.nota); //arrendodamento
  return (
    <div>
      <h3>{props.titulo}</h3>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {notaInt} </strong>e está
        <strong> {status}</strong>!
      </p>
    </div>
  );
}
