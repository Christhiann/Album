let currentImageIndex = 0;
const images = [
    'imagem1.jpeg',
    'imagem2.jpeg',
    'imagem3.jpeg',
    'imagem4.jpeg',
    'imagem5.jpeg',
    'imagem6.jpeg',
    'imagem7.jpeg',
    'imagem8.jpeg',
];

function updateImage() {
    const carouselImage = document.getElementById('carouselImage');
    if (carouselImage) {
        carouselImage.src = images[currentImageIndex];
    }
    updateIndicators();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentImageIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Inicia o carrossel automaticamente após a página carregar
window.onload = function() {
    updateImage(); // Exibe a primeira imagem
    setInterval(nextImage, 3000); // Muda a imagem a cada 3 segundos
};

/* cronometro */
let startDate = new Date('2024-04-14T10:00:00-03:00');
setInterval(() => {
    let now = new Date();
    let diff = now - startDate;
    let segundos = Math.floor((diff / 1000) % 60);
    let minutos = Math.floor((diff / (1000 * 60)) % 60);
    let horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);
    months = months % 12;
    days = days % 30;

    document.getElementById('timer-column-1').innerText = `${years}y\n${months}m\n${days}d`;
    document.getElementById('timer-column-2').innerText = `${horas}h\n${minutos}m\n${segundos}s`;
}, 1000);

document.getElementById('startButton').addEventListener('click', function() {
    // Esconde a tela inicial e a galeria
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('galeria').style.display = 'none';

    // Mostra a tela de carregamento
    document.getElementById('carregando').classList.remove('oculto');

    // Aguarda 3 segundos antes de ir para a próxima página
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 3000);
});

