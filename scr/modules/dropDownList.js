'use strict';
const body = document.querySelector('body');

const handlerTarget = (element) => {
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
};

const viewDropList = () => {
    const button = document.querySelector('.clubs-list'),
        ulList = button.querySelector('ul');

    body.addEventListener('click', (event) => {
        let target = event.target;
        // console.log(target);
        // console.log(ulList);
        // console.log(event);
        if (target.closest('.clubs-list')) {
            handlerTarget(ulList);
            // } else if (target.closest('.close-btn')) { // Это для кнопки закрыть или что-нибудь в этом роде
            //     handlerMenu(); //menu.style.display = 'none';
            // } else if (target.tagName === 'A' && target.closest('.active-menu')) {
            //     handlerMenu(); //menu.style.display = 'none';
        } else if (!target.closest('.clubs-list') && ulList.style.display === 'block') {
            handlerTarget(ulList);
        }
    });
};

viewDropList();

