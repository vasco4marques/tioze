// função de aprendisagem
function colorChange(){
    const red = 'rgb(248, 113, 113)'

    const button = document.getElementById("nutri");

    const color = button.style.backgroundColor ;
    if(color == red){
        button.style.backgroundColor = null ; 
    }else if(button.classList.contains("bg-blue-400")){
        button.style.backgroundColor = red ;
        a = red; 
    } 
}



// ----- Modal informação nutricional -----
const openNutri = document.querySelector("#openNutri");
if (openNutri != null){
    openNutri.addEventListener('click',openModal);
}

const closeNutri = document.querySelector("#closeNutri");
if (closeNutri != null){
    closeNutri.addEventListener('click',closeModal);
}


function openModal(){
    const modal = document.getElementById("modal");
    modal.showModal();
}

function closeModal(){
    const modal = document.getElementById("modal");
    modal.close();
}

// -----

// ----- navbar -----

const openNav = document.querySelector("#navOpen");
if(openNav != null){
    openNav.addEventListener('click',sidebar);
}

const div = document.querySelector("#nav-links");
if(div != null){
    div.style.transition = "all 0.5s"
    div.addEventListener('click', hide);
}


function sidebar(){
    const div = document.querySelector("#nav-links");
    if(div.style.maxHeight == "0px" || div.style.maxHeight == ""){
        div.style.display = "flex";
        div.style.maxHeight = "204px";
        div.style.paddingTop = "1rem";
        div.style.paddingBottom = "1rem";
        div.style.rowGap = "20px"
    }else if(div.style.maxHeight=="204px"){
        div.style.display = "none";
        div.style.maxHeight = "0px";
        div.style.paddingTop = "0px";
        div.style.paddingBottom = "0px";
        div.style.rowGap = "0px"
    }
};

function hide(){
    const div = document.querySelector("#nav-links");
    div.style.display = "none";
    div.style.maxHeight = "0px";
    div.style.paddingTop = "0px";
    div.style.paddingBottom = "0px";
    div.style.rowGap = "0px"
}

