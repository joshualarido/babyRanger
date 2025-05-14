// Basic interactivity
document.querySelectorAll('.sidebar li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.sidebar li').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    alert(`You clicked on "${item.textContent}"`);
  });
});
