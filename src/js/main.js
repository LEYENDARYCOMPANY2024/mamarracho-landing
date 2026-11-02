// Interacciones generales
(function () {
  var btn = document.getElementById('compartir'), aviso = document.getElementById('aviso');
  var menuBtn = document.getElementById('menu-movil'), menu = document.getElementById('navegacion-principal');

  btn.addEventListener('click', function () {
    var url = location.href;
    if (navigator.share) { navigator.share({ title: 'Mamarracho!', url: url }).catch(function () {}); return; }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function () { aviso.textContent = 'Link copiado. ¡Compartilo!'; })
        .catch(function () { aviso.textContent = 'No pudimos copiar el link. Copialo desde la barra del navegador.'; });
    } else { aviso.textContent = 'Copiá el link desde la barra del navegador.'; }
  });

  function cerrarMenu() {
    menu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Abrir menú');
  }

  menuBtn.addEventListener('click', function () {
    var abierto = menuBtn.getAttribute('aria-expanded') === 'true';
    menu.classList.toggle('hidden', abierto);
    menuBtn.setAttribute('aria-expanded', String(!abierto));
    menuBtn.setAttribute('aria-label', abierto ? 'Abrir menú' : 'Cerrar menú');
  });

  menu.querySelectorAll('a').forEach(function (enlace) {
    enlace.addEventListener('click', cerrarMenu);
  });

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') cerrarMenu();
  });
})();
