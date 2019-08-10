function scrollWin() {
  window.scrollTo(0,document.body.scrollHeight,);
};

function info1() {
  alert(" Function deactivated! Check other links! ")
}

function info2() {
  alert(" Function deactivated! Check other links! ")
}





var btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener ("click", function() {


	// Prima metoda, fara animatie
	//window.scrollTo(0, 0);



// Metoda 2 cu animatie dar mai putin responsiva
window.scrollTo({top: 0,   left:0,   behavior: "smooth"});

});



// toogle button


let toggleNavStatus = true;

let toggleNav = function() {
	let getSidebar = document.querySelector(".nav-bar");
	let getSidebarUl = document.querySelector(" ul ");
  
	//let getSidebarTitle = document.querySelector(".nav-sidebar span ");
   //let getSidebarLinks = document.querySelectorAll(".nav-sidebar a ");

if (toggleNavStatus === true) {
	getSidebarUl.style.visibility ="visible";
    getSidebar.style.height = "300px";
   
    //getSidebarTitle.style.opacity = "0.5";
     toggleNavStatus = false;
 }

else if (toggleNavStatus === false) {
	 getSidebarUl.style.visibility ="hidden";
     getSidebar.style.height = "50px";
    
    toggleNavStatus = true;
}
}



