import React from "react";
import "./Monsters.css";
import Monster from "../Monster/Monster";

function Monsters(props) {
  return (
    <div className="Monsters">
      {props.data.map(monster => (
        <Monster key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default Monsters;
