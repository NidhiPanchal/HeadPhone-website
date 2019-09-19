//change navbar bg on scrool
const bodyTag = document.querySelector('body');
const nav = document.querySelector('nav');

let scrollChange = () => {
    let navcolor = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(navcolor * 10);
}

addEventListener('scroll',() => {
    nav.style.setProperty('background',scrollChange() > 50 ? transparent : "#212121")
})