/* PowerPlatform.wiki — Footer share buttons for MkDocs pages */
function injectShareButtons() {
  var existing = document.querySelector('.pp-footer-share');
  if (existing) existing.remove();

  var url = encodeURIComponent(window.location.href);
  var target = document.querySelector('.md-footer-meta__inner');
  if (!target) return;

  var row = document.createElement('div');
  row.className = 'pp-footer-share';
  row.innerHTML =
    '<span class="pp-footer-built">Built by ' +
      '<a href="https://www.linkedin.com/in/kunalmurarka/" target="_blank" rel="noopener">Kunal Murarka</a>' +
      '<a href="https://www.linkedin.com/in/kunalmurarka/" target="_blank" rel="noopener" class="pp-share-btn" title="LinkedIn Profile">in</a>' +
    '</span>' +
    '<span class="pp-footer-share-label">Share this page:' +
      '<a href="https://twitter.com/intent/tweet?url=' + url + '" target="_blank" rel="noopener" class="pp-share-btn" title="Share on X">𝕏</a>' +
      '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + url + '" target="_blank" rel="noopener" class="pp-share-btn" title="Share on LinkedIn">in</a>' +
    '</span>';

  target.insertBefore(row, target.firstChild);
}

/* Handles both initial load and MkDocs Material instant navigation */
if (typeof document$ !== 'undefined') {
  document$.subscribe(injectShareButtons);
} else {
  document.addEventListener('DOMContentLoaded', injectShareButtons);
}
