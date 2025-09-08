const texts = [
  "Fresh Graduate",
  "Junior Web Developer",
];

let count = 0;
let span = document.getElementById("job-title");

function changeText() {
  span.textContent = texts[count];
  count = (count + 1) % texts.length;
}

setInterval(changeText, 2000); 