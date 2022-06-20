const form = document.querySelector('form');
const msg = document.createElement('div');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const list = document.querySelector('.main-form__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        form.appendChild(msg);
        msg.innerHTML = '<p>Please enter the information in all fields</p>'
        msg.classList.add('error-msg');
        
        setTimeout(() => {
            msg.remove();
        },2000)
    } else {
        const item = document.createElement('li');
        item.textContent = `${nameInput.value} : ${emailInput.value}`;
        list.appendChild(item);
    }

    nameInput.value = '';
    emailInput.value = '';
});