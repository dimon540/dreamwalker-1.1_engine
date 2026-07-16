// =========================
// DREAMWALKER MAIN MENU
// =========================


console.log("Menu система завантажена");




// =========================
// OPEN MAIN MENU
// =========================


function openMainMenu(){


    const app =
    document.getElementById("app");



    app.innerHTML = `


    <div class="main-menu">


        <div class="game-title">


            DREAMWALKER


        </div>




        <div class="menu-buttons">



            <button onclick="newGame()">

                Нова гра

            </button>



            <button onclick="continueGame()">

                Продовжити

            </button>



            <button onclick="openChapterMenu()">

                Розділи

            </button>



            <button onclick="showHistory()">

                Історія

            </button>



            <button onclick="openGalleryMenu()">

                Галерея

            </button>



            <button onclick="openSettingsMenu()">

                Налаштування

            </button>



            <button onclick="openAboutMenu()">

                Про гру

            </button>



        </div>



    </div>


    `;


}






// =========================
// NEW GAME
// =========================


function newGame(){



    console.log(
        "Нова гра"
    );



    startScene(
        "scene1"
    );


}






// =========================
// CONTINUE
// =========================


function continueGame(){



    if(typeof loadGame === "function"){


        loadGame();


    }
    else{


        console.log(
            "Система завантаження ще не готова"
        );


    }


}
