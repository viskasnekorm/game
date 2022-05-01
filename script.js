const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let counter = 0;

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (dino.classList != "jump") {
        dino.classList.add("jump") 
        if ( cactusleft <= 120 && dinoTop >= 140) {
            counter = counter + 1;
        }
        console.log(counter)
        console.log(cactusleft)
        console.log(dinoTop)
    }
    setTimeout( function() {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusleft < 50 && cactusleft > 0 && dinoTop >= 140) {
       alert("GAME OVER! Your score: " + counter);
       counter = 0;
    }
      
}, 10)