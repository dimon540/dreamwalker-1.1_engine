// =========================
// DREAMWALKER SCENE MANAGER
// =========================


console.log("Scene Manager завантажено");



// =========================
// LOAD SCENE
// =========================


function loadScene(){


    console.log(
        "Завантаження сцени"
    );



    if(!game.currentScene){


        console.error(
            "Немає активної сцени"
        );


        return;


    }



    game.currentStep = 0;



    const step =
    game.currentScene.steps[0];



    if(!step){


        console.error(
            "Сцена не має кроків"
        );


        return;


    }



    renderStep(step);



}






// =========================
// GET CURRENT STEP
// =========================


function getCurrentStep(){



    if(!game.currentScene){


        return null;


    }



    return game.currentScene.steps[
        game.currentStep
    ];



}






// =========================
// CHECK SCENE END
// =========================


function isSceneFinished(){



    if(!game.currentScene){


        return true;


    }



    return (
        game.currentStep >=
        game.currentScene.steps.length
    );


}






// =========================
// CHANGE SCENE
// =========================


function changeScene(sceneName){



    console.log(
        "Перехід до сцени:",
        sceneName
    );



    startScene(sceneName);



}
