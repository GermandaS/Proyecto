// Mi código JavaScript:
const Filtrar = document.querySelector(".filtrarAuto");

const selectElement = document.getElementById(".marcas");
document.addEventListener("DOMContentLoaded",function(){
  


})

document.addEventListener("DOMContentLoaded", function () {
  const selectYear = document.getElementById("selectYear");

  
  const currentYear = new Date().getFullYear();


  for (let year = 1900; year <= currentYear; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.text = year;
    selectYear.appendChild(option);
  }
});





