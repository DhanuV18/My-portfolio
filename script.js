const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach((item) => 
    item.addEventListener("click", function(){
        item.classList.toggle("collapsible--expanded");
    })
);

var typed = new Typed('.auto-input', {
    strings: ["Developer", "Creator", "Adventurer","Cartoon fan"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


