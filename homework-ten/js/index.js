const activeByButton = document.addEventListener("keyup", (el) => {
  playSound(el.keyCode);
  stopSound(el.keyCode);
  choosedItem(el.keyCode);
});

const activeByClick = document.querySelectorAll(".key");
activeByClick.forEach((elem) =>
  elem.addEventListener("click", (elem) => {
    playSound(elem.target.closest(".key").id);
    stopSound(elem.target.closest(".key").id);
    choosedItem(elem.target.closest(".key").id);
  })
);

const playSound = (item) => {
  const audio = document.querySelector(`audio[id = "${item}"]`);
  if (!audio) return;
  audio.play();
};

const stopSound = (item) => {
  const audio = document.querySelector(`audio[id = "${item}"]`);
  if (!audio) return;
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 2000);
};

const choosedItem = (item) => {
  const clickedButton = document.getElementById(item);
  if (clickedButton === null) return;
  clickedButton.classList.add("active");
  setTimeout(() => {
    clickedButton.classList.remove("active");
  }, 100);
};
