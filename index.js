var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

function handleClick() {

    switch (this.innerHTML) {
        case "w":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case "a":
            var kick_bass = new Audio('sounds/kick-bass.mp3')
            kick_bass.play();
            break;
        case "s":
            var tom_1 = new Audio('sounds/tom-1.mp3')
            tom_1.play();
            break;
        case "d":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case "j":
            var tom_2 = new Audio('sounds/tom-2.mp3')
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio('sounds/tom-3.mp3')
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio('sounds/tom-4.mp3')
            tom_4.play();
            break;

        default: console.log(this.innerHTML)
    }
}

// detecting keyboard press

document.addEventListener("keypress", function (event) {
    functionAnimation(event.key)
    switch (event.key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case "a":
            var kick_bass = new Audio('sounds/kick-bass.mp3')
            kick_bass.play();
            break;
        case "s":
            var tom_1 = new Audio('sounds/tom-1.mp3')
            tom_1.play();
            break;
        case "d":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case "j":
            var tom_2 = new Audio('sounds/tom-2.mp3')
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio('sounds/tom-3.mp3')
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio('sounds/tom-4.mp3')
            tom_4.play();
            break;
    }
})


// var audio = new Audio('sounds/snare.mp3')

// audio.play();



// you can write anonymus function too

// anonymous function does'nt have a name to it 

/* f(){
    alert("I got clicked!");
    }

document.querySelector("button").addEventListener("click",f(){
    alert("I got clicked!");
    });


*/