
let btn_primary = document.querySelector(".btn-primary");
let choynak = document.querySelector(".choynak");
let yletter = document.querySelector(".water-fill-y");
let rect = document.querySelector(".water");

rect.setAttribute("class", "");

btn_primary.addEventListener("mouseover", function() {
    choynak.classList.add("choynak-anim");

    rect.setAttribute("class", "water"); 

    yletter.classList.add("water-fill-y");
});




btn_primary.addEventListener("mouseout", function() {
    choynak.classList.remove("choynak-anim");

    rect.setAttribute("class", "");

    yletter.classList.remove("water-fill-y");
});


// kun-tun 

// let rejimBtn = document.querySelector(".night_button_box")

// let body = document.body



// rejimBtn.addEventListener("click",function(){

//     body.classList.toggle("qora")


// })


// raxmat

let raxmat = document.querySelector(".eraxmat");

btn_primary.addEventListener("click", function() {
    raxmat.style.left = "0"; 
});


// kun tun 2 

let newDay = document.querySelector(".theme-switch__checkbox")


newDay.addEventListener("change",function(){

    document.body.classList.toggle("qora")

})