const getMealBtn = document.getElementById('get-meal');
const mealContent = document.getElementById('meal');

getMealBtn.addEventListener('click', function () {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      createMeal(data.meals[0]);
    });
});

const createMeal = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  let ingredientList = ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join('');

  const innerHtml = `<div class="row">
      <div class="columns five">
        <img src="${meal.strMealThumb}"  alt="Meal Image"/>
        ${
          meal.strCategory
            ? `<p><strong>Category : </strong>${meal.strCategory}</p>`
            : ''
        }
        ${meal.strArea ? `<p><strong>Area : </strong>${meal.strArea}</p>` : ''}
        ${
          meal.strTags
            ? `<p><strong>Tags : </strong>${meal.strTags
                .split(',')
                .join(',')}</p>`
            : ''
        }
        <h5>Ingredients: </h5>
        <ul>
          ${ingredientList}
        </ul>
      </div>
      <div class="columns seven">
          <h4>${meal.strMeal}</h4>
          <p>${meal.strInstructions}</p>
      </div>
  </div>`;
  mealContent.innerHTML = innerHtml;
};
