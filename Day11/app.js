var successBtn = document.querySelector('.control .success')
var warningBtn = document.querySelector('.control .warning')
var errorBtn = document.querySelector('.control .error')

successBtn.addEventListener('click', function(){
    createToast('success');
})

warningBtn.addEventListener('click', function(){
    createToast('warning');
})

errorBtn.addEventListener('click', function(){
    createToast('error');
})

function createToast(status) {

    let templateInner ;
    switch(status) {
        case 'success': {
            templateInner = `<i class="fa-regular fa-circle-check"></i>
                   <span class="message">This is a success message!</span>`;
            break;
        }

        case 'warning': {
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
                   <span class="message">This is a warning message!</span>`;
            break;
        }

        case 'error': {
            templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
                     <span class="message">This is a error message!</span>`;
            break;
        }
    }
    // <div class="toas success-l">
    //         <i class="fa-regular fa-circle-check"></i>
    //         <span class="message">This is a success message!</span>
    //         <div class="countdown"></div>
    //     </div>

    //     <div class="toas warning-l">
    //         <i class="fa-solid fa-circle-exclamation"></i>
    //         <span class="message">This is a warning message!</span>
    //     </div>

    //     <div class="toas error-l">
    //         <i class="fa-solid fa-triangle-exclamation"></i>
    //         <span class="message">This is a error message!</span>
    //         <div class="countdown"></div>
    //     </div>

    let toasts = document.getElementById('toasts');
    var toas = document.createElement('div');
    toas.classList.add('toas');
    toas.classList.add(status + '-l');
    toas.innerHTML = `${templateInner}
    <div class="countdown"></div>
    `;
    toasts.appendChild(toas);


    setTimeout(function(){
        toas.style.animation = 'slideHide 2s ease forwards';
    }, 4000);

    setTimeout(function(){
        toas.remove();
    }, 6000)
}