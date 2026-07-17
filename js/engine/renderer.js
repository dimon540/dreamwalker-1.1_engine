// =========================================
// DREAMWALKER ENGINE
// RENDERER SYSTEM
// CAMERA + AUDIO + TYPEWRITER
// =========================================


console.log("Renderer завантажено");





let typingTimer = null;

let currentText = "";






window.Renderer = {



renderScene(step){



console.log(
"Відображення кроку:",
step
);





// =========================
// AUDIO
// =========================


if(
step.sound &&
typeof playAmbienceEffect === "function"
){

playAmbienceEffect(
step.sound
);

}





if(
step.transition &&
typeof playEffect === "function"
){

playEffect(
step.transition
);

}





// =========================
// HTML
// =========================


const app =
document.getElementById("app");





app.innerHTML = `



<div class="game-screen">





<div 
class="background"
style="
background-image:url('${step.background || ""}');
">
</div>







<div class="dialogue-box">





${
step.name

?

`
<div class="speaker">
Єва
</div>
`

:

step.speaker

?

`
<div class="speaker">
${step.speaker}
</div>
`

:

""

}







<div class="text" id="dialogueText">

</div>






<button onclick="dialogueNext()">

Далі

</button>






</div>








<div class="game-hud">


<button onclick="openHistory()">

Історія

</button>


<button onclick="toggleAuto()">

Авто

</button>


<button onclick="openPauseMenu()">

Меню

</button>


</div>







</div>



`;








// =========================
// CAMERA
// =========================


if(
window.Camera
){

Camera.apply(
step.camera
);


}






// =========================
// TEXT
// =========================


startTyping(
step.text || ""
);






}





};









// =========================================
// TYPEWRITER
// =========================================


function startTyping(text){



clearInterval(
typingTimer
);



currentText=text;



let index=0;



const box =
document.getElementById(
"dialogueText"
);



if(!box)
return;



box.innerHTML="";



typingTimer =
setInterval(()=>{


box.innerHTML +=
text[index];


index++;




if(index >= text.length){


clearInterval(
typingTimer
);


}


},35);



}









function skipTyping(){



clearInterval(
typingTimer
);



const box =
document.getElementById(
"dialogueText"
);



if(box){


box.innerHTML =
currentText;


}



}









function dialogueNext(){



const box =
document.getElementById(
"dialogueText"
);



if(
box &&
box.innerHTML.length <
currentText.length
){


skipTyping();


return;


}



nextStep();



}
