// =========================================
// DREAMWALKER CAMERA SYSTEM
// =========================================


console.log("Camera система завантажена");





window.Camera = {




    apply(type){



        const background =
        document.querySelector(
            ".background"
        );



        if(!background)
        return;




        // скидання


        background.classList.remove(
            "camera-close",
            "camera-far",
            "camera-shake"
        );





        switch(type){



            case "close":


                background.classList.add(
                    "camera-close"
                );


                break;





            case "far":


                background.classList.add(
                    "camera-far"
                );


                break;





            case "shake":


                background.classList.add(
                    "camera-shake"
                );


                break;



            default:


                break;


        }



    }



};






console.log(
"Camera готова"
);
