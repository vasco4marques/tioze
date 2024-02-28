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
    div.addEventListener('click', hide);
}


function sidebar(){
    const div = document.querySelector("#nav-links");

    if(div.style.maxHeight == "0px" || div.style.maxHeight == ""){
        div.style.maxHeight = "204px";
        div.style.paddingTop="1rem";
        div.style.paddingBottom="1rem";
    }else if(div.style.maxHeight=="204px"){
        div.style.maxHeight = "";
        div.style.paddingTop="0rem";
        div.style.paddingBottom="0rem";

    }
}

function hide(){
    const div = document.querySelector("#nav-links");
    div.style.maxHeight = "";
    div.style.paddingTop="0rem";
    div.style.paddingBottom="0rem";
}

const filterButton = document.querySelector("#filter-button");
filterButton.addEventListener('click',toggleFilter)

function toggleFilter(){
    
    const div = document.querySelector("#filtros");
    const produtos= document.querySelector("#produtos-list")
    const icon = document.querySelector("#icon");


    if(div.style.maxWidth == ""){
        div.style.maxWidth="0px";
        div.style.marginRight="0px";
        produtos.style.margin="0 1rem 1rem 0"
        icon.style.transform = "rotate(-90deg)";
    }else if(div.style.maxWidth == "0px"){
        div.style.maxWidth="";
        div.style.marginRight="";
        div.style.margin="";
        icon.style.transform = "";
    }
}
