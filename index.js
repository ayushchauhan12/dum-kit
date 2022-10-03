var numberOfDrumButton = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButton; i++){

document.querySelectorAll("button")[i].addEventListener("click", function handleClick(){
      var buttonName= this.innerHTML;
      soundPlay(buttonName);
      buttonAnimation(buttonName);
}   
);
}

var Dil = "JAI MAHAKLALLLLLLLLL";
document.addEventListener("keypress", function(event){
    soundPlay(event.key);
    buttonAnimation(event.key);
});


function soundPlay(event){
    // var buttonName= event.key;
    switch (event) {
        case 'w':
            var audio= new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio= new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio= new Audio('sounds/snare.mp3');
            audio.play();
            break;
         case 'd':
            var audio= new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio= new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
         case 'k':
            var audio= new Audio('sounds/tom-3.mp3');
            audio.play();
            break;  
        case 'l':
            var audio= new Audio('sounds/tom-4.mp3');
            audio.play();
            break;              
        default:

            break;
    }
}



function buttonAnimation(eventName){
    document.querySelector("." + eventName).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + eventName).classList.remove("pressed"); 
    },100);
}


// var audio= new Audio('sounds/tom-1.mp3');
// audio.play();
//         }
