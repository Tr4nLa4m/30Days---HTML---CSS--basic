var preview = document.querySelector('#preview');
var picture = document.querySelector('#image');


picture.addEventListener('change', function(e){
    
    let img = document.createElement('img');
    imgUrl =  URL.createObjectURL(this.files[0]);
    img.src = imgUrl;
    preview.appendChild(img);


})