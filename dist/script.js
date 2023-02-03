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

const day = document.getElementById("day");
const night = document.getElementById("night");

day.addEventListener('click',()=> {
    day.classList.add('hidden');
    night.classList.remove('hidden');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
})

night.addEventListener('click',()=> {
    day.classList.remove('hidden');
    night.classList.add('hidden');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
})

window.addEventListener('load',()=>{
    if(localStorage.getItem('theme') == 'dark'){
        day.classList.add('hidden');
        night.classList.remove('hidden');
        document.documentElement.classList.add('dark');
    }
})
