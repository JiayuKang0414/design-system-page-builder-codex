(function () {
  var host = document.querySelector('.qa-tabs-c');
  if (!host) return;

  function injectVersionCStyles() {
    if (!host.shadowRoot) {
      window.requestAnimationFrame(injectVersionCStyles);
      return;
    }

    if (host.shadowRoot.querySelector('[data-tabs-version-c-styles]')) return;

    var style = document.createElement('style');
    style.setAttribute('data-tabs-version-c-styles', '');
    style.textContent = [
      '.tab-active-line {',
      '  animation: none !important;',
      '  display: block !important;',
      '  transition: none !important;',
      '}'
    ].join('\n');

    host.shadowRoot.appendChild(style);
  }

  customElements.whenDefined('umd-element-tabs').then(injectVersionCStyles);
})();
