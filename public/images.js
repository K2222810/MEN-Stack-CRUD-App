// Available pizza images from assets folder
const pizzaImages = [
  { name: 'Margherita', path: '/assets/margherita.jpg' },
  { name: 'Pepperoni', path: '/assets/pepperoni.jpg' },
  { name: 'Vegetarian', path: '/assets/vegetarian.jpg' },
  { name: 'Hawaiian', path: '/assets/hawaiian.jpg' },
  { name: 'BBQ Chicken', path: '/assets/bbq-chicken.jpg' },
  { name: 'Four Cheese', path: '/assets/four-cheese.jpg' },
  { name: 'Meat Lovers', path: '/assets/meat-lovers.jpg' },
  { name: 'Seafood', path: '/assets/seafood.jpg' },
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
