const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/';

export const getCharactersFromServer = async() => {
  const characters = await fetch(URL_CHARACTERS);

  return characters.json();
};
