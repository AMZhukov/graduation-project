const sendForm = (id) => {

    const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const form = document.getElementById(id);
    const button = form.querySelector("button");

    const blockedButton = () => {

        if (!form.querySelector('.error')) {

            if (button.getAttribute('disabled')) button.removeAttribute('disabled');
        } else button.setAttribute('disabled', 'true');

    };

    form.addEventListener('change', (event) => {
        let target = event.target;
        if (target.matches('input')) {
            blockedButton();
        }
    });


    const statusMessage = document.createElement('div');

    if (id === 'form3') statusMessage.style.cssText = 'font-size: 2rem; color: white;';
    else statusMessage.style.cssText = 'font-size: 2rem;';



    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
        // for (let val of formData.entries()){ // Можно и так
        //     body[val[0]] = val[1];
        // }
        formData.forEach((val, key) => { // Можно и вот так
            body[key] = val;
        });
        postData(body)
            .then((respronce) => {
                if (respronce.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage; form.reset();
            })
            .catch(error => {statusMessage.textContent = errorMessage; console.error(error);});
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
    // const postData = (body) => {
    //     return new Promise ((resolve, reject) => {
    //         const request = new XMLHttpRequest();
    //         request.addEventListener('readystatechange', () => {
    //             if (request.readyState !== 4) {
    //                 return;
    //             }
    //             if (request.status === 200) {
    //                 resolve();
    //             } else {
    //                 reject(request.status);
    //             }
    //         });
    //         request.open('POST', './server.php');
    //         request.setRequestHeader('Content-Type', 'application/json');
    //
    //         request.send(JSON.stringify(body));
    //     });
    // };
};
export default sendForm;