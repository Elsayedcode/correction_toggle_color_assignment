let toggleMenuStatus = false;

const getSidebar = document.querySelector (".menu-sidebar");
const getSidebarUl = document.querySelectorAll(".menu-sidebar ul");


function toggleMenu() {
    if ( toggleMenuStatus === false){
        getSidebar.style.visibility = "visible";
    
        let arrayLength = getSidebarUl.length;
     for(let i = 0; i < arrayLength;i++){
        getSidebarUl[i].style.opacity = "1";

         } 
        }
        toggleMenuStatus = true;
        
    }
    toggleMenu();
    
    function  easeOut(){
    if (toggleMenuStatus === true){
    getSidebar.style.visibility = "hidden";
         let arrayLength = getSidebarUl.length;
     for(let i = 0; i < arrayLength;i++){
         getSidebarUl[i].style.opacity = "0";

         }    
    }
    
    toggleMenuStatus = false;
}
easeOut();

const home = document.querySelector("#Home");
const red = document.querySelector("#Red");
const orange = document.querySelector("#Orange");
const purple = document.querySelector("#Purple");
const green = document.querySelector("#Green");

home.addEventListener('click',() => {
    document.body.style.background = 'gray';
});
      
red.addEventListener('click',() => {
    document.body.style.background = 'red';
});

orange.addEventListener('click',() => {
    document.body.style.background = 'orange';
});

purple.addEventListener('click',() => {
    document.body.style.background = 'purple';
});

green.addEventListener('click',() => {
    document.body.style.background = 'green';
})


