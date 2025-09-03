// Funcionalidade da navbar com dropdown e menu móvel
document.addEventListener('DOMContentLoaded', function() {
    // Configurar dropdowns
    setupDropdowns();
    
    // Configurar menu móvel
    setupMobileMenu();
});

// Configurar funcionalidade dos dropdowns
function setupDropdowns() {
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger, .dropdown-toggle');
    
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.closest('li, .dropdown-submenu');
            toggleDropdown(parent);
        });
    });
}

// Alternar visibilidade do dropdown
function toggleDropdown(element) {
    const dropdown = element.querySelector('.dropdown-menu');
    const allDropdowns = document.querySelectorAll('.dropdown-menu');
    const isSubmenu = element.classList.contains('dropdown-submenu');
    
    // Fecha todos os outros dropdowns do mesmo nível
    if (!isSubmenu) {
        allDropdowns.forEach(dd => {
            if (dd !== dropdown && !dd.closest('.dropdown-submenu')) {
                dd.classList.remove('show');
            }
        });
    }
    
    // Alterna o dropdown atual
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Configurar menu móvel
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (mobileToggle && navbarMenu) {
        mobileToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('show');
            // Alterna o ícone
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Fecha o menu ao clicar em um item
        const menuItems = navbarMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navbarMenu.classList.remove('show');
                    const icon = mobileToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }
}

// Fechar dropdowns ao clicar fora
document.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar-menu li')) {
        const allDropdowns = document.querySelectorAll('.dropdown-menu');
        allDropdowns.forEach(dd => dd.classList.remove('show'));
    }
});

// Fechar menu móvel ao redimensionar a tela
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const navbarMenu = document.querySelector('.navbar-menu');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (navbarMenu) {
            navbarMenu.classList.remove('show');
        }
        if (mobileToggle) {
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
});


// defini a baseurl para evitar erros na sidebar
const baseurl = "/";

let navbar = document.querySelector("#navbar");

navbar.innerHTML = `
     <nav class="navbar" id="navbar"> 
            <div class="navbar-container"> 
                <div class="navbar-brand"> 
                    <div class="brand-logo"> 
                        <i class="fas fa-code"></i>
                        <span>JS</span>
                    </div>
                    <p>SENAI - Práticas</p>
                </div>
                <button class="mobile-menu-toggle" id="mobile-menu-toggle">
                    <i class="fas fa-bars"></i>
                </button>
                <ul class="navbar-menu" id="navbar-menu">
                    <li>
                        <a href="${baseurl}index.html" class="dropdown-item">
                            <i class="fas fa-home"></i>
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#" class="dropdown-trigger">
                            <i class="fas fa-code-branch"></i>
                            Condicionais
                        </a>
                        <div class="dropdown-menu">
                            <div class="dropdown-submenu">
                                <a href="#" class="dropdown-item dropdown-toggle">Estrutura Se</a>
                                <div class="dropdown-menu">
                                    <a href="${baseurl}condicionais/estruturaSe/ATIVIDADE1/codigo.html" class="dropdown-item">Atividade 1</a>
                                    <a href="${baseurl}condicionais/estruturaSe/ATIVIDADE2/codigo.html" class="dropdown-item">Atividade 2</a>
                                </div>
                            </div>
                            <div class="dropdown-submenu">
                                <a href="#" class="dropdown-item dropdown-toggle">Estrutura Caso</a>
                                <div class="dropdown-menu">
                                    <a href="${baseurl}condicionais/estruturaCaso/atividade1/codigo.html" class="dropdown-item">Atividade 1</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" class="dropdown-trigger">
                            <i class="fas fa-sync-alt"></i>
                            Repetição
                        </a>
                        <div class="dropdown-menu">
                            <div class="dropdown-submenu">
                                <a href="#" class="dropdown-item dropdown-toggle">Enquanto</a>
                                <div class="dropdown-menu">
                                    <a href="${baseurl}repeticao/estruturaEnquanto/atividade1/codigo.html" class="dropdown-item">Atividade 1</a>
                                    <a href="${baseurl}repeticao/estruturaEnquanto/atividade2/codigo.html" class="dropdown-item">Atividade 2</a>
                                    <a href="${baseurl}repeticao/estruturaEnquanto/atividade3/codigo.html" class="dropdown-item">Atividade 3</a>
                                </div>
                            </div>
                            <div class="dropdown-submenu">
                                <a href="#" class="dropdown-item dropdown-toggle">Faça Enquanto</a>
                                <div class="dropdown-menu">
                                    <a href="${baseurl}repeticao/estruturaFacaEnquanto/atividade1/codigo.html" class="dropdown-item">Atividade 1</a>
                                    <a href="${baseurl}repeticao/estruturaFacaEnquanto/atividade2/codigo.html" class="dropdown-item">Atividade 2</a>
                                    <a href="${baseurl}repeticao/estruturaFacaEnquanto/atividade3/codigo.html" class="dropdown-item">Atividade 3</a>
                                </div>
                            </div>
                            <div class="dropdown-submenu">
                                <a href="#" class="dropdown-item dropdown-toggle">Para</a>
                                <div class="dropdown-menu">
                                    <a href="${baseurl}repeticao/estruturaPara/atividade1/codigo.html" class="dropdown-item">Atividade 1</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" class="dropdown-trigger">
                            <i class="fas fa-table"></i>
                            Vetores
                        </a>
                        <div class="dropdown-menu">
                            <div class="dropdown-submenu">
                                <a href="#" class="dropdown-item dropdown-toggle">Vetores</a>
                                <div class="dropdown-menu">
                                    <a href="${baseurl}vetores/vetores/atividade1/codigo.html" class="dropdown-item">Atividade 1</a>
                                    <a href="${baseurl}vetores/vetores/atividade2/codigo.html" class="dropdown-item">Atividade 2</a>
                                    <a href="${baseurl}vetores/vetores/atividade3/codigo.html" class="dropdown-item">Atividade 3</a>
                                    <a href="${baseurl}vetores/vetores/atividade4/codigo.html" class="dropdown-item">Atividade 4</a>
                                </div>
                            </div>
                            <div class="dropdown-submenu">
                                <a href="#" class="dropdown-item dropdown-toggle">Matrizes</a>
                                <div class="dropdown-menu">
                                    <a href="${baseurl}vetores/matrizes/atividade1/codigo.html" class="dropdown-item">Atividade 1</a>
                                    <a href="${baseurl}vetores/matrizes/atividade2/codigo.html" class="dropdown-item">Atividade 2</a>
                                    <a href="${baseurl}vetores/matrizes/atividade3/codigo.html" class="dropdown-item">Atividade 3</a>
                                    <a href="${baseurl}vetores/matrizes/atividade4/codigo.html" class="dropdown-item">Atividade 4</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
`;
