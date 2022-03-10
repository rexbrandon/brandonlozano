function mobileMenu(action){
    let menuBackground = document.getElementById('menu-background')
    if(action == 'open'){
        menuBackground.style.width = "100%"
    }
    else{
        menuBackground.style.width = "0"
    }
}