// Mi código JavaScript:
const Filtrar = document.querySelector(".filtrarAuto");

const selectElement = document.getElementById(".marcas");
document.addEventListener("DOMContentLoaded", function () {});

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

const imgElement = document.querySelector(".auto");

// Realiza una solicitud HTTP para obtener los datos desde la URL
fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then((response) => response.json())
  .then((data) => {
    // Asegúrate de que el JSON tenga la estructura adecuada
    if (data.car && data.car.image) {
      // Asigna la ruta de la imagen al atributo src del elemento img
      imgElement.src = data.car.image;
    } else {
      console.error("La estructura del JSON no es la esperada.");
    }
  })
  .catch((error) => {
    console.error("Error al obtener los datos: " + error);
  });
