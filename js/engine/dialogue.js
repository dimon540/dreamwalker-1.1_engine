// =========================
// DREAMWALKER DIALOGUE SYSTEM
// =========================


console.log("Dialogue система завантажена");



// =========================
// VARIABLES
// =========================


let dialogueTimer = null;

let isTyping = false;

let currentText = "";

let textPosition = 0;





// =========================
// TYPE TEXT
// =========================


function typeText(text){



    const box =
    document.getElementById(
        "dialogue-text"
    );



    if(!box){

        console.error(
            "Вікно тексту не знайдено"
        );

        return;

    }



    clearInterval(dialogueTimer);



    currentText = text || "";

    textPosition = 0;



    box.innerHTML = "";



    isTyping = true;



    dialogueTimer = setInterval(()=>{


        box.innerHTML +=
        currentText[textPosition];



        textPosition++;



        if(
            textPosition >=
            currentText.length
        ){


            finishTyping();


        }



    },45);



}







// =========================
// FINISH TYPING
// =========================


function finishTyping(){



    clearInterval(
        dialogueTimer
    );



    const box =
    document.getElementById(
        "dialogue-text"
    );



    if(box){


        box.innerHTML =
        currentText;


    }



    isTyping = false;



}






// =========================
// SKIP TYPING
// =========================


function skipTyping(){



    if(isTyping){


        finishTyping();



        return true;


    }



    return false;



}






// =========================
// CLEAR DIALOGUE
// =========================


function clearDialogue(){



    clearInterval(
        dialogueTimer
    );



    const box =
    document.getElementById(
        "dialogue-text"
    );



    if(box){


        box.innerHTML =
        "";


    }



    isTyping = false;



}
