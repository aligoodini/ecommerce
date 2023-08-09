
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

    // comment stars
    commentStars = document.querySelectorAll(".comment-star")
    let starE = 2

    // comment submit
    formBtn = document.querySelector(".form-btn")
    inputName = document.querySelector(".input-name")
    inputEmail = document.querySelector(".input-email")
    inputDes = document.querySelector(".input-des")
    accordianComment = document.querySelector(".accordian-comment")
    starColor = document.querySelector(".star-color")

    // change image by click in shop.html
    productsDetailImg = document.querySelectorAll(".products-detail__img")
    carouselItems = document.querySelectorAll(".carousel-item")

    console.log(carouselItems);




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
            listGroupDropDown.classList.add("d-block")
            oFalse = false;
        }
        else{
            listGroupDropDown.classList.remove("d-block");
            oFalse = true;
        }
    })
    

    // comment stars
    commentStars.forEach((e)=>{

        if(starE < 6 ){
            // e.addEventListener("mouseenter" , ()=>{
            //     let starId = e.id;
            //     for (let index = 0; index <= starId ; index++) {
            //         commentStars[index].classList.remove("c-dark")
            //         commentStars[index].classList.add("c-yellow")
            //     }
    
            // })
            // e.addEventListener("mouseleave" , ()=>{
            //     let starId = e.id;
            //     for (let index = 0; index <= starId ; index++) {
            //         commentStars[index].classList.remove("c-yellow")
            //         commentStars[index].classList.add("c-dark")
            //     }

            //     console.log(starE);
            // })
        }
            e.addEventListener("click" , ()=>{

                let starId = e.id;
        
                for (let index = 0; index <= starId ; index++) {
                    commentStars[index].classList.remove("c-dark")
                    commentStars[index].classList.add("c-yellow")
                }
        
            })
            


    })


    // comment submit
    formBtn.addEventListener("click" , ()=>{
        console.log(inputName.value);
        console.log(inputDes.value);

        let newComment = document.createElement("div")
        accordianComment.prepend(newComment)
        newComment.className = "accordion-comment mt-5"
        newComment.innerHTML =`
        
                    <h4 class="accordion-comment__title mb-3">${inputName.value}</h4>
                       
                    ${starColor.innerHTML}

                    <p class="accordion-comment__title-des mt-4">
                    ${inputDes.value}
                    </p>
`
        
    })

    // change image by click in shop.html
    productsDetailImg.forEach((e)=>{

        e.addEventListener('click' , ()=>{
            console.log(e.dataset.id);
            let imgNum = e.dataset.id
            console.log(imgNum);

            carouselItems.forEach((carouselItem)=>{
                carouselItem.classList.remove("active")
            })

            carouselItems[imgNum].classList.add("active")
        })
    })
