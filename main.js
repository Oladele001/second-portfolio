lucide.createIcons();

const toggleButton = document.getElementById('toggleButton');
const icon = document.getElementById('icon');
const body = document.body;

toggleButton.addEventListener('click', () => {
  // Toggle dark mode class
  body.classList.toggle('bg-white');
  body.classList.toggle('text-black');
  body.classList.toggle('bg-black');
  body.classList.toggle('text-white');

  // Change icon
  const isLightMode = body.classList.contains('bg-white');
  icon.setAttribute('data-lucide', isLightMode ? 'sun' : 'moon');
  lucide.createIcons();
});

const circle = document.getElementById('circle');
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

circle.addEventListener('mousedown', function(e) {
  isDragging = true;
  offsetX = e.clientX - circle.offsetLeft;
  offsetY = e.clientY - circle.offsetTop;
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    circle.style.left = (e.clientX - offsetX) + 'px';
    circle.style.top = (e.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});


const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});