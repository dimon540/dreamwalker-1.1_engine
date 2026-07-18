// =========================================
// DREAMWALKER GALLERY MENU
// LOCKED VERSION
// =========================================


console.log("Gallery Menu завантажено");





window.openGalleryMenu = function(){



document.getElementById("app").innerHTML = `



<div class="sub-menu gallery-screen">



    <div class="background-title">

        DREAMWALKER

    </div>





    <h1 class="sub-title">

        ГАЛЕРЕЯ

    </h1>






    <div class="panel gallery-panel locked-gallery">





        <div class="gallery-lock-icon">

            🔒

        </div>





        <h2>

            Галерея закрита

        </h2>





        <p>

            Цей розділ буде доступний

            у повній версії DREAMWALKER

        </p>





    </div>







    <button

    class="back-button"

    onclick="openMainMenu()">


        Назад


    </button>





</div>



`;



};
