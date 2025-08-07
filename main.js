const myform = document.querySelector('#myform');
const nameInput = document.querySelector('#name'); // Added missing selector
const emailInput = document.querySelector('#email'); // Fixed selector
const msg = document.querySelector('#msg');
const userList = document.querySelector('#user');

document.querySelector('form').addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.innerHTML = '', 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(${nameInput.value} : ${emailInput.value}));
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}