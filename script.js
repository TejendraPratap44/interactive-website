function changeBackground() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('formMessage');
    if (!name || !email.includes('@')) {
        message.innerText = 'Please enter a valid name and email.';
        message.style.color = 'red';
    } else {
        message.innerText = 'Form submitted successfully!';
        message.style.color = 'green';
    }
});
