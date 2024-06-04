const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);
  
  const elementsCount = category.querySelectorAll('ul li').length;
  console.log(`Elements: ${elementsCount}`);
});
