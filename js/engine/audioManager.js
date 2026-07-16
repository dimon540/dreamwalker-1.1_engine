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



        console.log(
            "Запуск музики меню"
        );



        playMusic(
            audioFiles.music.menu
        );



    },







    // =====================
    // SCENE AUDIO
    // =====================


    playScene(sceneName){



        console.log(
            "Аудіо сцени:",
            sceneName
        );



        playSceneAudio(
            sceneName
        );



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
