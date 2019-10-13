const createDots = () => {
    const portfolioContent = document.querySelector('.gallery-slider');
    const portfolioItem = portfolioContent.querySelectorAll('.slide');
    const portfolioDots = portfolioContent.querySelector('.gallery-dots');
    const numberDots = Object.keys(portfolioItem).length;
        let createDot = null;
    for (let i = 0; i < numberDots; i++) {
        createDot = document.createElement('li');
        createDot.className = 'dot';
        if (i === 0) {
            createDot.classList.add('dot-active');
        }
        portfolioDots.appendChild(createDot);
    }
};
export default createDots;
