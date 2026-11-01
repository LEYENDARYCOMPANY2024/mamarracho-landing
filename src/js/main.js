// Interacciones generales
(function () {
  var btn = document.getElementById('compartir'), aviso = document.getElementById('aviso');
  btn.addEventListener('click', function () {
    var url = location.href;
    if (navigator.share) { navigator.share({ title: 'Mamarracho!', url: url }).catch(function () {}); return; }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function () { aviso.textContent = 'Link copiado. ¡Compartilo!'; })
        .catch(function () { aviso.textContent = 'No pudimos copiar el link. Copialo desde la barra del navegador.'; });
    } else { aviso.textContent = 'Copiá el link desde la barra del navegador.'; }
  });
})();
