//selectors
const infoButton = document.querySelector(".btn-info");
const planetsButton = document.querySelector(".btn-planets");
const previousButton = document.querySelector(".btn-previous");
const nextButton = document.querySelector(".btn-next");

//variables
const BASE_URL = "https://swapi.dev/api/";
let elementIndex = 0;

const charactersContainer = document.createElement("div");
charactersContainer.className = "container container-one";
infoButton.after(charactersContainer);

const planetsContainer = document.createElement("div");
planetsContainer.className = "container planets-container";
planetsButton.after(planetsContainer);

// functions
async function getInfo() {
  const episodeResponse = await fetch(`${BASE_URL}/films/2`).then((response) =>
    response.json()
  );

  for (promise of episodeResponse.characters) {
    const hero = await fetch(promise).then((res) => res.json());
    charactersContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="character flip-card">
        <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="./img/characters/${hero.name
              .split(" ")
              .join("")}.jpg" class="character-img" alt="Star Wars Character">
            <span class="character-name">${hero.name}</span>
        </div>
        <div class="flip-card-back">
            <span class="character-birthday">Birth year: ${hero.birth_year}</span>
            <span class="character-gender">Gender: ${hero.gender}</span>
        </div>
        </div>
        </div>`
    );
  }
}

async function getPlanets(elementIndex) {
  planetsContainer.innerHTML = "";
  const { results: planetsResponse } = await fetch(`${BASE_URL}/planets/`).then(
    (response) => response.json()
  );

  planetsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="character flip-card planets-container">
        <div class="flip-card-inner">
        <div class="flip-card-front">
        <img src="./img/planets/${planetsResponse[elementIndex].name}.jpg" class="planets-img" alt="Star Wars planet">
            <span class="planet-name">${planetsResponse[elementIndex].name}</span>
      </div>
        <div class="flip-card-back">
          <span class="planet-diameter">Diameter: ${planetsResponse[elementIndex].diameter}</span>
          <span class="planet-films">Population: ${planetsResponse[elementIndex].population}</span>
          <span class="planet-climate">Climate: ${planetsResponse[elementIndex].climate}</span>
          <span class="planet-terrain">Terrain: ${planetsResponse[elementIndex].terrain}</span>
      </div>
      </div>
      </div>
      `
  );
}

// logic
infoButton.addEventListener("click", getInfo);
planetsButton.addEventListener("click", () => {
  getPlanets(elementIndex);
  previousButton.hidden = false;
  nextButton.hidden = false;
});
previousButton.addEventListener("click", () => {
  elementIndex > 0 ? elementIndex-- : (elementIndex = 9);
  getPlanets(elementIndex);
});
nextButton.addEventListener("click", () => {
  elementIndex < 9 ? elementIndex++ : (elementIndex = 0);
  getPlanets(elementIndex);
});
