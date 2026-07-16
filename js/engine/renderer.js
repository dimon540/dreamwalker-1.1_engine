// =========================
// DREAMWALKER RENDERER
// =========================


console.log("Renderer завантажено");



// =========================
// RENDER STEP
// =========================


function renderStep(step){


    console.log(
        "Відображення кроку:",
        step
    );



    const app =
    document.getElementById("app");



    if(!app){


        console.error(
            "Елемент app не знайдено"
        );


        return;


    }



    app.innerHTML = `


    <div class="game-screen">


        <div 
        class="background"
        id="game-background">
        </div>



        <div class="dialogue-box">



            ${
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



            <div 
            class="dialogue-text"
            id="dialogue-text">
            </div>



        </div>



        <button 
        class="game-button"
        onclick="nextStep()">

            Далі

        </button>



    </div>



    `;



    updateBackground(step);


    if(typeof typeText === "function"){


        typeText(
            step.text
        );


    }
    else{


        document
        .getElementById("dialogue-text")
        .innerHTML = step.text;


    }


}






// =========================
// BACKGROUND
// =========================


function updateBackground(step){



    const bg =
    document.getElementById(
        "game-background"
    );



    if(!bg){

        return;

    }



    if(step.background){


        bg.style.backgroundImage =
        `url("${step.background}")`;


    }



}
