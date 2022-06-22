const container = document.querySelector(".container");
const colors = {
 fire: '#FDDFDF',
 grass: '#DEFDE0',
 electric: '#FCF7DE',
 water: '#DEF3FD',
 ground: '#f4e7da',
 rock: '#d5d5d4',
 fairy: '#fceaff',
 poison: '#98d7a5',
 bug: '#f8d5a3',
 dragon: '#97b3e6',
 psychic: '#eaeda1',
 flying: '#F5F5F5',
 fighting: '#E6E0D4',
 normal: '#F5F5F5'
};

// 获取宝可梦名称、属性
// get Pokemon's name and type
async function GetPokemonInfo(id) {
 const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
 const data = await res.json();

 const poke_info = {
  id: id.toString(),
  name: data.name,
  type: data.types[0].type.name,
  color: ""
 }

 CreatePokemonCard(poke_info);
};

// 向页面添加宝可梦卡片
// add Pokemon card to the page
function CreatePokemonCard(poke_data) {
 const template = document.createElement("div");
 template.classList = "pokemon-card";

 const id = poke_data.id.padStart(3, "0");
 const name = poke_data.name[0].toUpperCase() + poke_data.name.slice(1);
 const color = colors[poke_data.type];

 template.innerHTML = `
 <div class="poke-profile">
 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke_data.id}.png">
  </div>
  <div class="poke-description">
   <div class="poke-number" poke-number="#${id}"></div>
   <div class="poke-name" poke-name="${name}"></div>
   <div class="poke-type" poke-type="Type: ${poke_data.type}"></div>
  </div>
 </div>
 `
 template.style.background = color;
 container.append(template);
};

async function Run(nums) {
 for (let i = 1; i <= nums; i++) {
  await GetPokemonInfo(i);
 }
};

Run(150);