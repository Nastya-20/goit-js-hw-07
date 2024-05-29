// Отримуємо посилання на елементи input та span
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// Додаємо обробник події 'input' на елемент input
input.addEventListener('input', () => {
  // Очищуємо значення в input по краях від пробілів
  const trimmedValue = input.value.trim();
  
  // Якщо значення не порожнє, підставляємо його в span, інакше підставляємо 'Anonymous'
  output.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});
