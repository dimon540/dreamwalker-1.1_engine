// =========================================
// DREAMWALKER DIALOGUE SYSTEM
// TYPEWRITER ENGINE
// =========================================


console.log("Dialogue система завантажена");





window.Dialogue = {



    typing:false,


    timer:null,


    currentText:"",





    // =========================
    // START TEXT
    // =========================


    showText(text){


        this.currentText = text || "";


        this.typing = true;



        const box =
        document.querySelector(".text");



        if(!box)
        return;



        box.innerHTML = "";



        let index = 0;



        clearInterval(
            this.timer
        );



        this.timer =
        setInterval(()=>{



            box.innerHTML +=
            this.currentText[index];



            index++;




            if(index >= this.currentText.length){



                clearInterval(
                    this.timer
                );


                this.typing=false;



            }



        },40);



    },







    // =========================
    // SKIP TEXT
    // =========================


    skip(){



        if(!this.typing)
        return false;




        clearInterval(
            this.timer
        );



        const box =
        document.querySelector(".text");



        if(box){


            box.innerHTML =
            this.currentText;


        }



        this.typing=false;



        return true;



    }



};






// =========================
// GLOBAL FUNCTION
// =========================


function showDialogue(text){


    addToHistory({

        text:text,

        speaker:""

    });



    Dialogue.showText(
        text
    );


}
// =========================
// AUTO MODE
// =========================


window.autoMode = false;



function toggleAuto(){


    autoMode = !autoMode;



    console.log(

        "Авто режим:",

        autoMode

    );


}
