let tuite = document.getElementById('tuite');
let caixinha = document.getElementById('caixinha');

function enviartuite() {
  let texto = caixinha.value;
  if (texto !== '') { 
    alert(`Tuite enviado: "${texto}"`);
    caixinha.value = ''; 
  } else {
    alert('Por favor, escreva algo antes de tweetar!');
  }
}

tuite.addEventListener('click', enviartuite); 
