const dots = document.querySelectorAll('.dot');
const cards = document.querySelectorAll('.producto-card');
const toast = document.getElementById('toast');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    const filtro = dot.dataset.filter;
    cards.forEach(card => {
      card.style.display = (filtro === 'todos' || card.dataset.category === filtro) ? 'block' : 'none';
    });
  });
});

document.querySelectorAll('.btn-card').forEach(btn => {
  btn.addEventListener('click', () => {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  });
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Gracias por escribir a VINEA. Tu mensaje fue enviado correctamente.');
  e.target.reset();
});
