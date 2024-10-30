// Script para mudar o fundo da navbar ao rolar a página
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }
});

// Referências ao overlay e ao conteúdo do overlay
const overlay = document.getElementById('imageOverlay');
const overlayImage = document.getElementById('overlayImage');
const overlayTitle = document.getElementById('overlayTitle');
const overlayDescription = document.getElementById('overlayDescription');

// Função para abrir o overlay com a imagem e descrição específica
function showOverlay(imageSrc, title, description) {
    overlayImage.src = imageSrc;
    overlayTitle.textContent = title;
    overlayDescription.textContent = description;
    overlay.classList.add('active');
}

// Função para fechar o overlay
function closeOverlay() {
    overlay.classList.remove('active');
}

// Event listeners para os cards
document.querySelectorAll('.card-link').forEach((card) => {
    card.addEventListener('click', (event) => {
        event.preventDefault(); // Evita comportamento padrão do link
        const cardImage = card.getAttribute('data-img-src');
        const cardTitle = card.getAttribute('data-title');
        const cardDescription = card.getAttribute('data-description');
        showOverlay(cardImage, cardTitle, cardDescription);
    });
});

// Rolagem suave personalizada para o link "Cardápio"
document.querySelector('.nav-link[href="#cardapio"]').addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    const target = document.querySelector('#cardapio'); // Seleciona o elemento de destino
    const offset = -100; // Ajuste de deslocamento (aumente ou diminua conforme necessário)
    const topPosition = target.getBoundingClientRect().top + window.pageYOffset + offset;

    // Realiza a rolagem suave até a posição desejada
    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
});

// Função para fechar o overlay ao clicar fora dele
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeOverlay();
    }
});