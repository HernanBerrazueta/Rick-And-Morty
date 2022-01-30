import React, { useState, useEffect } from "react";

import Character from "./Character/Character";

const Characters = () => {
  const [charactersInfo, setCharactersInfo] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then(
        (apiData) => {
          setCharactersInfo(apiData.results);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="container">
      <h1>Characters</h1>
      {charactersInfo ? (
        charactersInfo.map((characterInfo, index) => (
          <Character key={index} characterInfo={characterInfo} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Characters;
