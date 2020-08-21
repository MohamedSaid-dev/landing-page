//sections
let home = document.getElementById("home");
let about = document.getElementById("about");
let pricing = document.getElementById("pricing");
let contact = document.getElementById("contact");
//links
let h_link = document.getElementById("h_link");
let a_link = document.getElementById("a_link");
let p_link = document.getElementById("p_link");
let c_link = document.getElementById("c_link");
let links = [h_link,a_link,p_link,c_link];
//active section
function active () {
    if(scrollY < home.offsetHeight){
        links.forEach(
            element => element.classList.remove("active")
        );
        links[0].classList.add("active");
    }else if(scrollY < about.offsetHeight + about.offsetTop){
        links.forEach(
            element => element.classList.remove("active")
        );
        links[1].classList.add("active");
    }else if(scrollY < pricing.offsetHeight + pricing.offsetTop){
        links.forEach(
            element => element.classList.remove("active")
        );
        links[2].classList.add("active");
    }else if(scrollY < contact.offsetHeight + contact.offsetTop){
        links.forEach(
            element => element.classList.remove("active")
        );
        links[3].classList.add("active");
    }
}
window.addEventListener('scroll', active);
//navbar animations
let navbar = document.getElementsByClassName("nav");
window.addEventListener('scroll',function () {
    if(scrollY >= about.offsetTop){
        navbar[0].style = "background-color: rgba(219, 219, 219, .8); position: fixed;";
    }else{
        navbar[0].style = "background-color: rgba(219, 219, 219, 0); position: absolute"; 
    }
});
//start today button
let startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click',function () {
    window.scrollTo(0,pricing.offsetTop);
});
//back to top button
let upBtn = document.getElementById("upBtn");
window.addEventListener('scroll',function () {
    if(scrollY > about.offsetTop){
        upBtn.style.display = "block";
    }else{
        upBtn.style.display = "none";
    }
})

upBtn.addEventListener('click',function () {
    window.scrollTo(0,0);
});
//footer date
let year = document.getElementById("year");
let dt = new Date();
year.innerHTML = dt.getFullYear(); 
