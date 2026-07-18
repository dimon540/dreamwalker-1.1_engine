console.log("historyMenu.js ПРАЦЮЄ");


// =========================================
// DREAMWALKER HISTORY MENU
// =========================================
// =========================================
// DREAMWALKER HISTORY MENU
// =========================================


console.log("History Menu завантажено");





function openHistoryMenu(){



    const history = getHistory();



    const app =
    document.getElementById("app");



    app.innerHTML = `



    <div class="sub-menu history-screen">





        <div class="background-title">

            DREAMWALKER

        </div>







        <h1 class="sub-title">

            ІСТОРІЯ

        </h1>








        <div class="history-panel">





        ${
            
            history.length === 0

            ?

            `

            <div class="empty-history">

                Історія ще порожня

            </div>

            `


            :


            history.map(entry => `


                <div class="history-entry">


                    ${
                    
                    entry.speaker

                    ?

                    `

                    <div class="history-speaker">

                    ${entry.speaker}

                    </div>

                    `

                    :

                    ""

                    }



                    <div class="history-text">

                    ${entry.text}

                    </div>



                </div>



            `).join("")

        }





        </div>








       <button onclick="closeHistoryMenu()">
    Назад
</button>






    </div>



    `;



}
function openHistory(){


    openHistoryMenu();


}
// =========================
// IN GAME HISTORY BUTTON
// =========================

function openHistory(){

    console.log("Відкриття історії під час гри");

    openHistoryMenu();

}

function closeHistoryMenu(){


    const menu = document.querySelector(".sub-menu");


    if(menu){

        menu.remove();

    }



    const popup = document.querySelector(".popup-overlay");


    if(popup){

        popup.remove();

    }



    // якщо гра була запущена — повертаємо її

    if(
        window.SceneManager &&
        SceneManager.currentScene
    ){


        Renderer.renderScene(
            SceneManager.currentScene.steps[
                SceneManager.currentStep
            ]
        );


        return;


    }



    // інакше повертаємо головне меню

    openMainMenu();



}
