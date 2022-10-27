const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu1");

/*haciendo accesible para publico con discapacidad visual*/
    if(navMenu.classList.contains("nav-menu1")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
    }
);