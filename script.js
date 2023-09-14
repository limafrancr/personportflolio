function meuShow(){
    let ul= document.querySelector('.navbar ul');
    if(ul.classList.contains("open")){
        ul.classList.remove("open")

        document.querySelector(".menu-icon img") .src = "menu-aberto.png"
    }

   else{
        ul.classList.add("open")

        document.querySelector(".menu-icon img") .src = "fechar.png"
    }
}


//let btnMenu = document.getElementById('btn-menu')
//let menu = document.getElementById('menu-mobile')
//let overlay = document.getElementById('overlay-menu')

//btnMenu.addEventListener('click', ()=>{
    //menu.classList.add('abrir-menu')
//})

//menu.addEventListener('click', ()=>{
    //menu.classList.remove('abrir-menu')
//})

//overlay.addEventListener('click', ()=>{
    //menu.classList.remove('abrir-menu')
//})