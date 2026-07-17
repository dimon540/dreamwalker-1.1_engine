// =========================================
// SETTINGS MENU
// =========================================


console.log("Settings Menu завантажено");





function openSettingsMenu(){



document.getElementById("app").innerHTML = `



<div class="menu-screen">


<h1>
НАЛАШТУВАННЯ
</h1>




<label>

Гучність музики

</label>



<input 
type="range"
min="0"
max="1"
step="0.1"
oninput="AudioManager.setMusicVolume(this.value)"
>





<br><br>



<button onclick="openMainMenu()">

Назад

</button>



</div>



`;



}
