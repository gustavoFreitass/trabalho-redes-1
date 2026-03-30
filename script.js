const bootOverlay = document.getElementById('omnitrix-boot-overlay');
const btnAtivar = document.getElementById('btn-ativar');
const body = document.body;

window.addEventListener('load', () => {
    bootOverlay.classList.add('booting-animation');

    setTimeout(() => {
        bootOverlay.classList.add('fade-out');

        body.classList.remove('is-booting');

        setTimeout(() => {
            bootOverlay.style.display = 'none';
        }, 500); 
    }, 2000); 
});

function ativarOmnitrix() {
    alert("Sinal da Corrente Códons estabelecido! Dispositivos conectados com sucesso na rede.");
    
    document.body.style.boxShadow = "inset 0 0 50px #10FF00";
    
    setTimeout(() => {
        document.body.style.boxShadow = "none";
    }, 2000);
}

btnAtivar.addEventListener('click', ativarOmnitrix);