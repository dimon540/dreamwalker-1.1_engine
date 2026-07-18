// =========================================
// DREAMWALKER HISTORY SYSTEM
// =========================================


console.log("History система завантажена");




// =========================================
// LOAD HISTORY
// =========================================


window.dialogueHistory = JSON.parse(

    localStorage.getItem("dialogueHistory")

) || [];




// =========================================
// ADD HISTORY ENTRY
// =========================================


window.addToHistory = function(step){


    if(!step || !step.text){

        return;

    }



    // якщо тип не заданий
    // вважаємо думкою

    let type =
    step.type || "thought";





    dialogueHistory.push({


        type:type,


        speaker:
        step.speaker || "",



        text:
        step.text,



        scene:

        SceneManager.currentScene || null



    });






    localStorage.setItem(

        "dialogueHistory",

        JSON.stringify(dialogueHistory)

    );



};






// =========================================
// GET HISTORY
// =========================================


window.getHistory = function(){


    return dialogueHistory;


};






// =========================================
// CLEAR HISTORY
// =========================================


window.clearHistory = function(){


    dialogueHistory = [];


    localStorage.removeItem(

        "dialogueHistory"

    );


};






// =========================================
// DEBUG
// =========================================


window.showHistory = function(){


    console.log(

        "Історія:",

        dialogueHistory

    );


};
