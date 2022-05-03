const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const main = $('#toast')
const icons = {
    success: 'fas fa-check-circle',
    info: 'fas fa-info-circle',
    warning: 'fas fa-exclamation-circle',
    error: 'fas fa-exclamation-circle',
}

const successBtn = $('.success--btn')
const errorBtn = $('.danger--btn')
const warnBtn = $('.warn--btn')
const infoBtn = $('.info--btn')

function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
    }) {
        if(main) {
            const toast = document.createElement('div')
            const icon = icons[type]
            const delay = (duration / 1000).toFixed(2)

            const autoRemoveId = setTimeout(function() {
                main.removeChild(toast)
            }, duration + 1000)

            toast.onclick = function(e) {
                if(e.target.closest('.toast__close')) {
                    main.removeChild(toast)
                    clearTimeout(autoRemoveId)
                }
            }

            toast.classList.add('toast', `toast--${type}`)
            toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
            toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
            `
            main.appendChild(toast)
            
            
        }
    }

successBtn.onclick = function() {
    toast({
        title: 'Success',
        message: 'Máy vi tính kết nối Internet(Window, Ubuntu, MacOS)',
        type: 'success',
        duration: 3000
    })
}

errorBtn.onclick = function() {
    toast({
        title: 'Error',
        message: 'Máy vi tính kết nối Internet(Window, Ubuntu, MacOS)',
        type: 'error',
        duration: 3000
    })
}

warnBtn.onclick = function() {
    toast({
        title: 'Warning',
        message: 'Máy vi tính kết nối Internet(Window, Ubuntu, MacOS)',
        type: 'warning',
        duration: 3000
    })
}

infoBtn.onclick = function() {
    toast({
        title: 'Info',
        message: 'Máy vi tính kết nối Internet(Window, Ubuntu, MacOS)',
        type: 'info',
        duration: 3000
    })
}
