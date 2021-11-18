import React from "react";
import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>spinner</div>;
  if (error) return <div>something went wrong</div>;
  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt="character-img" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
