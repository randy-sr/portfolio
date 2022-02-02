// al hacer click en los links de mi menu hce scroll hacia las secciones
const links = document.querySelectorAll(".navegacion ul li a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}
   

function clickHandler(e) {
    
    e.preventDefault();

    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}


// cambiar estilos a mi header menu de navegacion al hacer scroll
window.addEventListener("scroll", function() {
    var header = document.getElementById("header"); 
    header = header.classList.toggle("abajo", window.scrollY > 0);

    let logo2 = document.querySelector(".logo_2");

    if (header) {
        logo2.innerHTML = "Developer";  
    }else {
        logo2.innerHTML = "Dev";  
    }
    
})


// descargar mi cv
function downloadCV() {
    window.open("docs/RANDY SIERRA ENGLISH CV.pdf");
}


// validaciones en el formulario de la
let send = () => {

    let email; 
    let box, content, form, redbox;
    redbox = new Array();

    email = document.getElementById("email").value;
    box = document.createElement("div");


    if ( !email.includes("@") || email == null ) { 
        content = document.createTextNode("Su email esta incorrecto");
        box.appendChild(content);
        box.style.backgroundColor = "red";
        box.style.color = "#fff";
        box.style.border = "1px solid red";
        box.style.textAlign = "center";
        box.style.padding = "10px 0px";
        box.style.width = "250px";
        box.style.margin = "0 auto";

        form = document.getElementById("form");
        redbox = form.appendChild(box);
    }
    else {

        content = document.createTextNode("Enviado");
        box.appendChild(content);
        box.style.backgroundColor = "#2ecc71";
        box.style.color = "#fff";
        box.style.textAlign = "center";
        box.style.padding = "10px 0px";
        box.style.width = "250px";
        box.style.margin = "0 auto";

        form = document.getElementById("form");
        form.appendChild(box); 
    }

    
}
