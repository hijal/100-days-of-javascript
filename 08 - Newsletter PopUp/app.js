const button = document.getElementById('sub-btn');
const close = document.getElementById('close-btn');
const newsletter = document.getElementById("newsletter");

button.addEventListener('click', function (e) {
  e.preventDefault();
  newsletter.classList.add("active");
  this.style.display = "none";
});

close.addEventListener('click', function (e) {
    e.preventDefault();
    newsletter.classList.remove("active");
    button.style.display = "inline-block";
})