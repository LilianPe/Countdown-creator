menu=document.querySelector(".menu")
optionMenu=document.querySelector(".option-menu")
menu.addEventListener("click",()=>{
    if(optionMenu.style.transform=='scaleY(1)'){
        optionMenu.style.transform='scaleY(0)'
    }else{
        optionMenu.style.transform='scaleY(1)'
    }
})
//Programme marche juste rearranger la modification du style 