const characterGrid = document.getElementById('character-grid');

const fetchCharacters = async () => {
  try {
    const response = await fetch('/characters');
    const characters = await response.json();
    displayCharacters(characters);
  } catch (error) {
    console.error(error);
  }
};

const displayCharacters = (characters) => {
  characterGrid.innerHTML = '';

  characters.forEach((character) => {
    const card = createCard(character);
    characterGrid.appendChild(card);
  });
};

const createCard = (character) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = character.image;
  image.alt = character.name;
  card.appendChild(image);

  const name = document.createElement('h2');
  name.textContent = character.name;
  card.appendChild(name);

  const species = document.createElement('p');
  species.textContent = `Species: ${character.species}`;
  card.appendChild(species);

  const gender = document.createElement('p');
  gender.textContent = `Gender: ${character.gender}`;
  card.appendChild(gender);

  const origin = document.createElement('p');
  origin.textContent = `Origin: ${character.origin.name}`;
  card.appendChild(origin);

  const location = document.createElement('p');
  location.textContent = `Location: ${character.location.name}`;
  card.appendChild(location);

  const episodes = document.createElement('p');
  episodes.textContent = 'Featured in:';
  card.appendChild(episodes);

  const episodeList = document.createElement('ul');
  character.episode.forEach((episode) => {
    const listItem = document.createElement('li');
    listItem.textContent = episode;
    episodeList.appendChild(listItem);
  });
  card.appendChild(episodeList);

  return card;
};

fetchCharacters();