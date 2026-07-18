// =========================================
// DREAMWALKER CHAPTER MENU
// =========================================


console.log("Chapter Menu завантажено");





// =========================================
// OPEN CHAPTER MENU
// =========================================


function openChapterMenu(){



    const app = document.getElementById("app");



    app.innerHTML = `



    <div class="sub-menu chapter-screen">





        <div class="background-title">

            DREAMWALKER

        </div>






        <h1 class="sub-title">

            РОЗДІЛИ

        </h1>







        <div class="chapter-panel">





            <button

            class="chapter unlocked"

            onclick="startScene('scene1')">



                <div class="chapter-name">

                    ✓ ПРОЛОГ

                </div>



                <div class="chapter-description">

                    Незнайоме місто

                </div>



            </button>








            <button

            class="chapter locked">



                <div class="chapter-name">

                    🔒 ГЛАВА 1

                </div>



                <div class="chapter-description">

                    Скоро

                </div>



            </button>








            <button

            class="chapter locked">



                <div class="chapter-name">

                    🔒 ГЛАВА 2

                </div>



                <div class="chapter-description">

                    Скоро

                </div>



            </button>







        </div>







        <button

        class="back-button"

        onclick="openMainMenu()">



            Назад



        </button>







    </div>



    `;



}
