const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const innercontent1 = document.getElementById("innercontent1");
const innercontent2 = document.getElementById("innercontent2");
const innercontent3 = document.getElementById("innercontent3");
const innercontent4 = document.getElementById("innercontent4");

img1.addEventListener("click",()=>{
    img1.classList.add("active");
    innercontent1.classList.add("active");
    img2.classList.remove("active");
    innercontent2.classList.remove("active");
    img3.classList.remove("active");
    innercontent3.classList.remove("active");
    img4.classList.remove("active");
    innercontent4.classList.remove("active");
});

img2.addEventListener("click",()=>{
    img2.classList.add("active");
    innercontent2.classList.add("active");
    img1.classList.remove("active");
    innercontent1.classList.remove("active");
    img3.classList.remove("active");
    innercontent3.classList.remove("active");
    img4.classList.remove("active");
    innercontent4.classList.remove("active");
});

img3.addEventListener("click",()=>{
    img3.classList.add("active");
    innercontent3.classList.add("active");
    img1.classList.remove("active");
    innercontent1.classList.remove("active");
    img2.classList.remove("active");
    innercontent2.classList.remove("active");
    img4.classList.remove("active");
    innercontent4.classList.remove("active");
});

img4.addEventListener("click",()=>{
    img4.classList.add("active");
    innercontent4.classList.add("active");
    img2.classList.remove("active");
    innercontent2.classList.remove("active");
    img3.classList.remove("active");
    innercontent3.classList.remove("active");
    img1.classList.remove("active");
    innercontent1.classList.remove("active");
});