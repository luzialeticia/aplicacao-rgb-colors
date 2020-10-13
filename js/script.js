let input = document.querySelectorAll(".range");

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function(){
        const red = document.getElementById("red").value,
              green = document.getElementById("green").value,
              blue = document.getElementById("blue").value;
                
        const cores = document.getElementById("colors");
        cores.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    });
}

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function() {
        document.querySelector('#redText').value = red.value;
        document.querySelector('#greenText').value = green.value;
        document.querySelector('#blueText').value = blue.value;
    });
}