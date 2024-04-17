// Add JavaScript below
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


const click = document.getElementById('click');

click.addEventListener("click", (event) => {
    myFunction();
})





