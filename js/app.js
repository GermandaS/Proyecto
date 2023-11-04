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

fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then(function (res) {
    return res.json();
  })
  .then(function (cars) {
    for (let car of cars) {
      let carElement = `
          <div class="row">
              <div class="col-12 col-lg-4 mb-3">
                  <img class="auto img-fluid" src="${car.image}" alt="" />
              </div>
              <div class="col-12 col-lg-8">
                  <h4>${car.model}</h4>
                  <div class="d-flex justify-content-end">
                      <h5>
                          ${car.year} | ${car.price_usd} |
                          <i class="bi bi-star-fill text-warning"></i>
                          <i class="bi bi-star-fill text-warning"></i>
                          <i class="bi bi-star-fill text-warning"></i>
                          <i class="bi bi-star-fill text-warning"></i>
                          <i class="bi bi-star text-warning"></i>
                      </h5>
                  </div>
                  <p>${car.description}</p>
                  <button type="submit" id="shopingCart">
                      <i class="bi bi-cart3"></i>
                      Comprar
                  </button>
                  <button type="submit" id="infoCart">
                      <i class="bi bi-plus-square"></i> Más información
                  </button>
                  <button type="submit" id="shareCart">
                      <i class="bi bi-box-arrow-up-right"></i> Compartir
                  </button>
              </div>
          </div>
      `;
      document.insertAdjacentHTML("beforeend", carElement);
    }
  })
  .catch((error) => {
    console.error("Error al obtener los datos: " + error);
  });
