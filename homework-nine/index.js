const rectangles = document.querySelectorAll(".rectangle");
const rectanglesGroup = document.querySelector(".rectangles-group");

function getRandomBackgroundColor() {
    const RED_COLOR = Math.floor(Math.random() * (255 - 0) + 0);
    const GREEN_COLOR = Math.floor(Math.random() * (255 - 0) + 0);
    const BLUE_COLOR = Math.floor(Math.random() * (255 - 0) + 0);
    const bgColor = "rgb(" + RED_COLOR + "," + GREEN_COLOR + "," + BLUE_COLOR + ")";

    return bgColor;
}

const setRectanglesRandomBackgroundColor = () => {
    rectangles.forEach(el => el.style.backgroundColor = getRandomBackgroundColor());
};

setRectanglesRandomBackgroundColor()


const callButton = document.querySelector('.call-button');
callButton.addEventListener('click', function() {
    rectanglesGroup.style.cssText = `
    display: grid;
    grid-template-columns: repeat(5, 50px);
    justify-content: center;
    `;
});

const mixButton = document.querySelector('.mix-button');
mixButton.addEventListener('click', function() {
    rectangles.forEach(el => el.style.backgroundColor = getRandomBackgroundColor());
});