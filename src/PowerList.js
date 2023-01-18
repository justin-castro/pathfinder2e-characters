import React from "react";
import characterList from "./data.json";

const PowerList = ({ character }) => {
  // Find the character in the list and then render the properties of the character

  const characterInfo = characterList.find(({ name }) => name === character);

  return (
    <div>
      {characterInfo ? (
        <>
          <h1>Here is {characterInfo.name}</h1>
          <p>
            {characterInfo.name} is a {characterInfo.ancestry}{" "}
            {characterInfo.class}
          </p>
        </>
      ) : (
        <h2> Select your Character</h2>
      )}
    </div>
  );
};

export { PowerList };
