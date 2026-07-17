// =========================================
// DREAMWALKER ENGINE 1.0
// RENDERER SYSTEM
// DIALOGUE + AUDIO SUPPORT
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
        // TRANSITION SOUND
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





            <!-- BACKGROUND -->

            <div
            class="background"
            style="
            background-image:url('${step.background || ""}');
            ">
            </div>







            <!-- DIALOG -->

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

                </div>







                <button 
                onclick="dialogueNext()">

                    Далі

                </button>







            </div>








            <!-- HUD -->

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






        // =========================
        // START TYPEWRITER
        // =========================


        if(
            window.Dialogue &&
            typeof Dialogue.showText === "function"
        ){


            Dialogue.showText(
                step.text
            );


        }



    }





};







// =========================================
// NEXT BUTTON LOGIC
// =========================================


function dialogueNext(){



    // якщо текст ще друкується
    // перший клік показує весь текст


    if(
        window.Dialogue &&
        Dialogue.skip()
    ){

        return;

    }



    nextStep();



}
