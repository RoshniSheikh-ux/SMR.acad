let btnLogin = document.querySelector(".btn-search");
let btn = document.querySelector(".search");

btnLogin.addEventListener("click", () => {
    btn.classList.toggle("btn-click");
});

let menu = document.querySelector(".menu-items");
let menubtn = document.querySelector(".menu");

menubtn.addEventListener("click", ()=> {
    menu.classList.toggle("active-menu");
    menubtn.classList.toggle("btn-menu-active")
});
