const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
  
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
  
    const formData = {
        email: email,
        password: password,
    };

    console.log(formData);
  
    form.reset();
});

const input = document.querySelector('input');
if (input) { // Перевірка чи елемент існує
    input.addEventListener('focus', () => {
        input.setAttribute('placeholder', 'Type area');
    });
    input.addEventListener('blur', () => {
        input.removeAttribute('placeholder');
    });
}





