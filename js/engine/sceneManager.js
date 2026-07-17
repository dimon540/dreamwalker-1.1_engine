// =========================================
// DREAMWALKER ENGINE 1.0
// SCENE MANAGER
// =========================================


console.log("Scene Manager завантажено");



window.SceneManager = {


    // поточна сцена

    currentScene: null,


    // номер поточного кроку

    currentStep: 0,





    // =========================
    // LOAD SCENE
    // =========================


    loadScene(sceneName){


        console.log(
            "Завантаження сцени:",
            sceneName
        );



        // перевірка системи сцен

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






        this.currentScene = scene;
if(window.AudioManager){

    AudioManager.playScene(scene);

}

        this.currentStep = 0;





        this.showStep();



    },








    // =========================
    // SHOW STEP
    // =========================


    showStep(){



        if(!this.currentScene){


            console.error(
                "Немає активної сцени"
            );


            return;


        }






        const step =

        this.currentScene.steps[this.currentStep];







        if(!step){


            console.log(
                "Сцена завершена"
            );


            return;


        }







        console.log(
            "Показ кроку:",
            this.currentStep
        );







        if(window.Renderer){


            Renderer.renderScene(step);


        }

        else{


            console.error(
                "Renderer не знайдено"
            );


        }



    },









    // =========================
    // NEXT STEP
    // =========================


    nextStep(){



        this.currentStep++;




        this.showStep();



    }






};







// =========================
// GLOBAL BUTTON
// =========================


function nextStep(){


    SceneManager.nextStep();


}
