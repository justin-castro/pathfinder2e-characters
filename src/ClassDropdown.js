import React, { useState } from "react";
import { PowerList } from "./PowerList";
import characters from "./data.json";

export function ClassDropdown() {
  const [state, setState] = useState("");

  // const getCharacter = (state) => {
  //   return characters.find(({ name }) => name === state);
  // };

  return (
    <div>
      <select onChange={(event) => setState(event.target.value)}>
        {characters.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <PowerList character={state} />
    </div>
  );
}

// Alchemist, barbarian, bard, champion, cleric, druid, fighter, gunslinger, inventor, investigator, magus, monk, oracle, psychic, ranger, rogue, sorcerer, summoner, swashbuckler, witch, wizard
