// =========================
// DREAMWALKER GAME ENGINE
// =========================


console.log("Ігровий рушій завантажено");



// =========================
// GAME STATE
// =========================


window.game = {


    currentScene: null,


    currentStep: 0,


    playing: false,


    paused: false



};



// =========================
// START GAME
// =========================


function startGame(){


    console.log("Гра запускається");


    game.playing = true;


    if(typeof openMainMenu === "function"){


        openMainMenu();


    }
    else{


        console.error(
            "Меню не знайдено"
        );


    }


}




// =========================
// START SCENE
// =========================


function startScene(sceneName){



    console.log(
        "Запуск сцени:",
        sceneName
    );



    if(!window.scenes){


        console.error(
            "Система сцен не завантажена"
        );


        return;


    }



    const scene =
    window.scenes[sceneName];



    if(!scene){


        console.error(
            "Сцена не знайдена:",
            sceneName
        );


        return;


    }



    game.currentScene = scene;


    game.currentStep = 0;



    game.playing = true;



    if(typeof loadScene === "function"){


        loadScene();


    }
    else{


        console.error(
            "Scene Manager не знайдено"
        );


    }



}






// =========================
// NEXT STEP
// =========================


function nextStep(){



    if(!game.currentScene){


        console.error(
            "Немає активної сцени"
        );


        return;


    }



    game.currentStep++;




    if(
        game.currentStep
        <
        game.currentScene.steps.length
    ){


        if(typeof renderStep === "function"){


            renderStep(
                game.currentScene.steps[game.currentStep]
            );


        }



    }

    else{


        endScene();


    }



}






// =========================
// END SCENE
// =========================


function endScene(){



    console.log(
        "Сцена завершена"
    );



    game.playing = false;



    game.currentScene = null;



    game.currentStep = 0;



    if(typeof openChapterMenu === "function"){


        openChapterMenu();


    }



}






// =========================
// PAUSE
// =========================


function pauseGame(){


    game.paused = true;


    console.log(
        "Гру призупинено"
    );


}




function resumeGame(){


    game.paused = false;


    console.log(
        "Гру продовжено"
    );


}
