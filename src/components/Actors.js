import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Actors;
