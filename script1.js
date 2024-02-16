const hearts = document.querySelectorAll('.heart-animation');

hearts.forEach(heart => {
  const x = Math.random() * 100 - 50;
  const y = Math.random() * 100 - 50;
  const scale = Math.random() * 2 + 0.5;
  const rotate = Math.random() * 360 - 180;

  heart.setAttribute('data-x', x);
  heart.setAttribute('data-y', y);
  heart.setAttribute('data-scale', scale);
  heart.setAttribute('data-rotate', rotate);
});