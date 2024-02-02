let emailSubmitt = document.getElementById("emailSubmit");
const form = document.getElementById("myForm");

emailSubmitt.addEventListener('click', function(e){
    e.preventDefault();
    emailSubmitt.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_zs07wap';

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            emailSubmitt.value = 'SendEmail';
            alert('CONGRATS:))! Your Message has been sent.');
        }, (err) => {
            emailSubmitt.value = 'SendEmail';
            alert(JSON.stringify(err));
        });
})
// source video as a resource: https://www.youtube.com/watch?v=PGyeSW6c0cA