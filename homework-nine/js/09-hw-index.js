const rectanglesGroup = document.createElement("div");
rectanglesGroup.className = "rectangles-group";

const header = document.getElementById("main");
header.after(rectanglesGroup);

for (let i = 0; i < 25; i++) {
  rectanglesGroup.insertAdjacentHTML(
    "afterbegin",
    '<div class="rectangle"></div>'
  );
}

const rectangles = document.querySelectorAll(".rectangle");

function getRandomBackgroundColor() {
  const RED_COLOR = Math.floor(Math.random() * 256);
  const GREEN_COLOR = Math.floor(Math.random() * 256);
  const BLUE_COLOR = Math.floor(Math.random() * 256);
  const bgColor =
    "rgb(" + RED_COLOR + "," + GREEN_COLOR + "," + BLUE_COLOR + ")";

  return bgColor;
}

const setRectanglesRandomBackgroundColor = () => {
  rectangles.forEach(
    (el) => (el.style.backgroundColor = getRandomBackgroundColor())
  );
};

setRectanglesRandomBackgroundColor();

const callButton = document.querySelector(".call-button");
const mixButton = document.querySelector(".mix-button");

callButton.addEventListener("click", function () {
  rectanglesGroup.style.cssText = `
    display: grid;
    grid-template-columns: repeat(5, 50px);
    justify-content: center;
    `;
  mixButton.hidden = false;
});

mixButton.addEventListener("click", function () {
  setInterval(() => {
    rectangles.forEach(
      (el) => (el.style.backgroundColor = getRandomBackgroundColor())
    );
  }, "1000");
});
