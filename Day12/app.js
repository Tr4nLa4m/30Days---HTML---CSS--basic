var slider = document.querySelector('.ranger-bar');
var ranger = document.querySelector('.ranger');
var body = document.querySelector('body');
var num = document.querySelector('.ranger-bar p')


function updateRanger(value) {

    body.style.background = ` rgba(0, 0, 0, ${value /100})`;
    slider.style.width = `${value}%`;
    num.innerText = value + '%';

}

ranger.addEventListener('mousemove', function(e){

    let value = Math.round((e.offsetX + 1) / this.offsetWidth * 100);
    updateRanger(value);
    
})