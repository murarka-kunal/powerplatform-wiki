/* PowerPlatform.wiki — Footer share buttons for MkDocs pages */
function injectShareButtons() {
  var existing = document.querySelector('.pp-footer-share');
  if (existing) existing.remove();

  var url   = encodeURIComponent(window.location.href);
  var title = encodeURIComponent(document.title);
  var target = document.querySelector('.md-footer-meta__inner');
  if (!target) return;

  var row = document.createElement('div');
  row.className = 'pp-footer-share';
  row.innerHTML =
    '<span class="pp-footer-built">Built by ' +
      '<a href="https://www.linkedin.com/in/kunalmurarka/" target="_blank" rel="noopener">Kunal Murarka</a>' +
      '<a href="https://www.linkedin.com/in/kunalmurarka/" target="_blank" rel="noopener" class="pp-share-btn" title="Kunal Murarka on LinkedIn"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11C15.18 12.11 15.75 12.68 15.75 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg></a>' +
    '</span>' +
    '<span class="pp-footer-share-label">Share this page:' +
      '<a href="https://x.com/intent/tweet?url=' + url + '&text=' + title + '" target="_blank" rel="noopener" class="pp-share-btn" title="Share on X"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.732-8.876L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>' +
      '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + url + '" target="_blank" rel="noopener" class="pp-share-btn" title="Share on LinkedIn"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11C15.18 12.11 15.75 12.68 15.75 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg></a>' +
    '</span>';

  target.insertBefore(row, target.firstChild);
}

/* Handles both initial load and MkDocs Material instant navigation */
if (typeof document$ !== 'undefined') {
  document$.subscribe(injectShareButtons);
} else {
  document.addEventListener('DOMContentLoaded', injectShareButtons);
}
