// =========================
// DREAMWALKER AUDIO SYSTEM
// MULTI CHANNEL VERSION
// =========================


console.log("Audio система завантажена");




// =========================
// AUDIO FILES
// =========================


window.audioFiles = {


    music:{


        menu:
        "assets/music/menu_theme.mp3",


        prologue:
        "assets/music/prologue_city.mp3",


        mystery:
        "assets/music/mystery.mp3",


        emotional:
        "assets/music/emotional_piano.mp3",


        dark:
        "assets/music/dark_future.mp3"


    },




    ambience:{


        city:
        "assets/sounds/ambience/city.mp3",


        crowd:
        "assets/sounds/ambience/crowd.mp3",


        wind:
        "assets/sounds/ambience/wind.mp3"


    },




    effects:{


        click:
        "assets/sounds/ui/button_click.mp3",


        transition:
        "assets/sounds/effects/transition.mp3"


    }



};








// =========================
// AUDIO STATE
// =========================


window.audio = {


    music:null,


    ambience:null,


    musicVolume:0.7,


    ambienceVolume:0.35,


    effectsVolume:0.8



};









// =========================
// MUSIC CHANNEL
// =========================


function playMusic(file){



    if(!file)
    return;



    stopMusic();




    audio.music =
    new Audio(file);



    audio.music.loop = true;


    audio.music.volume =
    audio.musicVolume;



    audio.music.play()

    .then(()=>{


        console.log(
            "Музика:",
            file
        );


    })


    .catch(()=>{


        console.log(
            "Музика очікує взаємодії"
        );


    });



}







function stopMusic(){



    if(audio.music){


        audio.music.pause();


        audio.music.currentTime = 0;


        audio.music = null;


    }



}









// =========================
// AMBIENCE CHANNEL
// =========================


function playAmbience(file){



    if(!file)
    return;



    stopAmbience();




    audio.ambience =
    new Audio(file);



    audio.ambience.loop = true;


    audio.ambience.volume =
    audio.ambienceVolume;




    audio.ambience.play()

    .then(()=>{


        console.log(
            "Атмосфера:",
            file
        );


    })


    .catch(()=>{});



}







function stopAmbience(){



    if(audio.ambience){



        audio.ambience.pause();


        audio.ambience.currentTime=0;


        audio.ambience=null;



    }



}









// =========================
// SHORT SOUNDS
// =========================


function playEffect(file){



    if(!file)
    return;




    const sound =
    new Audio(file);



    sound.volume =
    audio.effectsVolume;



    sound.play()

    .catch(()=>{});



}









// =========================
// TEMPORARY AMBIENCE FX
// =========================
// crowd, wind etc.
// не выключают city.mp3


function playAmbienceEffect(file){



    if(!file)
    return;



    const sound =
    new Audio(file);



    sound.volume =
    audio.effectsVolume * 0.7;



    sound.play()

    .catch(()=>{});



}









// =========================
// MENU
// =========================


function playMenuAudio(){


    playMusic(
        audioFiles.music.menu
    );


}









// =========================
// SCENE AUDIO
// =========================


function playSceneAudio(sceneName){



    stopMusic();


    stopAmbience();




    switch(sceneName){



        case "scene1":



            playMusic(
                audioFiles.music.prologue
            );



            playAmbience(
                audioFiles.ambience.city
            );



            break;






        case "scene2":



            playMusic(
                audioFiles.music.mystery
            );



            playAmbience(
                audioFiles.ambience.wind
            );



            break;






        default:


            console.log(
                "Аудіо сцени не знайдено:",
                sceneName
            );


    }



}









// =========================
// VOLUME
// =========================


function setMusicVolume(value){



    audio.musicVolume =
    value;



    if(audio.music)
    audio.music.volume=value;



}






function setAmbienceVolume(value){



    audio.ambienceVolume =
    value;



    if(audio.ambience)
    audio.ambience.volume=value;



}






function setEffectsVolume(value){



    audio.effectsVolume =
    value;



}
