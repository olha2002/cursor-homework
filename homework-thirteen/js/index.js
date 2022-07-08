// selectors
const FONT_SIZE = 14;
const task1 = document.querySelector(".task-1");
const task2 = document.querySelector(".task-2");
const documentBody = document.querySelector("body");

//variables
const idButton = document.createElement("button");
idButton.className = "id id-btn";
idButton.innerHTML = "Generate Me";

task1.after(idButton);

const idResult = document.createElement("span");
idResult.id = "result";

idButton.after(idResult);

const makeLessButton = document.createElement("button");
makeLessButton.className = "id less-btn";
makeLessButton.innerHTML = "Make less";

task2.after(makeLessButton);

const makeBiggerButton = document.createElement("button");
makeBiggerButton.className = "id big-btn";
makeBiggerButton.innerHTML = "Make Bigger";

makeLessButton.after(makeBiggerButton);

const fontResult = document.createElement("span");
fontResult.id = "span-result";

makeBiggerButton.after(fontResult);

//functions
function* createIdGenerator() {
  let num = 1;

  while (num) {
    yield num;
    num++;
  }
}

function* newFontGenerator(fontSize) {
  let counter;

  while (true) {
    counter = yield fontSize;

    if (counter === "up") {
      fontSize += 2;
    }

    if (counter === "down") {
      fontSize -= 2;
    }
  }
}

//logic
const idGenerator = createIdGenerator();

idButton.addEventListener("click", () => {
  idResult.style.cssText = `
    margin-left: 2rem;
    border: 2px solid crimson;
    padding: 0.8rem;
    `;
  idResult.textContent = idGenerator.next().value;
});

const fontGenerator = newFontGenerator(FONT_SIZE);

makeLessButton.addEventListener("click", () => {
  fontResult.style.cssText = `
    border: 2px solid crimson;
    padding: 0.8rem;
    `;

  const fontSize = fontGenerator.next("down").value;
  documentBody.style.fontSize = `${fontSize}px`;
  fontResult.textContent = `${fontSize}px`;
});

makeBiggerButton.addEventListener("click", () => {
  fontResult.style.cssText = `
    border: 2px solid crimson;
    padding: 0.8rem;
    `;

  const fontSize = fontGenerator.next("up").value;
  documentBody.style.fontSize = `${fontSize}px`;
  fontResult.textContent = `${fontSize}px`;
});
