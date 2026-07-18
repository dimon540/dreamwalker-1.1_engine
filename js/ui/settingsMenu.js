// =========================================
// DREAMWALKER SETTINGS MENU
// =========================================


console.log("Settings Menu завантажено");





function openSettingsMenu(){



const s =
window.gameSettings;



document.getElementById("app").innerHTML = `



<div class="sub-menu settings-screen">



<div class="background-title">

DREAMWALKER

</div>





<h1 class="sub-title">

НАЛАШТУВАННЯ

</h1>







<div class="panel settings-panel">





<label>

🎵 Музика

<span>

${Math.round(s.music*100)}%

</span>

</label>



<input

type="range"

min="0"

max="1"

step="0.05"

value="${s.music}"

oninput="changeMusicVolume(this.value)"

>






<label>

🌆 Атмосфера

<span>

${Math.round(s.ambience*100)}%

</span>

</label>



<input

type="range"

min="0"

max="1"

step="0.05"

value="${s.ambience}"

oninput="changeAmbienceVolume(this.value)"

>







<label>

🔊 Ефекти

<span>

${Math.round(s.effects*100)}%

</span>

</label>



<input

type="range"

min="0"

max="1"

step="0.05"

value="${s.effects}"

oninput="changeEffectsVolume(this.value)"

>








<label>

⌨ Швидкість тексту

</label>



<select onchange="changeTextSpeed(this.value)">


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

${s.autosave ? "checked" : ""}

onchange="changeAutosave(this.checked)"

>


</label>





</div>







<button

class="back-button"

onclick="openMainMenu()"

>


Назад


</button>





</div>


`;



}
