const submitBtn = document.getElementById("submitBtn");
const input = document.getElementById("input");
const display = document.querySelector(".display");

function submit() {
  const word = input.value.trim();
  if (word === "") {
    return;
  }

  if (word.toUpperCase() === word.split("").reverse().join("").toUpperCase()) {
    display.innerText = `${word} is a palindrome!`;
  } else {
    display.innerText = `${word} is not a palindrome!`;
  }
}

submitBtn.addEventListener("click", submit());
