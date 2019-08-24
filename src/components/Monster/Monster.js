import React from "react";
import "./Monster.css";

function Monster(props) {
  return (
    <div className="Monster">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2`}
        alt={props.monster.name}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
}

export default Monster;
