function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data )=> displayCategories(data.categories));
}

function displayCategories(categories) {
  const categoriesButton=document.getElementById("categories-button");
     for(let cot of categories)
     {
      console.log(cot)
      const categoriesDiv=document.createElement('div');
      categoriesDiv.innerHTML=`
        <button class="btn btn-sm mr-5  hover:bg-red-800 hover:text-white">${cot.category}</button>
      `
      categoriesButton.appendChild(categoriesDiv);

     }

}
loadCategories();

// category_id: '1001', category: 'Music