const navOpen = document.getElementById('navOpen');
const navClose = document.getElementById('navClose');
const navOpenBox = document.getElementById('navOpenBox');

navOpen.addEventListener('click',()=>{
    navOpenBox.classList.add('right-0');
    navOpenBox.classList.remove('opacity-0')
})
navClose.addEventListener('click',()=>{
    navOpenBox.classList.remove('right-0');
    navOpenBox.classList.add('opacity-0')
})