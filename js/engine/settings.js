// =========================================
// DREAMWALKER SETTINGS ENGINE
// =========================================


console.log("Settings Engine завантажено");




// =========================
// SETTINGS DATA
// =========================


window.gameSettings = JSON.parse(

localStorage.getItem("dreamwalkerSettings")

) || {


music:0.7,

ambience:0.3,

effects:0.8,

textSpeed:35,

autosave:true,

language:"Українська"


};






// =========================
// SAVE SETTINGS
// =========================


window.saveSettings = function(){


localStorage.setItem(

"dreamwalkerSettings",

JSON.stringify(gameSettings)

);


};







// =========================
// MUSIC
// =========================


window.changeMusicVolume = function(value){


gameSettings.music =
Number(value);


if(window.AudioManager){


AudioManager.setMusicVolume(

gameSettings.music

);


}


saveSettings();


};







// =========================
// AMBIENCE
// =========================


window.changeAmbienceVolume = function(value){


gameSettings.ambience =
Number(value);



if(window.AudioManager){


AudioManager.setAmbienceVolume(

gameSettings.ambience

);


}



saveSettings();


};







// =========================
// EFFECTS
// =========================


window.changeEffectsVolume = function(value){


gameSettings.effects =
Number(value);



if(window.AudioManager){


AudioManager.setEffectsVolume(

gameSettings.effects

);


}



saveSettings();


};







// =========================
// TEXT SPEED
// =========================


window.changeTextSpeed = function(value){


gameSettings.textSpeed =
Number(value);



saveSettings();


};







// =========================
// AUTOSAVE
// =========================


window.changeAutosave = function(value){


gameSettings.autosave =
value;



saveSettings();


};
