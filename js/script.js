let go = document.querySelector('.go');

window.addEventListener('scroll', () => {
    if(window.scrollY > 250) {
        go.classList.add('active');
    } else {
        go.classList.remove('active');
    }

});

function goTo() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}