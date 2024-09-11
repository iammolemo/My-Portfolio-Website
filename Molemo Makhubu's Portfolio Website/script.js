var typed= new Typed(".multiple-text",{
    strings: ["Software Developer","Web Designer","Web Developer", "Frontend Developer", "Backend Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })

/*DARK MODE EFFECT CODE*/

let lightmode=document.querySelector("#lightmode");
lightmode.onclick = () => {
    if(lightmode.classList.contains('bx-sun')){
        lightmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.add('color');
    }
    else{
        lightmode.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.remove('color');
    }
}

/*toggle navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*scroll sections*/
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove ('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header =document.querySelector ('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*Remove toggle and navbar upon navbar link clic*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .about-title, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .project-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

/*Email code*/
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Full Name:  ${fullName.value}<br>
    Email: ${email.value}<br> Phone Number: ${number.value}<br> Message: ${mess.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "makhubumn22@gmail.com",
        Password: "73450BDA7DECC4CB59FC2CE0FFEBDC847B72",
        To: 'makhubumn22@gmail.com',
        From: "makhubumn22@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Sent!",
                    text: "Your message was successfully sent to me, I look forward to getting back to you. Thanks!",
                    icon: "success"
                  });

                  fullName.value="";
                  email.value="";
                  number.value="";
                  subject.value="";
                  mess.value="";
            }
        } 
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});