document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.button1').onclick = function(){
    document.querySelector('h1').style.color = 'red';
}
document.querySelector('#button2').onclick = function(){
    document.querySelector('h1').style.color = 'white';
}
document.querySelector('#button3').onclick = function(){
    document.querySelector('h1').style.color = 'yellow';
}
})
