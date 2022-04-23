const pageHeigth = document.documentElement.scrollHeight;
const pageWidth = document.documentElement.scrollWidth;
const circleDiameter = 50;
const maxPageHeigth = pageHeigth - circleDiameter;
const maxPageWidth = pageWidth - circleDiameter;
var circle = document.createElement("div");
circle.style.width = circleDiameter + "px";
circle.style.height = circleDiameter + "px";
circle.style.backgroundColor = "red";
circle.style.borderRadius = "50%";
circle.style.position = "absolute";
circle.style.top = "0px";
circle.style.left = "0px";
circle.style.margin = "auto";
circle.style.animation = "mover 1s linear infinite";
// document.body.appendChild(circle);


function moveCircle(moviment) {
  let top = Number(circle.style.top.replace("px", ""));
  let left = Number(circle.style.left.replace("px", ""));

  console.log('position:', top, left);

  const newTopPosition = top + moviment;
  const newLeftPosition = left + moviment;

  if (newTopPosition < maxPageHeigth) {
    top = newTopPosition;
  } else if (newTopPosition < pageHeigth) {
    top = maxPageHeigth;
  }

  if (newLeftPosition < maxPageWidth) {
    left = newLeftPosition;
  } else if (newLeftPositiont < maxPageWidth) {
    left = maxPageWidth;
  }

  circle.style.top = top + "px";
  circle.style.left = left + "px";

  if (top == maxPageHeigth && left == maxPageWidth) {
    clearInterval(intervelMove);
  }
}

// const intervelMove = setInterval(() => moveCircle(50), 100);



fetch('https://prof-poke-api.herokuapp.com/api/pokedex/')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.forEach(pokemon => {
      createPokemon(pokemon);
    });
  });


function createPokemon(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");
  pokemonCard.innerHTML = `
    <div class="pokemon-card-image">
      <img src="${pokemon.url_icon}">
    </div>
    <div class="pokemon-card-info">
      <h2>${pokemon.id} ${pokemon.name}</h2>
    </div>
  `;
  document.body.appendChild(pokemonCard);
}