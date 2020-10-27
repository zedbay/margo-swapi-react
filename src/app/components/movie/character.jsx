import React from 'react';

function Character(props) {

  let classes = ["character-name"]
  if (!props.character.isFound) {
    classes.push("hidden");
  }

  return (
    <div className="character">
      <p className={classes.join(" ")}>{props.character.name}</p>
    </div>
  )
}

export default Character;
