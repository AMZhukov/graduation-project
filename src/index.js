
import modalWindows from './modules/modalWindows';
import viewDropList from './modules/viewDropList';
import sendForm from './modules/sendForm';

viewDropList('ul', '.clubs-list');
modalWindows( '.free-visit', '#free_visit_form', '.close-btn', '.form-content'); // Вызов модального окна «Записаться на бесплатные визит»
modalWindows( '.callback-btn', '#callback_form', 'close-btn', '.form-content'); // Вызов модального окна «Перезвоните мне»
sendForm('form1');
