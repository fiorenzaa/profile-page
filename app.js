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

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector("header nav a[href*=' + id + ']").classList.add('active')
      })
    }
  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}