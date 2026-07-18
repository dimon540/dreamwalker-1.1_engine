// =========================================
// DREAMWALKER PAUSE MENU
// =========================================


console.log("Pause Menu завантажено");





function openPauseMenu(){


    const app = document.getElementById("app");


    app.innerHTML += `


    <div class="popup-overlay">


        <div class="popup-window">


            <h2>
                МЕНЮ
            </h2>



            <button 
            class="back-button"
            onclick="closePauseMenu()">

                Повернутися

            </button>



            <button 
            class="back-button"
            onclick="openMainMenu()">

                Головне меню

            </button>



        </div>


    </div>


    `;


}






function closePauseMenu(){


    const popup =

    document.querySelector(".popup-overlay");


    if(popup){

        popup.remove();

    }


}
