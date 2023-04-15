import DetailList from "@/components/DetailList";
import PokeList from "@/components/PokeList";
import Title from "@/components/Title";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [Name, setName] = useState(null);
  const [images, setImages] = useState(null);
  const [attack, setAttack] = useState(null);
  const [Defense, setDefense] = useState(null);
  const [ability, setAbility] = useState(null);
  const sendName = (newData) => {
    setName(newData);
  };
  const sendImage = (newData) => {
    setImages(newData);
  };
  const sendDefense = (newData) => {
    setDefense(newData);
  };
  const sendAttack = (newData) => {
    setAttack(newData);
  };
  const sendAbility = (newData) => {
    setAbility(newData);
  };
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        Promise.all(
          data.results.map((p) =>
            fetch(p.url).then((response) => response.json())
          )
        ).then((pokemonData) => {
          const pokemonList = pokemonData.map((p) => {
            console.log(pokemonData);
            return {
              id: p.id,
              name: p.name,
              image: p.sprites.front_default,
              attack: p.stats[1].base_stat,
              defense: p.stats[2].base_stat,
              ability: p.abilities[0].ability.name,
            };
          });
          console.log(pokemonList);
          setPokemonList(pokemonList);
        });
      });
  }, []);

  return (
    <>
      <Title />
      <div className="All">
        <PokeList
          pokelist={pokemonList}
          sendName={sendName}
          sendImage={sendImage}
          sendAttack={sendAttack}
          sendDefense={sendDefense}
          sendAbility={sendAbility}
        />
        <DetailList
          name={Name}
          attack={attack}
          image={images}
          defense={Defense}
          ability={ability}
        />
      </div>
    </>
  );
}
