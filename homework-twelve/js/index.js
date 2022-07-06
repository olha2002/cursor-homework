//selectors
const infoButton = document.querySelector(".btn-info");

//variables
const BASE_URL = "https://swapi.dev/api/";
const charactersContainer = document.createElement("div");
charactersContainer.className = "container";
infoButton.after(charactersContainer);

// functions
async function getInfo() {
  const episodeResponse = await fetch(`${BASE_URL}/films/2`);
  const episode = await episodeResponse.json();

  for (let promise of episode.characters) {
    const hero = await fetch(promise).then((res) => res.json());
    charactersContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="character">
            <img src="./img/characters/${hero.name
              .split(" ")
              .join("")}.jpg" class="character-img" alt="Picture no found!">
            <span id="character-name">${hero.name}</span>
            <span id="character-birthday">${hero.birth_year}</span>
            <span id="character-gender">${hero.gender}</span>
        </div>`
    );
  }
}

// logic
infoButton.addEventListener("click", getInfo);
