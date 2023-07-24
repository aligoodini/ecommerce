let $ = document ;
let dropdownBtn =$.querySelector(".dropdown-btn"),
    dropdownContainer = $.querySelector(".dropdown-container"),
    hamburgerIcon = $.querySelector(".hamburger-icon"),
    menuHamburger = $.querySelector(".menu-hamburger")

    dropdownBtn.addEventListener("click",()=>{
        dropdownContainer.classList.toggle("d-none")
    })
    hamburgerIcon.addEventListener("click",()=>{
        hamburgerIcon.classList.toggle("change");
        menuHamburger.classList.toggle("r-0")
    })
