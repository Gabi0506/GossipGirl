async function botao-pokemon(){
  const pokemonName = document.getElementById("pokemon-name").value;
  const pokemonId = document.getElementById('pokemon-id').value;
  const pokemonInfo = document.getElementById('pokemon-info').value;
  const pokemonImage = document.getElementById('pokemon-image').value;
  const url = `https://ptokeapi.co/api/v2/pokemon/${pokemonId}`;
}

try{
  const resposta = await fetch(`url`, `${pokemonId}`);
  if (!response.ok){
    print("Pokémon não encontrado");
  else{
    const data = await response.json();
  }
  
}

  
  
  
  
  
  
  
const clickBotao= document.getElementById('fetch-pokemon').addEventListener('click', botao-Pokemon);
