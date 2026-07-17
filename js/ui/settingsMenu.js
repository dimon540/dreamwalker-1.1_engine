// =========================================
// DREAMWALKER SETTINGS MENU
// =========================================


console.log("Settings Menu завантажено");





function openSettingsMenu(){



const settings =
window.gameSettings || {


    music:0.7,

    ambience:0.3,

    effects:0.8,

    textSpeed:35,

    autosave:true,

    language:"Українська"


};





document.getElementById("app").innerHTML = `



<div class="menu-screen settings-screen">





<h1>

НАЛАШТУВАННЯ

</h1>





<div class="settings-panel">





<label>

🎵 Музика

<span id="musicValue">
${Math.round(settings.music*100)}%
</span>

</label>


<input

type="range"

min="0"

max="1"

step="0.05"

value="${settings.music}"

oninput="
changeMusicVolume(this.value)
"

>








<label>

🌆 Атмосфера

<span id="ambienceValue">
${Math.round(settings.ambience*100)}%
</span>

</label>



<input

type="range"

min="0"

max="1"

step="0.05"

value="${settings.ambience}"

oninput="
changeAmbienceVolume(this.value)
"

>








<label>

🔊 Ефекти

<span id="effectsValue">
${Math.round(settings.effects*100)}%
</span>

</label>



<input

type="range"

min="0"

max="1"

step="0.05"

value="${settings.effects}"

oninput="
changeEffectsVolume(this.value)
"

>








<label>

⌨ Швидкість тексту

</label>



<select onchange="
changeTextSpeed(this.value)
">


<option value="60">
Повільно
</option>


<option value="35" selected>
Нормально
</option>


<option value="15">
Швидко
</option>


</select>







<label>


🌐 Мова


</label>



<select>


<option>

Українська

</option>


<option disabled>

English (скоро)

</option>


</select>








<label>


💾 Автозбереження


<input

type="checkbox"

checked="${settings.autosave}"

>

</label>







</div>








<button onclick="openMainMenu()">

Назад

</button>






</div>



`;



}









function changeMusicVolume(value){



if(window.AudioManager){


AudioManager.setMusicVolume(
Number(value)
);


}



}





function changeAmbienceVolume(value){



if(window.AudioManager){


AudioManager.setAmbienceVolume(
Number(value)
);


}



}







function changeEffectsVolume(value){



if(window.AudioManager){


AudioManager.setEffectsVolume(
Number(value)
);


}



}






function changeTextSpeed(value){



if(window.gameSettings){


gameSettings.textSpeed =
Number(value);


}



}
