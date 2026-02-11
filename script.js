document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = 'var(--accent)';
  });
});
