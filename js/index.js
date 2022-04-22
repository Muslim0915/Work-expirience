const menu_btn = document.querySelector(".menu-btn");
const nav_menu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");


const nav_list = document.querySelectorAll(".nav-item");
const len = nav_list.length;

for(let i = 0;  i < len; i++) {
   nav_list[i].onclick = function () {
      menu_btn.classList.toggle('active');
      nav_menu.classList.toggle('active');
   }
}
menu_btn.onclick = function(){
   menu_btn.classList.toggle('active');
   nav_menu.classList.toggle('active');
};

window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        navbar.classList.add("myNavbar")
    }
    else{
        navbar.classList.remove("myNavbar");
    }
};


