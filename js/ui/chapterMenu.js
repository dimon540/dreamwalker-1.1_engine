// =========================================
// DREAMWALKER CHAPTER MENU
// =========================================


console.log("Chapter Menu завантажено");




function openChapterMenu(){



const app =
document.getElementById("app");



app.innerHTML = `



<div class="menu-screen">



<h1>
РОЗДІЛИ
</h1>




<div class="chapter-list">



<button onclick="startScene('scene1')">

Пролог:
Невідоме місто

</button>



<button disabled>

Глава 1
(заблоковано)

</button>



<button disabled>

Глава 2
(заблоковано)

</button>



</div>





<button onclick="openMainMenu()">

Назад

</button>



</div>



`;



}
