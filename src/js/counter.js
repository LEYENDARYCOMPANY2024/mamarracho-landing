// Contador interactivo de las 10.000 galletas
(function () {
  var el = document.getElementById('contador');
  var fmt = function (n) { return n.toLocaleString('es-AR'); };
  var meta = parseInt(el.dataset.meta, 10);

  // Para actualizar el tanque desde la consola o desde tu backend: setCookiesVendidas(1500)
  window.setCookiesVendidas = function (n) {
    n = Math.max(0, Math.min(meta, n));
    var pct = Math.round((n / meta) * 100);
    document.getElementById('nivel').style.width = pct + '%';
    document.getElementById('porcentaje').textContent = pct + '%';
    document.getElementById('barra').setAttribute('aria-valuenow', n);
    var out = document.getElementById('vendidas'), start = 0, t0 = null;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || n === 0) { out.textContent = fmt(n); return; }
    (function paso(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1400, 1);
      out.textContent = fmt(Math.round(start + (n - start) * p));
      if (p < 1) requestAnimationFrame(paso);
    })(performance.now());
  };
  document.getElementById('meta').textContent = fmt(meta);
  setCookiesVendidas(parseInt(el.dataset.vendidas, 10) || 0);
})();
