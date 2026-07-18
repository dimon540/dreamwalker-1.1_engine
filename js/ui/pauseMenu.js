// =========================================
// DREAMWALKER PAUSE MENU
// =========================================


console.log("Pause Menu завантажено");





function openPauseMenu(){


    console.log("Відкрито меню паузи");



    const popup = document.createElement("div");


    popup.className = "popup-overlay";



    popup.innerHTML = `


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



    `;



    document.body.appendChild(popup);



}







function closePauseMenu(){


    const popup =

    document.querySelector(".popup-overlay");



    if(popup){


        popup.remove();


    }


}
