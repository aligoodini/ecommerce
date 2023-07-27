
let dropdownBtn = document.querySelector(".dropdown-btn"),
    dropdownContainer = document.querySelector(".dropdown-container"),
    hamburgerIcon = document.querySelector(".hamburger-icon"),
    menuHamburger = document.querySelector(".menu-hamburger"),
    wArea = document.querySelector(".wArea"),
    wItem = document.querySelector(".wItem"),
    Beauty = document.querySelectorAll(".Beauty"),
    dropDownHover = document.querySelector(".drop-down-hover"),
    top2= document.querySelectorAll(".top-2"),
    top3= document.querySelectorAll(".top-3"),
    imgProduct = document.querySelector(".trending-products-offer-end-box-img-box");
    productImg = document.querySelectorAll(".product-img");


    // console.log(productImg);
    console.log(top2);

    wItem.addEventListener('click' , ()=>{
        wArea.classList.toggle("dis-flex")
    })
    Beauty.forEach((e)=>{
        e.addEventListener("click",()=>{
            dropDownHover.classList.toggle("dis-flex")
        })
    })


    // Trending-Prouducts-section 

    imgProduct.addEventListener("mouseover",()=>{
        top2[0].classList.add("d-block");
        top3[0].classList.add("d-block");
    })
    imgProduct.addEventListener("mouseout",()=>{
        top2[0].classList.remove("d-block");
        top3[0].classList.remove("d-block");
    })
    productImg.forEach((e)=>{
        e.addEventListener("mouseover",()=>{
            e.children[1].classList.add("d-block");
            e.children[2].classList.add("d-block");
        })
        e.addEventListener("mouseout",()=>{
            e.children[1].classList.remove("d-block");
            e.children[2].classList.remove("d-block");
        })
    })
    // dropdownBtn.addEventListener("click",()=>{
    //     dropdownContainer.classList.toggle("d-none")
    // })
    // hamburgerIcon.addEventListener("click",()=>{
    //     hamburgerIcon.classList.toggle("change");
    //     menuHamburger.classList.toggle("r-0")
    // })
    

    