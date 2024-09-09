const navigation = document.querySelector('.nav_ul');
const unordered = document.querySelectorAll("li");

document.getElementById('contact-form').addEventListener('submit', function (event) {
    

    emailjs.send("service_mwevxun", "template_63k8qu2", {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    })
    .then(function(response) {
        console.log("Email sent successfully", response);
        alert("Message has been sent.")
    })
    .catch(function(error) {
        console.error("Email sending failed", error);
    });

});

document.getElementById('menu').addEventListener('click', (e)=> {
    navigation.classList.toggle("show");
});

unordered.forEach(item => {
    item.addEventListener('click', (e) => {
        navigation.classList.toggle("show")
    });
});
