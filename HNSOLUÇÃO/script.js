// Galeria modal por projeto

const galleryProjects = {
    project1: [
        {
            type: 'image',
            src: 'img/SITE FEITO.jpg',
            title: 'Site de confeitaria',
            desc: 'Plataforma completa para vendas online.'
        },
        {
            type: 'image',
            src: 'https://placehold.co/600x400?text=Detalhe+do+site',
            title: 'Detalhe do site',
            desc: 'Página de produtos do site de confeitaria.'
        },
        {
            type: 'video',
            src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            title: 'Vídeo do Projeto',
            desc: 'Demonstração em vídeo do site.'
        }
    ],
    project2: [
        {
            type: 'image',
            src: 'https://placehold.co/600x400',
            title: 'Dashboard de Dados',
            desc: 'Dashboard interativo para análise de dados.'
        },
        {
            type: 'image',
            src: 'https://placehold.co/600x400?text=Gráfico+Detalhado',
            title: 'Gráfico Detalhado',
            desc: 'Exemplo de gráfico do sistema.'
        }
    ],
    project3: [
        {
            type: 'image',
            src: 'https://placehold.co/600x400',
            title: 'Aplicativo Mobile',
            desc: 'Interface principal do app.'
        },
        {
            type: 'video',
            src: 'https://www.youtube.com/embed/ysz5S6PUM-U',
            title: 'Vídeo do App',
            desc: 'Demonstração do aplicativo mobile.'
        }
    ]
};

let currentProject = null;
let currentIndex = 0;

function openGallery(projectKey, index = 0) {
    currentProject = projectKey;
    currentIndex = index;
    showGalleryItem();
    document.getElementById('galleryModal').style.display = 'flex';
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

function prevItem() {
    const items = galleryProjects[currentProject];
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showGalleryItem();
}

function nextItem() {
    const items = galleryProjects[currentProject];
    currentIndex = (currentIndex + 1) % items.length;
    showGalleryItem();
}

function showGalleryItem() {
    const items = galleryProjects[currentProject];
    const item = items[currentIndex];
    let content = '';
    if (item.type === 'image') {
        content = `<img src="${item.src}" alt="${item.title}" style="max-width:100%;border-radius:8px;">`;
    } else if (item.type === 'video') {
        content = `<iframe width="560" height="315" src="${item.src}" frameborder="0" allowfullscreen style="max-width:100%;border-radius:8px;"></iframe>`;
    }
    content += `<h3 style="color:#D4AF37;margin-top:1rem;">${item.title}</h3>
                <p>${item.desc}</p>`;
    document.getElementById('galleryItem').innerHTML = content;
}

// Fecha o modal ao clicar fora do conteúdo
document.addEventListener('click', function(e) {
    const modal = document.getElementById('galleryModal');
    if (modal && modal.style.display === 'flex' && e.target === modal) {
        closeGallery();
    }
});