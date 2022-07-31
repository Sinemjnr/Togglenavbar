const span = document.querySelector("span");
const nav = document.querySelector("nav");


span.addEventListener("click", toggleNavbar);

function check(){
    console.log("Button clicked");
}

function toggleNavbar(){
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
    } else{
        nav.classList.add("show");
    }

}

