// Mi código JavaScript:
const Filtrar= document.querySelector(".filtrarAuto")


Filtrar.addEventListener("click",function(){
  fetch("https://ha-front-api-proyecto-final.vercel.app/cars" + search.value)

  .then(function(res){
    return res.json();

  })
  .then(function(res){
    

  })
  .catch(function(err){

  })
})