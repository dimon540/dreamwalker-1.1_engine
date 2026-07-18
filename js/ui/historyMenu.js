// =========================================
// DREAMWALKER HISTORY MENU
// =========================================


console.log("History Menu завантажено");





window.historyFromGame = false;








function openHistoryMenu(fromGame=false){



    historyFromGame = fromGame;



    const app =

    document.getElementById("app");





    let content = "";





    if(
        History.entries.length === 0
    ){


        content = `


        <div class="empty-history">

            Історія ще порожня


        </div>


        `;


    }

    else{



        History.entries.forEach(entry=>{


            content += `


            <div class="history-entry">


                ${
                entry.speaker
                ?
                `<div class="history-speaker">
                ${entry.speaker}
                </div>`
                :
                ""
                }



                <div class="history-text">

                ${entry.text}

                </div>



            </div>


            `;



        });



    }








    app.innerHTML = `



    <div class="sub-menu">



        <div class="background-title">

            DREAMWALKER

        </div>





        <div class="sub-title">

            Історія

        </div>






        <div class="history-panel">


            ${content}


        </div>






        <button

        class="back-button"

        onclick="closeHistoryMenu()">



            Назад



        </button>




    </div>



    `;



}









function closeHistoryMenu(){



    // якщо історія була відкрита з гри

    if(historyFromGame){



        if(
            window.SceneManager &&
            SceneManager.currentScene
        ){



            Renderer.renderScene(

                SceneManager.currentScene
                .steps[
                    SceneManager.currentStep
                ]

            );



            return;


        }



    }





    // якщо з головного меню

    openMainMenu();



}








// кнопка з гри

function openHistory(){


    openHistoryMenu(true);


}
