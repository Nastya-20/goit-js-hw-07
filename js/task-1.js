// Отримуємо всі елементи li з класом 'item' у списку ul з id 'categories'
const categories = document.querySelectorAll('#categories .item');

// Виводимо в консоль кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Перебираємо кожен елемент li з класом 'item'
categories.forEach(category => {
  // Знаходимо та виводимо в консоль текст заголовка (тег <h2>)
  const categoryName = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);
  
  // Знаходимо та виводимо в консоль кількість елементів (теги <li>) у вкладеному списку
  const elementsCount = category.querySelectorAll('ul li').length;
  console.log(`Elements: ${elementsCount}`);
});
