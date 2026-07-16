// =========================
// DREAMWALKER VARIABLES SYSTEM
// =========================


console.log("Variables система завантажена");



// =========================
// PLAYER DATA
// =========================


window.player = {


    name: "Героїня",


    // характеристики

    stats: {


        confidence: 0,

        creativity: 0,

        popularity: 0,

        empathy: 0


    }



};





// =========================
// STORY FLAGS
// =========================


window.flags = {



    // приклади майбутніх подій


    metCharacter1: false,


    discoveredSecret: false,


    firstChoiceMade: false



};






// =========================
// RELATIONSHIPS
// =========================


window.relationships = {



    characters: {



        // приклад

        aurora: 0,


        manager: 0



    }



};







// =========================
// INVENTORY
// =========================


window.inventory = [];








// =========================
// SET VARIABLE
// =========================


function setVariable(
    object,
    key,
    value
){


    if(!object){

        return;

    }



    object[key] = value;



}







// =========================
// GET VARIABLE
// =========================


function getVariable(
    object,
    key
){


    if(!object){

        return null;

    }



    return object[key];



}






// =========================
// CHANGE STAT
// =========================


function changeStat(
    stat,
    value
){



    if(
        player.stats[stat]
        !== undefined
    ){



        player.stats[stat] += value;



    }



}





// =========================
// CHECK FLAG
// =========================


function checkFlag(flag){



    return flags[flag] === true;



}
