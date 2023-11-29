function setTheme(theme){
    const root = document.documentElement;
    if (theme==='dark'){
        root.classList.add('dark-mode');
    }
    else {
        root.classList.remove('dark-mode');
    }
}

function toggleTheme(){
    const currTheme = localStorage.getItem('theme') || 'normal';
    const newTheme = currTheme==='normal'?'dark':'normal';
    localStorage.setItem('theme',newTheme);
    setTheme(newTheme);
}

function setSavedTheme(){
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        setTheme(savedTheme);
        document.getElementById('themeToggle').checked = savedTheme==='dark';
    }
}

document.addEventListener('DOMContentLoaded', setSavedTheme);



document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        const formErrors = [];

        const nameInput = document.getElementById('name');
        if (!nameInput.checkValidity()) {
            formErrors.push({ field: 'name', message: 'Please enter a valid name.' });
            nameInput.setCustomValidity(''); 
        }

        const emailInput = document.getElementById('email');
        if (!emailInput.checkValidity()) {
            formErrors.push({ field: 'email', message: 'Please enter a valid email address.' });
            emailInput.setCustomValidity('');
        }

        const commentsInput = document.getElementById('comments');
        if (!commentsInput.checkValidity()) {
            formErrors.push({ field: 'comments', message: 'Please enter valid comments.' });
            commentsInput.setCustomValidity('');
        }

        if (formErrors.length > 0) {
            event.preventDefault(); 
            document.getElementById('form-errors').value = JSON.stringify(formErrors);
        }
    });

    const commentsInput = document.getElementById('comments');
    const commentsErrorOutput = document.getElementById('comments-error');

    commentsInput.addEventListener('input', function () {
        const pattern = /[A-Za-z0-9 !.?$%]+/;
        const value = commentsInput.value;

        if (!pattern.test(value)) {
            commentsErrorOutput.textContent = 'Illegal character detected!';
        } else {
            commentsErrorOutput.textContent = '';
        }
    });

    const commentsInfoOutput = document.getElementById('comments-info');
    const maxCharacters = 250;

    commentsInput.addEventListener('input', function () {
        const remainingCharacters = maxCharacters - commentsInput.value.length;
        commentsInfoOutput.textContent = `Characters remaining: ${remainingCharacters}`;

        if (remainingCharacters < 10) {
            commentsInfoOutput.classList.add('warn-style');
        } else {
            commentsInfoOutput.classList.remove('warn-style');
        }

        if (remainingCharacters < 0) {
            commentsInfoOutput.classList.add('error-style');
        } else {
            commentsInfoOutput.classList.remove('error-style');
        }
    });
});


