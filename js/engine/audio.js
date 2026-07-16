// =========================
// DREAMWALKER AUDIO SYSTEM
// =========================


console.log("Audio система завантажена");



// =========================
// AUDIO OBJECTS
// =========================


window.audio = {


    music: null,


    ambience: null,


    effects: null,


    volumes:{


        music:0.7,


        ambience:0.3,


        effects:0.8


    }



};





// =========================
// PLAY MUSIC
// =========================


function playMusic(file){



    stopMusic();



    audio.music =
    new Audio(file);



    audio.music.loop = true;


    audio.music.volume =
    audio.volumes.music;



    audio.music.play()

    .then(()=>{


        console.log(
            "Музика запущена:",
            file
        );


    })


    .catch(error=>{


        console.log(
            "Автозапуск музики заблокований",
            error
        );


    });



}






// =========================
// STOP MUSIC
// =========================


function stopMusic(){



    if(audio.music){


        audio.music.pause();


        audio.music.currentTime = 0;


        audio.music = null;


    }



}







// =========================
// PLAY AMBIENCE
// =========================


function playAmbience(file){



    stopAmbience();



    audio.ambience =
    new Audio(file);



    audio.ambience.loop = true;


    audio.ambience.volume =
    audio.volumes.ambience;



    audio.ambience.play()

    .then(()=>{


        console.log(
            "Атмосфера запущена:",
            file
        );


    })

    .catch(()=>{});



}






// =========================
// STOP AMBIENCE
// =========================


function stopAmbience(){



    if(audio.ambience){



        audio.ambience.pause();


        audio.ambience.currentTime=0;


        audio.ambience=null;


    }



}







// =========================
// SOUND EFFECT
// =========================


function playSound(file){



    const sound =
    new Audio(file);



    sound.volume =
    audio.volumes.effects;



    sound.play()

    .catch(()=>{});



}






// =========================
// MENU AUDIO
// =========================


function playMenuAudio(){



    playMusic(
        "assets/music/menu_theme.mp3"
    );


}







// =========================
// SCENE AUDIO
// =========================


function playSceneAudio(scene){



    stopMusic();


    stopAmbience();



    if(scene==="scene1"){



        playMusic(
        "assets/music/prologue_city.mp3"
        );



        playAmbience(
        "assets/sounds/ambience/city.mp3"
        );



    }



}







// =========================
// VOLUME CONTROL
// =========================


function setMusicVolume(value){



    audio.volumes.music =
    value;



    if(audio.music){


        audio.music.volume =
        value;


    }


}






function setAmbienceVolume(value){



    audio.volumes.ambience =
    value;



    if(audio.ambience){


        audio.ambience.volume =
        value;


    }



}






function setEffectsVolume(value){



    audio.volumes.effects =
    value;


}
