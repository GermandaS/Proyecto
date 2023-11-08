const selectYear = document.querySelector("#selectYear");
const currentYear = new Date().getFullYear();
const prueba = document.querySelector("#prueba");

for (let year = currentYear; year >= 1900; year--) {
  const option = document.createElement("option");
  option.value = year;
  option.text = year;
  selectYear.appendChild(option);
}
function dibujarEstrellas(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      stars += '<i class="bi bi-star-fill text-warning"></i>';
    } else {
      stars += '<i class="bi bi-star text-warning"></i>';
    }
  }
  return stars;
}

fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then(function (res) {
    return res.json();
  })
  .then(function (cars) {
    for (let car of cars) {
      const carElement = `
          <div class="row">
              <div class="col-12 col-lg-4 mb-3">
                  <img class="auto img-fluid" src="${car.image}" alt="" />
              </div>
              <div class="col-12 col-lg-8">
                  
              <h4>${car.brand}  ${car.model}</h4>
                  <div class="d-flex justify-content-end">
                      <h5>
                          ${
                            car.year
                          } | $USD${car.price_usd.toLocaleString()} | ${dibujarEstrellas(
        car.rating
      )}
                          
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
      prueba.insertAdjacentHTML("beforeend", carElement);
    }
  })
  .catch((error) => {
    console.error("Error al obtener los datos: " + error);
  });

const modelos = document.querySelector("#modelos");
const selectMarcas = document.querySelector("#selectMarcas");

fetch("https://ha-front-api-proyecto-final.vercel.app/brands")
  .then((res) => res.json())
  .then((marcas) => {
    selectMarcas.innerHTML = "";

    selectMarcas.insertAdjacentHTML(
      "beforeend",
      '<option value="" disabled selected>Seleccionar...</option>'
    );

    marcas.forEach((marca) => {
      selectMarcas.insertAdjacentHTML(
        "beforeend",
        `<option value="${marca}">${marca}</option>`
      );
    });
  })
  .catch((error) => {
    console.error("Error al cargar marcas:", error);
  });

selectMarcas.addEventListener("change", function () {
  const selectedBrand = selectMarcas.value;
  if (!selectedBrand) {
    modelos.innerHTML = "";
    return;
  }

  fetch(
    `https://ha-front-api-proyecto-final.vercel.app/models?brand=${selectedBrand}`
  )
    .then((res) => res.json())
    .then((data) => {
      modelos.innerHTML = "";

      data.forEach((modelo) => {
        modelos.insertAdjacentHTML(
          "beforeend",
          `<option value="${modelo}">${modelo}</option>`
        );
      });
    })
    .catch((error) => {
      console.error("Error al cargar modelos:", error);
    });
});
