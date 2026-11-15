const btn = document.querySelector('.btn');
const input = document.getElementById('input');
const copyBtn = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alert-container');

function createPassword() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength = 14;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    input.value = password;
}

function copyPassword() {
    if (input.value) {
        input.select();
        input.setSelectionRange(0, 99999);
        alertContainer.classList.remove('active');
        navigator.clipboard.writeText(input.value);
        alertContainer.innerHTML = input.value + ' copied to clipboard!';
        setTimeout(() => {alertContainer.classList.add('active')}, 5000);
    }
}
btn.addEventListener('click', ()=> {
    createPassword();
});

copyBtn.addEventListener('click', ()=> {
    copyPassword();
});