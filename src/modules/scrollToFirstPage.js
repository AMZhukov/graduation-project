const returnTop = () => {
    const arrowTop = document.querySelector('.toTop');
    console.log(arrowTop);
    arrowTop.onclick = function () {
        window.scrollTo(pageXOffset, 0);
        // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
    };

    window.addEventListener('scroll',  () => {
        console.log(pageYOffset < document.documentElement.clientHeight);
        arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
        // arrowTop.hidden = true;
    });
};
export default returnTop;