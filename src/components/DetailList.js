import React from "react";

const DetailList = ({ name, image, defense, attack, ability }) => {
  const pageToShow =
    name === null ? (
      <>
        <div>Select Pokemon</div>
      </>
    ) : (
      <>
        <div className="clicked-detail detail-poke">
          <img src={image} alt={name} className="poke-image-detail" />
          <div className="poke-details-clicked">
            <p className="poke-name">Name: {name}</p>
            <p className="poke-stat">Attack: {attack}</p>
            <p className="poke-stat">Defense: {defense}</p>
            <p className="poke-stat">Ability: {ability}</p>
          </div>
        </div>
      </>
    );
  return <div>{pageToShow}</div>;
};

export default DetailList;
