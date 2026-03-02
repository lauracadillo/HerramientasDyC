function cambiarUsuario(usuario) {
    if (!usuario) return;

    const links = document.querySelectorAll('a[href^="vscode://file/C:/Users/"]');

    links.forEach(link => {
        const hrefActual = link.getAttribute('href');
        const nuevoHref = hrefActual.replace(
            /C:\/Users\/[^/]+\//,
            `C:/Users/${usuario}/`
        );
        link.setAttribute('href', nuevoHref);
    });

    // Actualizar estado visual activo
    document.querySelectorAll('.user-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const btnActivo = [...document.querySelectorAll('.user-btn')]
        .find(b => b.getAttribute('onclick')?.includes(usuario));

    if (btnActivo) btnActivo.classList.add('active');
}

function toggleSidebar() {
    const open = document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open', open);
    document.getElementById('overlay').classList.toggle('open', open);
}
    
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });
function toggleFaq(el) { el.parentElement.classList.toggle('open'); }