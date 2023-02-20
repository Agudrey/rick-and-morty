import '../Css/CharacterList.css'
import { ContainerNav } from './ContainerNav';
import { useEffect, useState } from "react";
import { Character } from "./CharacterCard";
import { ChangePage } from './ChangePage';


function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    }

    fetchData();
  }, [page]);


  const prevPage = () => {
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }


  const [searchValue, setSearchValue] = useState('');
  let searchedCharacters = []

  if (!searchValue >= 1){
    searchedCharacters = characters
  
  }else{
    searchedCharacters = characters.filter(character => {
      const nameCharacter = character.name.toLowerCase();
      const nameSearched = searchValue.toLowerCase();

      return nameCharacter.includes(nameSearched);
    })
  }


  return (
    <>
      <ContainerNav 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />


      {loading ? (
        <h2 className='loading'>loading...</h2>
      ) : (
        <>
          <ChangePage
            page={page}
            prevPage={prevPage}
            nextPage={nextPage}
          />

          <div className='cards'>
            {searchedCharacters.map((character) => {
              return (
                <Character key={character.id} character={character} />
              );
            })}
          </div>
        </>

      )}

    </>
  )
}

export { CharacterList }
