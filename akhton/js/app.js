var map = document.querySelector('#map');
var paths = map.querySelectorAll('.map__image a');
var links = map.querySelectorAll('.map__list .class');
var close = document.querySelectorAll('.close');

var activeArea = function(id){
    map.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    });
    map.querySelectorAll('.is-active2').forEach(function(item){
        item.classList.remove('is-active2');
    });
    document.querySelector('#list-' + id).classList.add('is-active2');
    document.querySelector('#region-'+ id).classList.add('is-active');
}

paths.forEach(path => {
    path.addEventListener('mouseenter', function (){
        var id = this.id.replace('region-', '')
        activeArea(id);
        var modalList = document.querySelector('#list-' + id).querySelector('.modalList').innerHTML;

    })
    path.addEventListener('click', function (){
        var modal = document.querySelectorAll('.modal');
        if(modal[0]){
            modal[0].remove();
        }
        var id = this.id.replace('region-', '');
        var modalList = document.querySelector('#list-' + id).querySelector('.modalList').innerHTML;
        var div = document.createElement("div");
        div.className = 'modal';
        div.style.position = "absolute";
        div.style.top = window.event.clientY + window.scrollY + 20;
        div.style.left = window.event.clientX - 160;
        div.setAttribute('style', 'top:'+ (window.event.clientY + window.scrollY + 20) + 'px; left:'+(window.event.clientX - 160) + 'px;')
        div.innerHTML = modalList;

        document.getElementById("map").appendChild(div);
    })
});

links.forEach(link => {
    link.addEventListener('mouseenter', function (){
        var id = this.id.replace('list-', '')
        activeArea(id);
    })
});

function modal(){
    close.forEach(closed => {
        var modal = document.querySelectorAll('.modal');
        if(modal[0]){
            modal[0].remove();
        }
    });
}




























// var map = document.querySelector('#map');
// var paths = map.querySelectorAll('.map__image a');
// var links = map.querySelectorAll('.map__list .class');
// var close = document.querySelectorAll('.close');
//
// var activeArea = function(id){
//     map.querySelectorAll('.is-active').forEach(function(item){
//         item.classList.remove('is-active');
//     });
//     map.querySelectorAll('.is-active2').forEach(function(item){
//         item.classList.remove('is-active2');
//     });
//     document.querySelector('#list-' + id).classList.add('is-active2');
//     document.querySelector('#region-'+ id).classList.add('is-active');
// }
//
// paths.forEach(path => {
//     path.addEventListener('mouseenter', function (){
//         var id = this.id.replace('region-', '')
//         activeArea(id);
//         var modalList = document.querySelector('#list-' + id).querySelector('.modalList').innerHTML;
//
//     })
//     path.addEventListener('click', function (){
//         var modal = document.querySelectorAll('.modal');
//         if(modal[0]){
//             modal[0].remove();
//         }
//         var id = this.id.replace('region-', '');
//         var modalList = document.querySelector('#list-' + id).querySelector('.modalList').innerHTML;
//         var div = document.createElement("div");
//         div.className = 'modal';
//         div.style.position = "absolute";
//         div.style.top = window.event.clientY + window.scrollY + 20;
//         div.style.left = window.event.clientX - 160;
//         div.setAttribute('style', 'top:'+ (window.event.clientY + window.scrollY + 20) + 'px; left:'+(window.event.clientX - 160) + 'px;')
//         div.innerHTML = modalList;
//
//         document.getElementById("map").appendChild(div);
//     })
// });
//
// links.forEach(link => {
//     link.addEventListener('mouseenter', function (){
//         var id = this.id.replace('list-', '')
//         activeArea(id);
//     })
// });
//
// function modal(){
//     close.forEach(closed => {
//         var modal = document.querySelectorAll('.modal');
//         if(modal[0]){
//             modal[0].remove();
//         }
//     });
// }
