const navigation = document.querySelector('.nav_ul');
const unordered = document.querySelectorAll("li");

document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.send("service_rd4i433", "template_wel7tpo", {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value,
    })
    .then(function(response) {
        console.log("Email sent successfully", response);
        alert("Message has been sent.")
    })
    .catch(function(error) {
        console.log("Email not sent");
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
