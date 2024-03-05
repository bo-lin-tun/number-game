const input = document.getElementsByClassName("input")[0];

const chackButton = document.getElementsByClassName("button")[0];
const start = document.getElementsByClassName("start")[0];
const body = document.getElementsByClassName("modal-body")[0];
const dialogBox = document.getElementsByClassName("modal")[0];
const answer = document.getElementsByClassName("answer")[0];

const numberArray = [
  "267",
  "6419",
  "10438",
  "739251",
  "1847219",
  "6913025",
  "183679241",
  "472916329",
  "2872915747",
  "451845382623",
  "34589210361892",
];

let level = 0;

const closeFunction = () => {
  $("#exampleModal").modal("hide");
};
const myFunction = () => {
  const arrayNunmber = numberArray[level];

  body.innerHTML = "";
  chackButton.style.display = "block";

  start.style.display = "none";
  const bodyText = document.createElement("h1");
  const levelText = document.createElement("h3");
  levelText.append("Level  ");
  levelText.append(level);

  bodyText.append(arrayNunmber);
  body.append(bodyText);
  body.append(levelText);
  setTimeout(closeFunction, 4000);
};

const chackFunction = () => {
  answer.innerHTML = "";
  const inputValue = input.value;

  if (inputValue === numberArray[level]) {
    answer.style.color = "black";
    start.style.display = "block";
    chackButton.style.display = "none";
    answer.append(
      `Good Answer  Level ${level + 1} ကို ဆက်တက်ဖို့   START ကိုနိတ်ပါ။`
    );
    level += 1;
    if (level == numberArray.length) {
      level = 0;

      answer.append(`!Very Good . Your level is ${level}`);
    }
  } else if (input != numberArray[level]) {
    chackButton.style.display = "none";
    start.style.display = "block";
    answer.style.color = "red";
    answer.append(`နောက် တစ်ခေါက် ကြိုးစားပါ။ Your level is ${level}`);
    level = 0;
  }

  input.value = "";
};

start.addEventListener("click", myFunction);
chackButton.addEventListener("click", chackFunction);
