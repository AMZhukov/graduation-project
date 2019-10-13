
import modalWindows from './modules/modalWindows';
import viewDropList from './modules/viewDropList';
import sendForm from './modules/sendForm';
import createDots from './modules/createDots';
import slider from './modules/slider';
//import checkSquare from './modules/validatorSquare';


viewDropList('ul', '.clubs-list');
modalWindows( '.free-visit', '#free_visit_form', '.close-btn', '.form-content'); // Вызов модального окна «Записаться на бесплатные визит»
modalWindows( '.callback-btn', '#callback_form', '.close-btn', '.form-content'); // Вызов модального окна «Перезвоните мне»
modalWindows( '.fixed-gift', '#gift', '.close-btn', '.form-content', '.fixed-gift'); // Вызов модального окна «Перезвоните мне»
//checkSquare('#check');
//checkSquare('#check2');
sendForm('#form1');
sendForm('#banner-form');
sendForm('#form2');
createDots();
slider(3000);

