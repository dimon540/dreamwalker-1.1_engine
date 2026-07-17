// =========================
// DREAMWALKER AUDIO MANAGER
// =========================


console.log("Audio Manager завантажено");




// =========================
// AUDIO MANAGER
// =========================


window.AudioManager = {





    // =====================
    // MAIN MENU
    // =====================


    playMenu(){


    if(
        audio.music &&
        !audio.music.paused
    ){

        return;

    }



    playMusic(
        audioFiles.music.menu
    );


}




   // =====================
// SCENE AUDIO
// =====================


playScene(scene){


    console.log(
        "Аудіо сцени:",
        scene
    );



    if(scene.music){


        playMusic(
            scene.music
        );


    }



    if(scene.ambience){


        playAmbience(
            scene.ambience
        );


    }



},




playSound(sound){



    if(sound){


        playEffect(
            sound
        );


    }



},


    // =====================
    // BUTTON CLICK
    // =====================


    click(){



        playEffect(
            audioFiles.effects.click
        );



    },







    // =====================
    // TRANSITION SOUND
    // =====================


    transition(){



        playEffect(
            audioFiles.effects.transition
        );



    },







    // =====================
    // STOP ALL
    // =====================


    stopAll(){



        stopMusic();


        stopAmbience();



    },







    // =====================
    // VOLUME
    // =====================


    setMusicVolume(value){



        setMusicVolume(
            value
        );



    },




    setAmbienceVolume(value){



        setAmbienceVolume(
            value
        );



    },




    setEffectsVolume(value){



        setEffectsVolume(
            value
        );



    }



};
