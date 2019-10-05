
import modalWindows from './modules/modalWindows';
import viewDropList from './modules/viewDropList';


viewDropList('ul', '.clubs-list');
modalWindows( '#free_visit_form', '#gift', 'close-btn', '.form-content'); // Вызов модального окна «Записаться на бесплатные визит»
modalWindows( '#callback_form', '#callback_form', 'close-btn', '.form-content');