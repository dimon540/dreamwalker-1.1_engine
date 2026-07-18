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


window.addToHistory = function(step){



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



    localStorage.setItem(

        "dialogueHistory",

        JSON.stringify(dialogueHistory)

    );



};






// =========================
// GET HISTORY
// =========================


window.getHistory = function(){


    return dialogueHistory;


};






// =========================
// CLEAR HISTORY
// =========================


window.clearHistory = function(){


    dialogueHistory = [];


    localStorage.removeItem(
        "dialogueHistory"
    );


};






// =========================
// SHOW HISTORY DEBUG
// =========================


window.showHistory = function(){



    console.log(

        "Історія діалогів:",

        dialogueHistory

    );



};
