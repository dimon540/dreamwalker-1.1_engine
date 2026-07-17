// =========================================
// DREAMWALKER ENGINE 1.0
// RENDERER SYSTEM
// AUDIO SUPPORT
// =========================================


console.log("Renderer завантажено");





window.Renderer = {



    renderScene(step){



        console.log(
            "Відображення кроку:",
            step
        );



        // =========================
        // STEP SOUND
        // =========================


        if(
            step.sound &&
            typeof playAmbienceEffect === "function"
        ){

            playAmbienceEffect(
                step.sound
            );

        }




        // =========================
        // TRANSITION
        // =========================


        if(
            step.transition &&
            typeof playEffect === "function"
        ){

            playEffect(
                step.transition
            );

        }





        const app =
        document.getElementById("app");





        app.innerHTML = `



        <div class="game-screen">





            <div 
            class="background"
            style="
            background-image:url('${step.background || ""}');
            ">
            </div>







            <div class="dialogue-box">





                ${
                    step.name
                    ?

                    `
                    <div class="speaker">
                    Єва
                    </div>
                    `

                    :

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








                <div class="text">

                    ${step.text || ""}

                </div>







                <button 
                onclick="nextStep()">

                    Далі

                </button>







            </div>







            <div class="game-hud">



                <button onclick="openHistory()">

                    Історія

                </button>



                <button onclick="toggleAuto()">

                    Авто

                </button>



                <button onclick="openPauseMenu()">

                    Меню

                </button>



            </div>






        </div>



        `;




    }






};
