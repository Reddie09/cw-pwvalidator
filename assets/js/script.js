document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    message.className = 'message';

    const minLength = 8;
    const hasNumber = /\d/;

    if (password.length < minLength) {
        message.textContent = `A senha deve ter pelo menos ${minLength} caracteres.`;
        message.classList.add('error');
    } else if (!hasNumber.test(password)) {
        message.textContent = 'A senha deve incluir pelo menos um número.';
        message.classList.add('error');
    } else {
        message.textContent = 'Senha válida!';
        message.classList.add('success');
    }
});
