class Validator{
    constructor({selector, pattern = {}, method}){
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' &&
                item.type !== 'button';
        });
        this.error = new Set();
    }

    init(){
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.elementsForm.forEach(elem => this.checkIt({target: elem}));
            if (this.error.size) {
                e.preventDefault();
            }
        });
    }

    isValid(elem){
        const validatorMethod = {
            notEmpty(elem) {
                if (elem.value.trim() === ''){
                    return false;
                }
                return true;
            },
            pattern(elem, pattern){
                if (elem.getAttribute("type") === 'checkbox'){
                    return elem.checked;
                }
                return pattern.test(elem.value);
            }
        };
        if (this.method) {
            const method = this.method[elem.id];

            if (method) {
                return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
            }
        } else {
            console.warn('Необходимо передать id полей ввода и методы проверки этих полей! Для работы валидатора');
        }

        return true;
    }

    checkIt(event){
        const target = event.target;
        if (this.isValid(target)){
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }

    }
    showError(elem){
        elem.classList.remove('success');
        elem.classList.add('error');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = `Ошибка в этом поле`;
        errorDiv.classList.add('validator-error');
        if (elem.nextElementSibling){
            elem = elem.nextElementSibling;
        }
        elem.insertAdjacentElement('afterend', errorDiv);
    }
    showSuccess(elem){
        elem.classList.remove('error');
        elem.classList.add('success');
        console.log(elem);
        //console.log (elem.nextElementSibling.tagName);
        if (elem.nextElementSibling && elem.nextElementSibling.tagName == 'LABEL') elem = elem.nextElementSibling;
        console.log(elem);
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
            console.log(elem);
            elem.nextElementSibling.remove();
        }
    }
    applyStyle(){
        const style = document.createElement('style');
        style.textContent = `
            input.success {
                border: 2px solid purple
            }
            input.error {
                border: 3px solid red
            }
            .validator-error {
            font-size: 12px;
            font-family: sans-serif;
            color: red;
            }
        `;
        document.head.appendChild(style);
    }
    setPattern(){
        if (!this.pattern.phone){
            this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
        }
        if (!this.pattern.email){
            this.pattern.email = /^([-_.]*\w)+@([-_.]*\w)+\.\w{2,}$/;
        }
        if (!this.pattern.nameAndText) {
            this.pattern.nameAndText = (/^[А-ЯЁ ]*$/i); //форма для только русских слов с пробелами
        }
        if (!this.pattern.check1) {
            this.pattern.check1 = 'checked'; //данную форму можно не заполнять, т.к. алгоритм сам определит checkbox
        }
    }
}

const  valid1 = new Validator ({
    selector: '#form1',
    pattern: {
        // phone: /^\+380\d{7}$/,
        // zip: /\d{5,6}/
    },
    method: {
        'callback_form1-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        // 'form1-email': [
        //     ['notEmpty'],
        //     ['pattern', 'email']
        // ],
        'callback_form1-name': [
            ['notEmpty'],
            ['pattern', 'nameAndText']
        ],
        'check': [
            ['notEmpty'],
            ['pattern', 'check1'] //данную форму можно не заполнять, т.к. алгоритм сам определит checkbox
        ],
    }
});

valid1.init();

const  valid2 = new Validator ({
    selector: '#form2',
    pattern: {
        // phone: /^\+380\d{7}$/,
        // zip: /\d{5,6}/
    },
    method: {
        'callback_form2-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        // 'form1-email': [
        //     ['notEmpty'],
        //     ['pattern', 'email']
        // ],
        'callback_form2-name': [
            ['notEmpty'],
            ['pattern', 'nameAndText']
        ],
        'check2': [
            ['notEmpty'],
            ['pattern', 'check2'] //данную форму можно не заполнять, т.к. алгоритм сам определит checkbox
        ],
    }
});
valid2.init();

const  valid3 = new Validator ({
    selector: '#banner-form',
    pattern: {
        // phone: /^\+380\d{7}$/,
        // zip: /\d{5,6}/
    },
    method: {
        'phone1': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        // 'form1-email': [
        //     ['notEmpty'],
        //     ['pattern', 'email']
        // ],
        'name1': [
            ['notEmpty'],
            ['pattern', 'nameAndText']
        ],
        'check1': [
            ['notEmpty'],
            ['pattern', 'check2'] //данную форму можно не заполнять, т.к. алгоритм сам определит checkbox
        ],
    }
});
valid3.init();
