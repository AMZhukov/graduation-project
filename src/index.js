
import modalWindows from './modules/modalWindows';
import viewDropList from './modules/viewDropList';


viewDropList('ul', '.clubs-list');
modalWindows( '.free-visit', '#gift', '.close-btn', '.form-content'); // Вызов модального окна «Записаться на бесплатные визит»
modalWindows( '.callback-btn', '#callback_form', 'close-btn', '.form-content'); // Вызов модального окна «Перезвоните мне»