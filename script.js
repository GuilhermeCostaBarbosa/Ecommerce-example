const  barMobile = document.querySelector('#bar')
const navMobile = document.querySelector('#navbar')
const closeMobileBtn = document.querySelector('#close')


barMobile.addEventListener('click', () => {
    navMobile.style.right = '0px'
})

closeMobileBtn.addEventListener('click', () => {
    navMobile.style.right = '-300px'
})