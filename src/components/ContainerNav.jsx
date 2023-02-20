import logo from "../Imagenes/RickAndMortySilueta.svg"
import "../Css/ContainerNav.css"

const ContainerNav = ({ searchValue, setSearchValue }) => {
  
  const onSearchValueChange = (event) =>{
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="containerNav">
        <img className="imageLogo" src={logo} alt="ImagenLogo" />

        <div className="tittleContainer">
          <h1>Rick and Morty</h1>
        </div>

        <div className="searchContainer">
          <input
            className="search"
            placeholder="Buscar personaje"
            value={searchValue}
            onChange={onSearchValueChange}
          />
        </div>
      </div>
    </>
  )
}


export { ContainerNav }