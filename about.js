const left=document.querySelector('.left');
const right=document.querySelector('.right');
const about=document.querySelector('.about');

left.addEventListener('mouseenter', () => {
    about.classList.add('leftclearance');
});

left.addEventListener('mouseleave', () => {
    about.classList.remove('leftclearance')
});

right.addEventListener('mouseenter', () => {
    about.classList.add('rightclearance');
});

right.addEventListener('mouseleave', () => {
    about.classList.remove('rightclearance')
});