'use strict';

const handlerTarget = (element) => {
    if (element.style.display === 'block') {
        return (element.style.display = 'none');
    } else {
        element.style.display = 'block';
    }
};

const modalWindows = (buttonStart, elem, buttonClose, windowClass) => {
    const element = document.getElementById(elem);

    document.addEventListener('click', (event) => {
        let target = event.target;

        if (target.closest(buttonStart)) {
            handlerTarget(element);
        } else if (target.closest(buttonClose) && element.style.display  === 'block' /*|| target.closest('.close_icon')*/) { // Это для кнопки ОК. В случае наличия крестика необходима кусочек раскомментировать
            handlerTarget(element);
            //} else if (target.tagName === 'A' && target.closest('.active-menu')) {
            //     handlerMenu(); //menu.style.display = 'none';
        } else if (!target.closest(windowClass) && element.style.display === 'block') { // выключение меню при нажатии на фон
            handlerTarget(element);
        }
    });
};

export default modalWindows;
