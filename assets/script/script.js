let $ = document ;
let dropdownBtn =$.querySelector(".dropdown-btn"),
    dropdownContainer = $.querySelector(".dropdown-container"),
    hamburgerIcon = $.querySelector(".hamburger-icon"),
    menuHamburger = $.querySelector(".menu-hamburger"),
    WomenMenu = $.querySelector(".nav-tabs-women-menu"),
    womenItem = $.querySelector(".navs-tabs__woman");

    console.log(WomenMenu);
    console.log(womenItem);

    dropdownBtn.addEventListener("click",()=>{
        dropdownContainer.classList.toggle("d-none")
    })
    hamburgerIcon.addEventListener("click",()=>{
        hamburgerIcon.classList.toggle("change");
        menuHamburger.classList.toggle("r-0")
    })
    womenItem.addEventListener("mouseenter",()=>{
        WomenMenu.classList.add("dis-flex");
    })
    womenItem.addEventListener("mouseleave",()=>{
        WomenMenu.classList.remove("dis-flex");
    })