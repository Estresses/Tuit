let tuite = document.getElementById('tuite');
let caixatuite = document.getElementById('caixatuite');
let enviar = document.getElementById('enviar');
let tuitescrever = document.getElementById('tuiteescrever');
let lista = document.getElementById('lista');

tuite.addEventListener('click', function () {
   caixatuite.style.display = 'flex';
});

enviar.addEventListener('click', function () {
    let texto = tuitescrever.value;
    if (texto !== '') {
        alert(`Tuit enviado: "${texto}"`);
        adicionaraofeed(texto);
        tuitescrever.value = '';
        caixatuite.style.display = 'none';
    } else {
        alert('Por favor, escreva algo antes de tuitar!');
    }
});

function adicionaraofeed(tweet) {
    let li = document.createElement('li');
    li.innerText = tweet;
    lista.prepend(li);
}


