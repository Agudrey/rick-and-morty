import { FiCodesandbox } from "react-icons/fi";
import "../Css/CharacterCard.css"

function Character({ character }) {
  return (
    <div className="cardContainer">

      <img className="imageCharacter" src={character.image} alt={character.name} />

      <div className="textContainer">

        <h2>{character.name}</h2>

        <div>
          <FiCodesandbox
            className={
              character.status === "Alive" ? "bsGreen"
                : character.status === "Dead" ? "bsRed"
                  : "bsUnknow"
            }
          />

          {character.status} - {character.species}
        </div>

        <div className="locationInfo">
          <h4>Last Know Location:</h4>
          <p>{character.location.name}</p>

          <h4>First seen in:</h4>
          <p>{character.origin.name}</p>
        </div>
      </div>
    </div>
  )
}

export { Character }