
let dropdownBtns = document.querySelectorAll(".dropdown-btn"),
    dropdownContainer = document.querySelector(".dropdown-container"),
    hamburgerIcon = document.querySelector(".hamburger-icon"),
    closeBtn = document.querySelector(".close"),
    menuHamburger = document.querySelector(".menu-hamburger"),
    wArea = document.querySelector(".wArea"),
    wItem = document.querySelector(".wItem"),
    Beauty = document.querySelectorAll(".Beauty"),
    dropDownHover = document.querySelector(".drop-down-hover"),
    imgProduct = document.querySelectorAll(".trending-products-offer-end-box-img-box");
    //shop
    listGroupDropDown = document.querySelector(".list-group__drop-down");
    listGroupTitleHamburgerIcon = document.querySelector(".list-group-title__hamburger-icon");
    dropDownHover = document.querySelector(".drop-down-hover");
    let oFalse = true;

    console.log(dropDownHover);



    wItem.addEventListener('click' , ()=>{
        wArea.classList.toggle("dis-flex")
    })
    Beauty.forEach((e)=>{
        e.addEventListener("click",()=>{
            dropDownHover.classList.toggle("dis-flex")
        })
    })


    // Trending-Prouducts-section 
    // Featured-Prouducts-section

    imgProduct.forEach((e)=>{
        e.addEventListener("mouseover",()=>{
            e.children[1].classList.add("d-block");
            e.children[2].classList.add("d-block");
        })
        e.addEventListener("mouseout",()=>{
            e.children[1].classList.remove("d-block");
            e.children[2].classList.remove("d-block");
        })
    })


    // mobile menu

    dropdownBtns.forEach((e)=>{
        e.addEventListener("click",()=>{
            console.log(e.nextElementSibling );
            e.nextElementSibling.classList.toggle("d-none")
        })
    })
    hamburgerIcon.addEventListener("click",()=>{
        menuHamburger.classList.toggle("l-0");
    })
    closeBtn.addEventListener("click",()=>{
        menuHamburger.classList.toggle("l-0");
    })
    

    // shop
    listGroupTitleHamburgerIcon.addEventListener("click" , ()=>{
        if(oFalse){
            listGroupDropDown.classList.add("o-1")
            oFalse = false;
        }
        else{
            listGroupDropDown.classList.remove("o-1");
            dropDownHover.classList.remove("dis-flex");
            oFalse = true;
        }
    })
    