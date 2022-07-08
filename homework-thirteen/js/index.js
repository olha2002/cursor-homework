// selectors
const FONT_SIZE = 14;
const task1 = document.querySelector(".task-1");

//variables
const idButton = document.createElement("button");
idButton.className = "id";
idButton.innerHTML = "Generate Me";

task1.after(idButton);

const idResult = document.createElement("span");
idResult.id = "result";

idButton.after(idResult);

//functions
function* createIdGenerator() {
  let num = 1;

  while (num) {
    yield num;
    num++;
  }
}

function* newFontGenerator(FONT_SIZE) {}

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
