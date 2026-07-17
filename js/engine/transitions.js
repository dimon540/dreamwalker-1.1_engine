// =========================================
// DREAMWALKER TRANSITIONS SYSTEM
// =========================================


console.log("Transitions система завантажена");





window.Transitions = {





    // =========================
    // FADE IN
    // =========================


    fadeIn(duration = 800){



        const overlay =
        document.createElement("div");



        overlay.className =
        "transition-overlay";



        overlay.style.opacity =
        "1";



        document.body.appendChild(
            overlay
        );



        setTimeout(()=>{



            overlay.style.opacity =
            "0";



        },50);




        setTimeout(()=>{


            overlay.remove();


        },duration+100);



    },








    // =========================
    // FADE OUT
    // =========================


    fadeOut(duration = 800){



        return new Promise(resolve=>{



            const overlay =
            document.createElement("div");



            overlay.className =
            "transition-overlay";



            overlay.style.opacity =
            "0";



            document.body.appendChild(
                overlay
            );




            setTimeout(()=>{


                overlay.style.opacity =
                "1";



            },50);





            setTimeout(()=>{


                resolve();



            },duration);



        });



    }





};







// =========================================
// GLOBAL
// =========================================


function fadeIn(){

    Transitions.fadeIn();

}



function fadeOut(){

    return Transitions.fadeOut();

}
