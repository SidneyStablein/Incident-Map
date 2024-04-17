// Add JavaScript below
function clickOmatic() {
    alert('Hello!')
}

const click = document.getElementById('click');

click.addEventListener("click", (event) => {
    clickOmatic();
})

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }