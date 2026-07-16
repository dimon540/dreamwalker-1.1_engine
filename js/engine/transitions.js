// =========================
// DREAMWALKER TRANSITIONS
// =========================


console.log("Transitions система завантажена");



// =========================
// FADE OUT
// =========================


function fadeOut(duration = 500){


    return new Promise(resolve => {



        const overlay =
        document.createElement("div");



        overlay.id = "transition-overlay";



        overlay.style.position = "fixed";

        overlay.style.left = "0";

        overlay.style.top = "0";

        overlay.style.width = "100%";

        overlay.style.height = "100%";

        overlay.style.background = "black";

        overlay.style.opacity = "0";

        overlay.style.transition =
        `opacity ${duration}ms ease`;

        overlay.style.zIndex = "9999";



        document.body.appendChild(
            overlay
        );



        setTimeout(()=>{


            overlay.style.opacity = "1";


        },10);



        setTimeout(()=>{


            resolve();



        },duration);



    });



}





// =========================
// FADE IN
// =========================


function fadeIn(duration = 500){


    return new Promise(resolve => {



        const overlay =
        document.getElementById(
            "transition-overlay"
        );



        if(!overlay){


            resolve();

            return;


        }



        overlay.style.opacity = "0";



        setTimeout(()=>{


            overlay.remove();


            resolve();



        },duration);



    });



}







// =========================
// CHANGE SCENE TRANSITION
// =========================


async function sceneTransition(callback){



    await fadeOut();



    if(typeof callback === "function"){


        callback();


    }



    await fadeIn();



}






// =========================
// SCREEN SHAKE
// =========================


function shakeScreen(){



    const app =
    document.getElementById("app");



    if(!app){

        return;

    }



    app.classList.add(
        "shake"
    );



    setTimeout(()=>{


        app.classList.remove(
            "shake"
        );


    },500);



}






// =========================
// FLASH EFFECT
// =========================


function flashScreen(){



    const flash =
    document.createElement("div");



    flash.style.position = "fixed";

    flash.style.left = "0";

    flash.style.top = "0";

    flash.style.width = "100%";

    flash.style.height = "100%";

    flash.style.background = "white";

    flash.style.opacity = "1";

    flash.style.zIndex = "10000";

    flash.style.transition =
    "opacity 300ms ease";



    document.body.appendChild(
        flash
    );



    setTimeout(()=>{


        flash.style.opacity = "0";


    },50);



    setTimeout(()=>{


        flash.remove();


    },400);



}
