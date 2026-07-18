// =========================
// DREAMWALKER HISTORY SYSTEM
// =========================


console.log("History система завантажена");



// =========================
// HISTORY DATA
// =========================


window.dialogueHistory = 
JSON.parse(
    localStorage.getItem("dialogueHistory")
) || [];




// =========================
// ADD DIALOGUE
// =========================


dialogueHistory.push({

    speaker:
    step.speaker || "",


    text:
    step.text,


    scene:
    game.currentScene || null

});



    if(!step || !step.text){

        return;

    }



    dialogueHistory.push({


        speaker:
        step.speaker || "",


        text:
        step.text,


        scene:
        game.currentScene || null


    });



}






// =========================
// GET HISTORY
// =========================


function getHistory(){


    return dialogueHistory;


}






// =========================
// CLEAR HISTORY
// =========================


function clearHistory(){


    dialogueHistory = [];


}






// =========================
// SHOW HISTORY
// =========================


function showHistory(){



    console.log(
        "Історія діалогів:",
        dialogueHistory
    );



}
