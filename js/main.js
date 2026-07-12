const watchBtn=document.getElementById("watchBtn");

watchBtn.addEventListener("click",()=>{

document.getElementById("trending").scrollIntoView({

behavior:"smooth"

});

});



// Fade In

const cards=document.querySelectorAll(".movieCard");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(40px)";

card.style.transition=".6s";

observer.observe(card);

});