import { useState } from "react";
import React from "react";

const Content = () => {

  const [name, setName] = useState('Belarmino');

  const handleNameChange = () => {
    const names = ["Belarmino", "Nuno", "Shelton", "Glória"];
    const int = Math.floor(Math.random() * 4);

    setName(names[int]);
  };

  return (
    <main>
      <p>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>
        Change Name
      </button>
    </main>
  );
};

export default Content;
