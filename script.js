const btn = document.getElementById('btnSurpresa');
const msg = document.getElementById('mensagem');
const musica = document.getElementById('musica');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {

    msg.style.display = 'block';

    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';

    btn.innerText = 'Leia ❤️';

    musica.currentTime = 0;
    musica.play();
});