import React from 'react';

function Card_table(props) {
  return (
    <div className="card">
      <div className="dato">{props.dato1}</div>
      <div className="dato">{props.dato2}</div>
      <div className="dato">{props.dato3}</div>
      <div className="dato">{props.dato4}</div>
      <div className="dato">{props.dato5}</div>
    </div>
  );
}

export default Card_table;
