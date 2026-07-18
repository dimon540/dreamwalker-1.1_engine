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








        <button

        class="back-button"

        onclick="openMainMenu()">



            Назад



        </button>







    </div>



    `;



}
