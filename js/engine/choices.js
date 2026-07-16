// =========================
// DREAMWALKER CHOICES SYSTEM
// =========================


console.log("Choices система завантажена");



// =========================
// SHOW CHOICES
// =========================


function showChoices(choices){



    const app =
    document.getElementById("app");



    if(!app){

        return;

    }



    const box =
    document.createElement("div");


    box.className =
    "choices-box";



    choices.forEach(choice => {



        const button =
        document.createElement("button");



        button.className =
        "choice-button";



        button.innerHTML =
        choice.text;



        button.onclick = ()=>{


            selectChoice(choice);


        };



        box.appendChild(button);



    });



    app.appendChild(box);



}






// =========================
// SELECT CHOICE
// =========================


function selectChoice(choice){



    console.log(
        "Вибір:",
        choice.text
    );



    // виконання дії

    if(choice.action){


        choice.action();


    }



    // прибираємо кнопки


    const box =
    document.querySelector(
        ".choices-box"
    );



    if(box){


        box.remove();


    }



    nextStep();



}
