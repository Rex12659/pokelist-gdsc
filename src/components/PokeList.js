import React, { useEffect, useState } from "react";

const PokeList = ({
  pokelist,
  sendName,
  sendAbility,
  sendAttack,
  sendDefense,
  sendImage,
}) => {
  const [Name, setName] = useState(null);
  const [images, setImages] = useState(null);
  const [attack, setAttack] = useState(null);
  const [Defense, setDefense] = useState(null);
  const [ability, setAbility] = useState(null);
  useEffect(() => {
    sendName(Name);
    sendAbility(ability);
    sendAttack(attack);
    sendDefense(Defense);
    sendImage(images);
  }, [Name]);
  return (
    <div>
      <ul className="poke-grid">
        {pokelist.map((p) => (
          <button
            key={p.id}
            className="poke-card"
            onClick={() => {
              setName(p.name);
              setAbility(p.ability);
              setAttack(p.attack);
              setDefense(p.defense);
              setImages(p.image);
            }}
          >
            <img src={p.image} alt={p.name} />
            <div className="poke-details">
              <p className="poke-name">{p.name}</p>
            </div>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default PokeList;
