'use strict';
const body = document.querySelector('body');

const handlerTarget = (element) => {
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
};

const viewDropList = (elem, parentClass) => {
    const button = document.querySelector(parentClass),
        element = button.querySelector(elem);

    body.addEventListener('click', (event) => {
        let target = event.target;
        // console.log(target);
        // console.log(ulList);
        // console.log(event);
        if (target.closest(parentClass)) {
            handlerTarget(element);
            // } else if (target.closest('.close-btn')) { // Это для кнопки закрыть или что-нибудь в этом роде
            //     handlerMenu(); //menu.style.display = 'none';
            // } else if (target.tagName === 'A' && target.closest('.active-menu')) {
            //     handlerMenu(); //menu.style.display = 'none';
        } else if (!target.closest(parentClass) && element.style.display === 'block') {
            handlerTarget(element);
        }
    });
};

viewDropList('ul', '.clubs-list');

