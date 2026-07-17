// =========================================
// DREAMWALKER AUDIO SYSTEM
// =========================================


console.log("Audio система завантажена");





// =========================================
// AUDIO FILES
// =========================================


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








// =========================================
// AUDIO STATE
// =========================================


window.audio = {



    music:null,


    ambience:null,


    musicVolume:0.7,


    ambienceVolume:0.25,


    effectsVolume:0.8



};









// =========================================
// MUSIC
// =========================================


function playMusic(file){



    stopMusic();




    if(!file){

        console.error(
            "Музика не знайдена"
        );

        return;

    }






    audio.music =
    new Audio(file);




    audio.music.loop = true;



    audio.music.volume =
    audio.musicVolume;






    audio.music.play()

    .then(()=>{


        console.log(
            "Музика запущена:",
            file
        );


    })


    .catch(error=>{


        console.log(
            "Музика очікує взаємодії:",
            error
        );


    });



}








function stopMusic(){



    if(audio.music){


        audio.music.pause();


        audio.music.currentTime=0;


        audio.music=null;



    }


}











// =========================================
// AMBIENCE
// =========================================


function playAmbience(file){



    stopAmbience();




    if(!file)
    return;






    audio.ambience =
    new Audio(file);




    audio.ambience.loop=true;



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











// =========================================
// EFFECTS
// =========================================


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









// =========================================
// SCENE AUDIO
// =========================================


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
                "Аудіо для сцени немає:",
                sceneName
            );



    }



}









// =========================================
// VOLUME
// =========================================


function setMusicVolume(value){



    audio.musicVolume =
    Number(value);




    if(audio.music){


        audio.music.volume =
        audio.musicVolume;


    }



}








function setAmbienceVolume(value){



    audio.ambienceVolume =
    Number(value);




    if(audio.ambience){


        audio.ambience.volume =
        audio.ambienceVolume;


    }



}








function setEffectsVolume(value){



    audio.effectsVolume =
    Number(value);



}








// =========================================
// GLOBAL EXPORT
// =========================================
// ВАЖЛИВО ДЛЯ AUDIO MANAGER
// =========================================


window.playMusic =
playMusic;


window.stopMusic =
stopMusic;


window.playAmbience =
playAmbience;


window.stopAmbience =
stopAmbience;


window.playEffect =
playEffect;


window.playSceneAudio =
playSceneAudio;


window.setMusicVolume =
setMusicVolume;


window.setAmbienceVolume =
setAmbienceVolume;


window.setEffectsVolume =
setEffectsVolume;
