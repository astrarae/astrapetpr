export function createOverlay(content) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay-layer';
  if (content) {
    overlay.appendChild(content);
  }
  document.body.appendChild(overlay);
  return overlay;
}
