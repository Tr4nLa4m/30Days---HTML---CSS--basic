var listImg = document.querySelectorAll('.small-image img');
var mainImg = document.querySelector('.main-image img');
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');

var currentIndex = 1;

function updateImageByIndex(num){

    listImg.forEach(img => {
        img.parentElement.classList.remove('active');
    })

    mainImg.src = listImg[num].src;
    listImg[num].parentElement.classList.add('active');
    
    
}

// listImg.forEach(function(image, index){
//     image.addEventListener('click', function(e){
//         // console.log(index);
//         currentIndex = index;
//         updateImageByIndex(currentIndex);
//     })
// })

// nextBtn.addEventListener('click', function(){


//     if(currentIndex === listImg.length - 1){
//         currentIndex = 0;

//     }else{
//         currentIndex++;
//     }

//     updateImageByIndex(currentIndex);
    
// });

// prevBtn.addEventListener('click', function(){
//     if(currentIndex === 0){
//         currentIndex = listImg.length - 1;
        
//     }else{
//         currentIndex--;
//     }
//     updateImageByIndex(currentIndex);
// })

function Carousel(){
    let next;
    
    setInterval(function(){
        next = (currentIndex + 1)%listImg.length;
        updateImageByIndex(currentIndex);
        
        currentIndex = next;
    }, 4000);
}
Carousel();
