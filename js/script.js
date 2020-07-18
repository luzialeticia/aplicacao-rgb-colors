/* green.value
adiciona class em algum html classList.add()
var = document.querySelector('#green');
textContent: muda o conteúdo textual do elemento que for selecionado

var div = document.querySelector('div);
div.style.backgroundColor = "aqui vai alguma variável ou função que mude a cor do quadrado"
*/

var input = document.querySelectorAll(".range");
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener("input", function(){
            var red = document.getElementById("red").value,
                green = document.getElementById("green").value,
                blue = document.getElementById("blue").value;
                
            var cores = document.getElementById("colors");
            cores.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
        });
    }