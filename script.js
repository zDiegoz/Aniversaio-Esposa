const btn = document.getElementById('btnSurpresa');
const msg = document.getElementById('mensagem');
const musica = document.getElementById('musica');

btn.addEventListener('click', () => {

    msg.style.display = 'block';

    btn.innerText = 'Leia ❤️';

    musica.currentTime = 0;
    musica.play();
});