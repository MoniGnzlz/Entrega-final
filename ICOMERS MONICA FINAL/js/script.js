const sidebar = document.getElementById("sidebar");
const menuCost = document.getElementById("menuCost");
const cerrarBtn = document.getElementById("cerrarBtn");
const toggleBtn = document.getElementById("toggleBtn");
const loginForm	= document.getElementById("loginForm");
	
menuCost.addEventListener("click", () => {
  sidebar.style.left = "0";
});

cerrarBtn.addEventListener("click", () => {
  sidebar.style.left = "-250px";
});


	function abrirMenu(){
		document.getElementById("sidebar").style.width= "250px";
		document.getElementById("tarjetas").style.marginLeft= "250px";
	}
	
	function cerrarMenu(){
		document.getElementById("sidebar").style.width = "0px";
		document.getElementById("tarjetas").style.marginLeft = "0px";
	}

	toggleBtn.addEventListener("click", () => {
		loginForm.classList.toggle("active");
	});
	
	document.addEventListener("click", (event) => {
		if(!loginForm.contains(event.target) && event.target !== toggleBtn) {
		loginForm.classList.remove("active");
		}	
	});
	console.log("sidebar:", document.getElementById("sidebar"));
	console.log("content:", document.getElementById("content"));
	