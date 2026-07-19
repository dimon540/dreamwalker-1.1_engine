// =========================================
// DREAMWALKER ABOUT MENU
// =========================================


console.log("About Menu завантажено");




// =========================================
// OPEN ABOUT MENU
// =========================================


window.openAboutMenu = function(){



    document.getElementById("app").innerHTML = `




    <div class="sub-menu about-screen">





        <div class="background-title">

            DREAMWALKER

        </div>







        <h1 class="sub-title">

            ПРО ГРУ

        </h1>








        <div class="about-panel">







            <h2>

                DREAMWALKER

            </h2>







            <p>

                Атмосферна візуальна новела
                про пошук власного шляху,
                страх перед майбутнім
                та бажання знайти своє місце
                у світі.

            </p>








            <p>

                Одного разу героїні сниться
                незвичайний сон.

                У ньому вона стикається
                з питанням, яке змінить
                її життя.

            </p>







            <h3>

                «Ким ти хочеш стати?»

            </h3>








            <p>

                Відповідь на це питання
                стане першим кроком
                її історії.

            </p>








            <hr>








            <p>

                <b>Жанр</b>

                <br>

                Візуальна новела

            </p>







            <p>

                <b>Версія</b>

                <br>

                Demo 1.1

            </p>







            <p>

                <b>Розробка</b>

                <br>

                DREAMWALKER Studio

            </p>







            <button

            class="back-button"

            onclick="openMainMenu()">

                Назад

            </button>






        </div>






    </div>





    `;



};
