const btn = document.getElementById('btnSurpresa');
const msg = document.getElementById('mensagem');
const musica = document.getElementById('musica');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {

    // Mostra mensagem
    msg.style.display = 'block';

    // Centraliza tudo novamente
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';

    // Texto botão
    btn.innerText = 'Leia ❤️';

    // Música
    musica.currentTime = 0;
    musica.play();
});