// Catálogo de Produtos Completo
const catalogo = [
  {"name": "CAMISA INTERNACIONAL HOME 25/26 - VERMELHA", "price": "Esgotado", "img": "https://cdn.fazagilizar.com.br/uploads/1da96aeece68e68533c477b88331a146.jpeg", "category": "BRASILEIRO"},
  {"name": "FLAMENGO 24/25 LIFE STYLE", "price": "Esgotado", "img": "https://cdn.fazagilizar.com.br/uploads/8525046271a06584281358364303375c.jpeg", "category": "BRASILEIRO"},
  {"name": "CAMISA FLAMENGO THRID 2025/26", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/cbaaecaf1757dc5084a2c23cf1057d2e.jpeg", "category": "BRASILEIRO"},
  {"name": "CAMISA FLAMENGO HOME 25/26", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/273e94a82d0c22aa7cbffd774ae299c1.jpeg", "category": "BRASILEIRO"},
  {"name": "CAMISA CRUZEIRO HOME 2025/26", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/ac6c68ff5e31488944680fa753150ba2.jpeg", "category": "BRASILEIRO"},
  {"name": "CAMISA DE TREINO CRUZEIRO 2026 - ESCURA", "price": "Esgotado", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "BRASILEIRO"},
  {"name": "CAMISA DE TREINO CRUZEIRO 2026 - CLARA", "price": "Esgotado", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "BRASILEIRO"},
  {"name": "CAMISA PALMEIRAS AVANTI 2025", "price": "Esgotado", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "BRASILEIRO"},
  {"name": "CAMISA BOTAFOGO THIRD 2025/26 AURA 90", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "BRASILEIRO"},
  {"name": "CAMISA VASCO DA GAMA HOME 25/26 - RELEITURA", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "BRASILEIRO"},
  {"name": "VASCO DA GAMA 25/26 THIRD", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "BRASILEIRO"},
  {"name": "CAMISA VASCO 3 GOLEIRO 2025", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "BRASILEIRO"},
  {"name": "CAMISA RETRO FRANCA 98 ZIDANE", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/4a674d762c3c8e1a91cc7b69351f15d5.jpeg", "category": "RETRO"},
  {"name": "CAMISA RETRÔ BARCELONA FINAL UCL 2008/09 - MESSI", "price": "Esgotado", "img": "https://cdn.fazagilizar.com.br/uploads/a0f6d565eb6359d1968f40f0cefe3a49.jpeg", "category": "RETRO"},
  {"name": "CAMISA RETRÔ BARCELONA HOME 2010/11 - MESSI", "price": "R$ 190,00", "img": "https://cdn.fazagilizar.com.br/uploads/a0f6d565eb6359d1968f40f0cefe3a49.jpeg", "category": "RETRO"},
  {"name": "CAMISA CHELSEA FINAL UCL 2008/09 - LAMPARD", "price": "Esgotado", "img": "https://cdn.fazagilizar.com.br/uploads/a0f6d565eb6359d1968f40f0cefe3a49.jpeg", "category": "RETRO"},
  {"name": "CAMISA CHELSEA FINAL UCL 2008/09 - DROGBA", "price": "R$ 190,00", "img": "https://cdn.fazagilizar.com.br/uploads/a0f6d565eb6359d1968f40f0cefe3a49.jpeg", "category": "RETRO"},
  {"name": "CAMISA POLO RETRÔ CORINTHIANS 2012", "price": "R$ 190,00", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "RETRO"},
  {"name": "CAMISA RETRÔ REAL MADRID AWAY 2014/15", "price": "R$ 190,00", "img": "https://cdn.fazagilizar.com.br/uploads/a0f6d565eb6359d1968f40f0cefe3a49.jpeg", "category": "RETRO"},
  {"name": "CAMISA RETRÔ PSG HOME 2001/02", "price": "R$ 190,00", "img": "https://cdn.fazagilizar.com.br/uploads/a0f6d565eb6359d1968f40f0cefe3a49.jpeg", "category": "RETRO"},
  {"name": "RETRO BOCA JUNIORS 96/97", "price": "R$ 190", "img": "https://cdn.fazagilizar.com.br/uploads/a0f6d565eb6359d1968f40f0cefe3a49.jpeg", "category": "RETRO"},
  {"name": "CAMISA BOTAFOGO HOME 1995", "price": "R$ 190,00", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "RETRO"},
  {"name": "CAMISA SANTOS AWAY 2011/12", "price": "R$ 190,00", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "RETRO"},
  {"name": "CAMISA SÃO PAULO AWAY 1993/94", "price": "Esgotado", "img": "https://cdn.fazagilizar.com.br/uploads/95856475852585258525852585258525.jpeg", "category": "RETRO"},
  {"name": "CAMISA BARCELONA HOME 25/26", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "REAL MADRID 25/26 MASCULINO TORCEDOR", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "CAMISA AFC BOURNEMOUTH HOME 2025/26", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "PSG PRÉ JOGO 2025/26 TOTAL 90", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "CAMISA CELTA DE VIGO 100th ANNIVERSARY", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "CAMISA ATLÉTICO DE MADRID TOTAL 90", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "CHELSEA 25/26 TORCEDOR TOTAL 90", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "CAMISA INTER TOTAL 90 25/26", "price": "Esgotado", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "CAMISA TOTTENHAM TOTAL 90 2025/26", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "CAMISA ATALANTA HOME 2025/26", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "25/26 PORTO", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "CAMISA ROMA HOME 25/26", "price": "Esgotado", "img": "https://cdn.fazagilizar.com.br/uploads/02787834789547895478954789547895.jpeg", "category": "EUROPEU"},
  {"name": "CAMISA SELEÇÃO BRASIL JORDAN HOME COPA 2026", "price": "R$ 190,00", "img": "https://cdn.fazagilizar.com.br/uploads/4a674d762c3c8e1a91cc7b69351f15d5.jpeg", "category": "SELEÇÃO"},
  {"name": "CAMISA FEMININA SELEÇÃO BRASIL JORDAN HOME COPA 2026", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/e204c58f7bb58ac125751a192aab5f4d.jpeg", "category": "SELEÇÃO"},
  {"name": "CAMISA RETRO BRASIL HOME COPA 1998", "price": "R$ 190,00", "img": "https://cdn.fazagilizar.com.br/uploads/0f732e24debee3f4ee11414a8ea43625.jpeg", "category": "RETRO"},
  {"name": "RETRO BRASIL 94 | UNIFORME", "price": "R$ 190,00", "img": "https://cdn.fazagilizar.com.br/uploads/4a674d762c3c8e1a91cc7b69351f15d5.jpeg", "category": "RETRO"},
  {"name": "CONJUNTO FRIO CRUZEIRO TREINO 25/26 ESCURO", "price": "R$ 285,00", "img": "https://cdn.fazagilizar.com.br/uploads/a0f6d565eb6359d1968f40f0cefe3a49.jpeg", "category": "CONJUNTO FRIO"},
  {"name": "KIT INFANTIL REAL MADRID HOME 25/26", "price": "R$ 149,99", "img": "https://cdn.fazagilizar.com.br/uploads/a0f6d565eb6359d1968f40f0cefe3a49.jpeg", "category": "KIT INFANTIL"},
  {"name": "CAMISA FEMININA SELEÇÃO BRASIL HOME COPA 2022", "price": "R$ 149,99,00", "img": "https://cdn.fazagilizar.com.br/uploads/4a674d762c3c8e1a91cc7b69351f15d5.jpeg", "category": "FEMININA"}
];

// Função para renderizar produtos
function renderizarProdutos(filtro = 'todos') {
    const grid = document.getElementById('produtos-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    const produtosFiltrados = filtro === 'todos' 
        ? catalogo 
        : catalogo.filter(p => p.category === filtro);

    produtosFiltrados.forEach(produto => {
        const esgotado = produto.price === 'Esgotado';
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.innerHTML = `
            <div class="produto-img">
                <img src="${produto.img}" alt="${produto.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22250%22 height=%22250%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22250%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2216%22 fill=%22%23999%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ECamiseta%3C/text%3E%3C/svg%3E'">
                <span class="badge-categoria">${produto.category}</span>
                <span class="badge-qualidade">1:1 Premium</span>
            </div>
            <div class="produto-info">
                <h3 class="produto-nome">${produto.name}</h3>
                <p class="produto-preco ${esgotado ? 'esgotado' : ''}">${produto.price}</p>
                <a href="https://wa.me/5511985022672?text=Olá!%20Gostaria%20de%20comprar:%20${encodeURIComponent(produto.name)}" 
                   target="_blank" 
                   class="produto-btn ${esgotado ? 'esgotado' : ''}"
                   ${esgotado ? 'style="pointer-events: none;"' : ''}>
                    ${esgotado ? 'Esgotado' : 'Comprar no WhatsApp'}
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();

    const filtros = document.querySelectorAll('.filtro-btn');
    filtros.forEach(btn => {
        btn.addEventListener('click', () => {
            filtros.forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');
            const filtro = btn.getAttribute('data-filtro');
            renderizarProdutos(filtro);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

console.log('King of Thai - Site carregado com sucesso!');
console.log('Total de produtos:', catalogo.length);
