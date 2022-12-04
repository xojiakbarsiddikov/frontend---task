const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
let item = document.querySelectorAll('.menu li');

item.forEach((e) => {
    e.addEventListener('click' && 'mouseover', () => {
        item.forEach((i) => {
            i.classList.remove('active')
        })
        e.classList.add('active')
    });
});


open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn .addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})


