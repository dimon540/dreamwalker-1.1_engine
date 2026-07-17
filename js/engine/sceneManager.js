// =========================================
// DREAMWALKER ENGINE 1.0
// SCENE MANAGER
// =========================================


console.log("Scene Manager завантажено");



window.SceneManager = {


    currentScene:null,

    currentStep:0,




    loadScene(sceneName){


        console.log(
            "Завантаження сцени:",
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




        this.currentScene = scene;


        this.currentStep = 0;



        this.showStep();



    },





    showStep(){


        if(
            !this.currentScene ||
            !this.currentScene.steps
        ){

            console.error(
                "Немає кроків сцени"
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




        Renderer.renderScene(step);



    },





    nextStep(){


        this.currentStep++;


        this.showStep();



    }



};





// глобальна кнопка для HTML

function nextStep(){


    SceneManager.nextStep();


}
