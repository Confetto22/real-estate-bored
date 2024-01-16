 const hiddenEl = document.querySelectorAll(".hidden");
 const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
 });


 hiddenEl.forEach((el)=> observer.observe(el));


 const firstSectoinEl = document.querySelector(".section1-text");
const buttonTriggerEl = document.querySelector(".call")
const callWindowEl = document.querySelector(".callWindow")
const closeButtonEl = document.querySelector(".close")
const overlaysEl = document.querySelector(".overlay")
const sectionOneEl = document.querySelector("section-1");
const changeImageEl = document.getElementsByClassName("home-img")

console.log(changeImageEl);



function callAnimation() {
    buttonTriggerEl.addEventListener("click", function () {
        callWindowEl.classList.add("slide")
        firstSectoinEl.classList.add("shift")
    })
    
    closeButtonEl.addEventListener("click", function () {
        callWindowEl.classList.remove("slide")
        firstSectoinEl.classList.remove("shift")
    })

   

    
}



callAnimation();


function imageSize() {
    for ( let image of changeImageEl) {
        image.addEventListener("mouseover", function(){
            image.style.scale = "1.1";
            image.style.transition = "0.4s";

            image.addEventListener("mouseout", function () {
                image.style.scale = "1";
            })
        })
    }
}
console.log(imageSize());


