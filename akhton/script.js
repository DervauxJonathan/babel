var paragraphe = document.getElementById('paragraphe');
var couvrePage = document.getElementById('couvrePage');

couvrePage.addEventListener('click', voirMaPage);

function voirMaPage(){
    couvrePage.style.display = "none";
    paragraphe.style.display = "flex";
}
