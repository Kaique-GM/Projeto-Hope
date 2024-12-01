const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterBtn = document.getElementById('show-register');
const showLoginBtn = document.getElementById('show-login');


// Função para mudar o título
function changeTitle(form) {
    if (form === loginForm) {
        document.title = "Login"; // Título da página de Login
    } else if (form === registerForm) {
        document.title = "Cadastro"; // Título da página de Cadastro
    }
}

// Inicializa com a tela de login
changeTitle(loginForm);

// Alternar para o formulário de cadastro
showRegisterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('active'); // Oculta o formulário de login
    registerForm.classList.add('active'); // Exibe o formulário de cadastro
    changeTitle(registerForm);
});

// Alternar para o formulário de login
showLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.remove('active'); // Oculta o formulário de cadastro
    loginForm.classList.add('active'); // Exibe o formulário de login
    changeTitle(loginForm);
});

// Função para redirecionar para a home
function redirectToHome() {
    window.location.href = "../../index.html"; 
}

// Função para validar o formulário
function validateForm(form) {
    // Se for o formulário de login
    if (form.id === 'login-form') {
        const username = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;

        // Validação simples
        if (username === "" || password === "") {
            alert("Por favor, preencha todos os campos.");
            return false; // Impede o envio do formulário se os campos estiverem vazios
        }
    }

    // Se for o formulário de cadastro
    if (form.id === 'register-form') {
        const username = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        // Validação simples
        if (username === "" || email === "" || password === "") {
            alert("Por favor, preencha todos os campos.");
            return false; // Impede o envio do formulário se os campos estiverem vazios
        }
    }

    return true; // Se todos os campos forem válidos, permite o envio do formulário
}

// Quando o formulário de login for enviado
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário
    if (validateForm(this)) {
        redirectToHome(); // Se a validação for bem-sucedida, redireciona para a home
    }
});

// Quando o formulário de registro for enviado
registerForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário
    if (validateForm(this)) {
        redirectToHome(); // Se a validação for bem-sucedida, redireciona para a home
    }
});