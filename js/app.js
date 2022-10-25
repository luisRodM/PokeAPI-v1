

document.addEventListener("DOMContentLoaded", () => {
  const random = getRandomInt(1, 151);
  fetchData(random);
})

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const fetchData = async(id) => {
  try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    
    const pokemon = {
      img: data.sprites.other.dream_world.front_default,
      nombre: capitalizeFirstLetter(data.name),
      exp: data.base_experience,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      specialAttack: data.stats[3].base_stat,
      defense: data.stats[2].base_stat,

    }
    console.log(data)
    pintarCard(pokemon);
  }catch(error) {
    console.log(error);
  }
}
hola
const pintarCard = (pokemon) => {
  console.log(pokemon)
  const template = document.getElementById("template-card").content;
  const main_content = document.getElementById("main-content");
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();
  

  clone.querySelector(".card-body-img").setAttribute("src", pokemon.img);
  clone.querySelector(".card-body-title").innerHTML = `${pokemon.nombre} <span>${pokemon.hp}HP</span>`;
  clone.querySelector(".card-body-text").innerHTML = `${pokemon.exp} exp`;
  clone.querySelector(".card-footer-attack").innerHTML = `<h3>${pokemon.attack}</h3> <p>Atack</p>`;
  clone.querySelector(".card-footer-specialAttack").innerHTML = `<h3>${pokemon.specialAttack}</h3> <p>Special Atack</p>`;
  clone.querySelector(".card-footer-defense").innerHTML = `<h3>${pokemon.defense}</h3> <p>Defense</p>`;

  fragment.appendChild(clone);
  main_content.appendChild(fragment);
}
