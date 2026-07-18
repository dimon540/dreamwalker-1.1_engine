// =========================================
// DREAMWALKER HISTORY SYSTEM
// =========================================


console.log("History система завантажена");





window.History = {


    entries: [],




    add(entry){


        if(!entry || !entry.text){

            return;

        }




        const last =

        this.entries[
            this.entries.length - 1
        ];




        // захист від дублювання

        if(
            last &&
            last.text === entry.text
        ){

            return;

        }





        this.entries.push(entry);




        localStorage.setItem(

            "dreamwalkerHistory",

            JSON.stringify(
                this.entries
            )

        );



    },








    load(){


        const saved =

        localStorage.getItem(
            "dreamwalkerHistory"
        );




        if(saved){


            this.entries =

            JSON.parse(saved);


        }



    },







    clear(){


        this.entries = [];


        localStorage.removeItem(
            "dreamwalkerHistory"
        );


    }




};






History.load();








function addToHistory(text, speaker=""){



    History.add({

        text:text,

        speaker:speaker

    });



}
