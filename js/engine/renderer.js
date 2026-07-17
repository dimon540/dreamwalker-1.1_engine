// =========================================
// DREAMWALKER ENGINE 1.0
// RENDERER SYSTEM
// =========================================


console.log("Renderer завантажено");





window.Renderer = {





    renderScene(step){



        console.log(
            "Відображення кроку:",
            step
        );




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




    }






};
