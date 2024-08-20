var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var textInside = this.textContent;
        makeSound(textInside);

        makeAnimation(textInside);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);

    makeAnimation(event.key);
})

function makeSound(keyPressed){
    if(keyPressed==="w"){
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    } else if(keyPressed==="a"){
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
    } else if(keyPressed==="s"){
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
    } else if(keyPressed==="d"){
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
    } else if(keyPressed==="j"){
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
    } else if(keyPressed==="k"){
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
    } else if(keyPressed==="l"){
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
    } else{
        console.log(keyPressed);
    }
}

function makeAnimation(keyPressed){

    var activeButton = document.querySelector("." + keyPressed);

    activeButton.classList.add("pressed"); 

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 500);

}