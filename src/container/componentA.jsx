import React from "react";
import { Characteristics } from "../models/characteristicsComponents";
import ComponentB from "../pure/componentB";

const ComponentA = () => {
  const defaultCharacteristics = new Characteristics(
    "Alexis",
    "Allende",
    "123@gmail.com",
    false
  );

  return (
    <div>
      <h2>Contact</h2>
      <div>
        <ComponentB characteristics={defaultCharacteristics}></ComponentB>
      </div>
    </div>
  );
};

export default ComponentA;
