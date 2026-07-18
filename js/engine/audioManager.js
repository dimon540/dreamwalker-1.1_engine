// =========================
// DREAMWALKER AUDIO MANAGER
// =========================

console.log("Audio Manager завантажено");

window.AudioManager = {

    // =====================
    // MAIN MENU
    // =====================

    playMenu(){

        if(audio.music && !audio.music.paused){
            return;
        }

        console.log("Запуск музики меню");

        playMusic(audioFiles.music.menu);

    },



    // =====================
    // SCENE AUDIO
    // =====================

    playScene(scene){

        console.log("Аудіо сцени:", scene);

        if(scene.music){

            playMusic(scene.music);

        }

        if(scene.ambience){

            playAmbience(scene.ambience);

        }

    },



    // =====================
    // PLAY SOUND
    // =====================

    playSound(sound){

        if(sound){

            playEffect(sound);

        }

    },



    // =====================
    // BUTTON CLICK
    // =====================

    click(){

        playEffect(audioFiles.effects.click);

    },



    // =====================
    // TRANSITION
    // =====================

    transition(){

        playEffect(audioFiles.effects.transition);

    },



    // =====================
    // STOP
    // =====================

    stopAll(){

        stopMusic();
        stopAmbience();

    },



    // =====================
    // VOLUME
    // =====================

    setMusicVolume(value){

        setMusicVolume(value);

    },

    setAmbienceVolume(value){

        setAmbienceVolume(value);

    },

    setEffectsVolume(value){

        setEffectsVolume(value);

    }

};
