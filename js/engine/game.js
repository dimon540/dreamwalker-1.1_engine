// =========================
// DREAMWALKER GAME ENGINE 1.0
// GAME CORE
// =========================


console.log("Ігровий рушій завантажено");




// =========================
// GAME STATE
// =========================


window.game = {


    currentScene:null,


    currentStep:0,


    playing:false,


    paused:false


};







// =========================
// START GAME
// =========================


function startGame(){


    console.log(
        "Гра запускається"
    );


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






    game.currentScene =
    window.scenes[sceneName];





    if(!game.currentScene){


        console.error(
            "Сцена не знайдена:",
            sceneName
        );


        return;


    }







    game.currentStep = 0;


    game.playing = true;







    // передаємо сцену менеджеру


    if(window.SceneManager){


        SceneManager.loadScene(
            sceneName
        );


    }

    else{


        console.error(
            "SceneManager не знайдено"
        );


    }



}









// =========================
// NEXT STEP
// =========================


function nextStep(){



    if(window.SceneManager){


        SceneManager.nextStep();


    }

    else{


        console.error(
            "SceneManager не знайдено"
        );


    }



}









// =========================
// END SCENE
// =========================


function endScene(){



    console.log(
        "Сцена завершена"
    );



    game.playing=false;


    game.currentScene=null;


    game.currentStep=0;





    if(typeof openChapterMenu==="function"){


        openChapterMenu();


    }



}








// =========================
// PAUSE
// =========================


function pauseGame(){


    game.paused=true;


    console.log(
        "Гру призупинено"
    );


}






function resumeGame(){


    game.paused=false;


    console.log(
        "Гру продовжено"
    );


}
window.startGame = startGame;
window.startScene = startScene;
window.nextStep = nextStep;
window.endScene = endScene;
