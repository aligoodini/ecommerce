
let dropdownBtn = document.querySelector(".dropdown-btn"),
    dropdownContainer = document.querySelector(".dropdown-container"),
    hamburgerIcon = document.querySelector(".hamburger-icon"),
    menuHamburger = document.querySelector(".menu-hamburger"),
    wArea = document.querySelector(".wArea"),
    wItem = document.querySelector(".wItem");
    

    console.log(wArea);
    console.log(wItem);

    wItem.addEventListener('click' , ()=>{
        wArea.classList.toggle("dis-flex")
    })
    // dropdownBtn.addEventListener("click",()=>{
    //     dropdownContainer.classList.toggle("d-none")
    // })
    // hamburgerIcon.addEventListener("click",()=>{
    //     hamburgerIcon.classList.toggle("change");
    //     menuHamburger.classList.toggle("r-0")
    // })
    

    