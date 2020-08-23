//sections
let sections = document.querySelectorAll("section");
//links
let linksCon = document.getElementById("linksCon");
for (let index = 0; index < sections.length; index++) {
    let link = document.createElement("li");
    link.innerHTML = sections[index].id;
    linksCon.appendChild(link);
}
let links = document.querySelectorAll("#linksCon > li");
//active section
function active () {
    for (let index = 0; index < sections.length; index++) {
        if(sections[index].offsetTop <= scrollY && sections[index].offsetTop + sections[index].offsetHeight > scrollY){
            links[index].classList.add("active");
        }else{
            links[index].classList.remove("active");
        }
    }
}
window.addEventListener('scroll', active);
//navbar scroll
for (let index = 0; index < links.length; index++) {
    links[index].addEventListener('click',function(){
        window.scrollTo(0, sections[index].offsetTop);
    })
}
//navbar animations
let navbar = document.getElementsByClassName("nav");
window.addEventListener('scroll',function () {
    if(scrollY >= sections[1].offsetTop){
        navbar[0].style = "background-color: rgba(219, 219, 219, .8); position: fixed;";
    }else{
        navbar[0].style = "background-color: rgba(219, 219, 219, 0); position: absolute"; 
    }
});
//start today button
let startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click',function () {
    window.scrollTo(0,sections[2].offsetTop);
});
//back to top button
let upBtn = document.getElementById("upBtn");
window.addEventListener('scroll',function () {
    if(scrollY > sections[1].offsetTop){
        upBtn.style.display = "block";
    }else{
        upBtn.style.display = "none";
    }
});

upBtn.addEventListener('click',function () {
    window.scrollTo(0,0);
});
//footer date
let year = document.getElementById("year");
let dt = new Date();
year.innerHTML = dt.getFullYear(); 
