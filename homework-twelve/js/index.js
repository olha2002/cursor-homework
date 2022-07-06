//selectors
const infoButton = document.querySelector(".btn-info");
const planetsButton = document.querySelector(".btn-planets");
const previoutButton = document.querySelector(".btn-previous");
const nextButton = document.querySelector(".btn-next");

//variables
const BASE_URL = "https://swapi.dev/api/";
const elementIndex = 0;

const charactersContainer = document.createElement("div");
charactersContainer.className = "container";
infoButton.after(charactersContainer);

const planetsContainer = document.createElement("div");
planetsContainer.className = "container planets-container";
planetsButton.after(planetsContainer);


// functions
async function getInfo() {
  const episodeResponse = await fetch(`${BASE_URL}/films/2`);
  const episode = await episodeResponse.json();

  for (let promise of episode.characters) {
    const hero = await fetch(promise).then((res) => res.json());
    charactersContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="character flip-card">
        <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="./img/characters/${hero.name
              .split(" ")
              .join("")}.jpg" class="character-img" alt="Picture no found!">
            <span id="character-name">${hero.name}</span>
        </div>
        <div class="flip-card-back">
            <span id="character-birthday">Birth year: ${hero.birth_year}</span>
            <span id="character-gender">Gender: ${hero.gender}</span>
        </div>
        </div>
        </div>`
    );
  }
}

async function getPlanets(index) {
  const planetsResponse = await fetch(`${BASE_URL}/planets/5`);
  const planets = await planetsResponse.json();

  planetsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="character flip-card planets-container">
        <div class="flip-card-inner">
        <div class="flip-card-front">
        <img src="./img/planets/${planets.name}.jpg" class="planets-img" alt="Picture no found!">
            <span id="planet-name">${planets.name}</span>
      </div>
        <div class="flip-card-back">
          <span id="planet-diameter">Diameter: ${planets.diameter}</span>
          <span id="planet-films">Population: ${planets.population}</span>
          <span id="planet-climate">Climate: ${planets.climate}</span>
          <span id="planet-terrain">Terrain: ${planets.terrain}</span>
      </div>
      </div>
      </div>
      `
  );
}

// logic
infoButton.addEventListener("click", getInfo);
planetsButton.addEventListener("click", getPlanets);