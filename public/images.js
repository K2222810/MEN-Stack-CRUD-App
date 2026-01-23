// Available pizza images from assets folder
const pizzaImages = [
  { name: 'Argentinian Fugazza', path: '/assets/argentinian-fugazza-pizza.jpg' },
  { name: 'Brazilian Pizza', path: '/assets/brazilian-pizza.jpg' },
  { name: 'California Pizza', path: '/assets/california-pizza.jpg' },
  { name: 'Canadian Quebecois', path: '/assets/canadian-quebecois-pizza.jpg' },
  { name: 'Chicago Deep Dish', path: '/assets/chicago-deep-dish-pizza.jpg' },
  { name: 'Detroit Pizza', path: '/assets/detroit-pizza.jpg' },
  { name: 'Hawaiian Pizza', path: '/assets/hawaiian-pizza.jpg' },
  { name: 'Miami Cuban Pizza', path: '/assets/miami-cuban-pizza.jpg' },
  { name: 'Milan Style', path: '/assets/milan-style.jpg' },
  { name: 'Neapolitan Pizza', path: '/assets/neapolitan-pizza.jpg' },
  { name: 'New York Pizza', path: '/assets/new-york-pizza.jpg' },
  { name: 'Roman Pizza', path: '/assets/roman-pizza.jpg' },
  { name: 'Sicilian Pizza', path: '/assets/sicilian-pizza.jpg' },
  { name: 'Thai Pizza', path: '/assets/thai-pizza.jpg' },
];

function initImageSelector() {
  const imageSelect = document.getElementById('imageSelect');
  const imagePreview = document.getElementById('imagePreview');
  const imageInput = document.getElementById('image');

  if (imageSelect) {
    imageSelect.addEventListener('change', function() {
      const selectedPath = this.value;
      if (selectedPath) {
        imageInput.value = selectedPath;
        if (imagePreview) {
          imagePreview.innerHTML = `<img src="${selectedPath}" alt="Pizza" style="max-width: 200px; border-radius: 5px; margin-top: 10px;" />`;
        }
      } else {
        imageInput.value = '';
        if (imagePreview) {
          imagePreview.innerHTML = '';
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initImageSelector);
