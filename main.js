const upperLeft=document.querySelector('.upper-left');
const upperRight=document.querySelector('.upper-right');
const lowerLeft=document.querySelector('.lower-left');
const lowerRight=document.querySelector('.lower-right');
const container=document.querySelector('.container');

upperLeft.addEventListener('mouseenter', () => {
    container.classList.add('uhover-left')
});

upperLeft.addEventListener('mouseleave', () => {
    container.classList.remove('uhover-left');
});

upperRight.addEventListener('mouseenter', () => {
    container.classList.add('uhover-right');
});

upperRight.addEventListener('mouseleave', () => {
    container.classList.remove('uhover-right');
});

lowerLeft.addEventListener('mouseenter', () => {
    container.classList.add('lhover-left')
});

lowerLeft.addEventListener('mouseleave', () => {
    container.classList.remove('lhover-left');
});

lowerRight.addEventListener('mouseenter', () => {
    container.classList.add('lhover-right');
});

lowerRight.addEventListener('mouseleave', () => {
    container.classList.remove('lhover-right');
});
