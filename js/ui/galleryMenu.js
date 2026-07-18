// =========================================
// DREAMWALKER GALLERY MENU
// =========================================


console.log("Gallery Menu завантажено");




// =========================================
// OPEN GALLERY
// =========================================


window.openGalleryMenu = function(){



    document.getElementById("app").innerHTML = `



    <div class="sub-menu gallery-screen">



        <div class="background-title">

            DREAMWALKER

        </div>





        <h1 class="sub-title">

            ГАЛЕРЕЯ

        </h1>






        <div class="panel gallery-panel">





            <div class="gallery-grid">





                <div class="gallery-item unlocked">


                    <img src="assets/backgrounds/scene1.jpg">


                    <span>

                    Пролог

                    </span>


                </div>







                <div class="gallery-item unlocked">


                    <img src="assets/backgrounds/scene1_2.jpg">


                    <span>

                    Місто

                    </span>


                </div>







                <div class="gallery-item locked">


                    🔒


                    <span>

                    CG недоступно

                    </span>


                </div>







                <div class="gallery-item locked">


                    🔒


                    <span>

                    Майбутній спогад

                    </span>


                </div>






            </div>





        </div>






        <button

        class="back-button"

        onclick="openMainMenu()">


            Назад


        </button>





    </div>



    `;



};
