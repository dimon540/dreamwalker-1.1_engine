// =========================
// DREAMWALKER MAIN MENU
// =========================


console.log("Menu система завантажена");




// =========================
// MENU MUSIC
// =========================


let menuMusicStarted = false;



function startMenuAudio(){


    if(menuMusicStarted){

        return;

    }



    menuMusicStarted = true;



    if(window.AudioManager){

        AudioManager.playMenu();

    }


}







// =========================
// OPEN MAIN MENU
// =========================


function openMainMenu(){



    const app = document.getElementById("app");



    app.innerHTML = `



    <div class="main-menu">





        <div class="game-title">

            DREAMWALKER

        </div>





        <div class="background-title">

            DREAMWALKER

        </div>







        <div class="menu-buttons">





            <button onclick="startMenuAudio(); newGame();">

                Нова гра

            </button>







            <button onclick="startMenuAudio(); continueGame();">

                Продовжити

            </button>







            <button onclick="startMenuAudio(); openChapterMenu();">

                Розділи

            </button>







            <button onclick="openHistoryMenu();">

                Історія

            </button>







            <button onclick="startMenuAudio(); openGalleryMenu();">

                Галерея

            </button>







            <button onclick="startMenuAudio(); openSettingsMenu();">

                Налаштування

            </button>







            <button onclick="startMenuAudio(); openAboutMenu();">

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



    startScene("scene1");



}









// =========================
// CONTINUE GAME
// =========================


function continueGame(){

    console.log("CONTINUE BUTTON WORKS");

    showNoSaveMessage();

}








// =========================
// NO SAVE POPUP
// =========================


function showNoSaveMessage(){


    console.log("Відкриття повідомлення про сейви");



    const popup = document.createElement("div");


    popup.className = "popup-overlay";



    popup.innerHTML = `


        <div class="popup-window">


            <h2>
                ЗБЕРЕЖЕНЬ НЕМАЄ
            </h2>



            <p>
                Продовження гри стане доступним
                після створення першого збереження.
            </p>



            <button 
            class="back-button"
            onclick="closePopup()">

                Добре

            </button>


        </div>


    `;



    document.body.appendChild(popup);



}








// =========================
// CLOSE POPUP
// =========================


function closePopup(){



    const popup =

    document.querySelector(".popup-overlay");



    if(popup){


        popup.remove();


    }



}
