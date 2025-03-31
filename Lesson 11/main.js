//  #HmvAfRQM
//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі кошики. Відобразити всі поля кожного кошика.
const cardsContainer = document.getElementById('section');

fetch('https://dummyjson.com/carts?limit=50')
    .then(response => response.json())
    .then(data => {
        const {carts} = data;
        carts.forEach(cart => {
            const cartCard = document.createElement('div');
            cartCard.classList.add('cart-container');
            
            const cartHeader = document.createElement('h2');
            cartHeader.innerText = `Корзина #${cart.id}`;
            
           
            const userInfo = document.createElement('h3');
            userInfo.innerText = `Пользователь: ${cart.userId}`;
            userInfo.classList.add('user-info');
            
    
            const productsCount = document.createElement('h3');
            productsCount.innerText = `Количество товаров: ${cart.totalProducts}`;
            productsCount.classList.add('count-info');
            
           
            const totalSum = document.createElement('h3');
            totalSum.innerText = `Общая сумма: $${cart.total}`;
            totalSum.classList.add('total-info');
            
            
            const quantityInfo = document.createElement('h3');
            quantityInfo.innerText = `Всего единиц: ${cart.totalQuantity}`;
            quantityInfo.classList.add('quantity-info');
            
           
            const discountInfo = document.createElement('h3');
            discountInfo.innerText = `Сумма со скидкой: $${cart.discountedTotal}`;
            discountInfo.classList.add('discount-info');
            
            
            const productsWrapper = document.createElement('div');
            productsWrapper.classList.add('products-wrapper');
            productsWrapper.innerHTML = '<h4>Список товаров:</h4>';
            
           
            cart.products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                
                const productId = document.createElement('p');
                productId.innerText = `ID: ${product.id}`;
                productId.classList.add('product-id');
                
                const productTitle = document.createElement('h3');
                productTitle.innerText = product.title;
                productTitle.classList.add('product-title');
                
                const productImage = document.createElement('img');
                productImage.src = product.thumbnail;
                productImage.classList.add('product-image');
                
                const productPrice = document.createElement('p');
                productPrice.innerText = `Цена: $${product.price}`;
                productPrice.classList.add('product-price');
                
                const productQuantity = document.createElement('p');
                productQuantity.innerText = `Количество: ${product.quantity}`;
                productQuantity.classList.add('product-quantity');
                
                const productTotal = document.createElement('p');
                productTotal.innerText = `Сумма: $${product.total}`;
                productTotal.classList.add('product-total');
                
                const productDiscounted = document.createElement('p');
                productDiscounted.innerText = `Со скидкой: $${product.discountedTotal}`;
                productDiscounted.classList.add('product-discounted');
                
                const productDiscount = document.createElement('p');
                productDiscount.innerText = `Скидка: ${product.discountPercentage}%`;
                productDiscount.classList.add('product-discount');
                
                const spacer = document.createElement('hr');
                
                productItem.append(productId, productTitle, productImage, productPrice, 
                                  productQuantity, productTotal, productDiscounted, 
                                  productDiscount, spacer);
                productsWrapper.appendChild(productItem);
            });
            
            const divider = document.createElement('hr');
            divider.classList.add('cart-divider');
            
        
            cartCard.append(cartHeader, userInfo, productsCount, totalSum, 
                           quantityInfo, discountInfo, productsWrapper, divider);
            cardsContainer.appendChild(cartCard);
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных корзин:', error);
        cardsContainer.innerHTML = '<p>Не удалось загрузить данные корзин</p>';
    });


//   #whXxOBlYS0H
//   - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

const recipesContainer = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes?limit=50')
    .then(response => response.json())
    .then(data => {
        const {recipes} = data;
        recipes.forEach(recipe => {
        
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            
           
            const recipeId = document.createElement('h3');
            recipeId.innerText = `Рецепт #${recipe.id}`;
            recipeId.classList.add('recipe-id');
            
           
            const recipeName = document.createElement('h2');
            recipeName.innerText = recipe.name;
            recipeName.classList.add('recipe-name');
            
           
            const cuisineType = document.createElement('h3');
            cuisineType.innerText = `Кухня: ${recipe.cuisine}`;
            cuisineType.classList.add('cuisine-type');
            
          
            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeImage.classList.add('image');
            
            
            const ingredientsList = document.createElement('ul');
            ingredientsList.classList.add('ingredients-list');
            
            const ingredientsTitle = document.createElement('h3');
            ingredientsTitle.innerText = 'Ингредиенты:';
            ingredientsList.appendChild(ingredientsTitle);
            
            recipe.ingredients.forEach(ingredient => {
                const ingredientItem = document.createElement('li');
                ingredientItem.classList.add('ingredient');
                ingredientItem.innerText = ingredient;
                ingredientsList.appendChild(ingredientItem);
            });
            
         
            const instructionsList = document.createElement('ul');
            instructionsList.classList.add('instructions-list');
            
            const instructionsTitle = document.createElement('h3');
            instructionsTitle.innerText = 'Инструкции:';
            instructionsList.appendChild(instructionsTitle);
            
            recipe.instructions.forEach(instruction => {
                const instructionItem = document.createElement('li');
                instructionItem.classList.add('instruction');
                instructionItem.innerText = instruction;
                instructionsList.appendChild(instructionItem);
            });
            
          
            const prepTime = document.createElement('p');
            prepTime.innerText = `Время подготовки: ${recipe.prepTimeMinutes} мин.`;
            prepTime.classList.add('size');
            
            const cookTime = document.createElement('p');
            cookTime.innerText = `Время готовки: ${recipe.cookTimeMinutes} мин.`;
            cookTime.classList.add('size');
            
            const servings = document.createElement('p');
            servings.innerText = `Порций: ${recipe.servings}`;
            servings.classList.add('size');
            
            const difficulty = document.createElement('p');
            difficulty.innerText = `Сложность: ${recipe.difficulty}`;
            difficulty.classList.add('size');
            
            const calories = document.createElement('p');
            calories.innerText = `Калорий на порцию: ${recipe.caloriesPerServing}`;
            calories.classList.add('size');
            
         
            const tagsList = document.createElement('ul');
            tagsList.classList.add('tags-list');
            
            const tagsTitle = document.createElement('h3');
            tagsTitle.innerText = 'Теги:';
            tagsList.appendChild(tagsTitle);
            
            recipe.tags.forEach(tag => {
                const tagItem = document.createElement('li');
                tagItem.classList.add('tags');
                tagItem.innerText = tag;
                tagsList.appendChild(tagItem);
            });
            
          
            const userId = document.createElement('p');
            userId.innerText = `ID пользователя: ${recipe.userId}`;
            userId.classList.add('size');
            
            const rating = document.createElement('p');
            rating.innerText = `Рейтинг: ${recipe.rating}`;
            rating.classList.add('size');
            
            const reviewCount = document.createElement('p');
            reviewCount.innerText = `Количество отзывов: ${recipe.reviewCount}`;
            reviewCount.classList.add('size');
            
            const mealTypeList = document.createElement('ul');
            mealTypeList.classList.add('meal-type-list');
            
            const mealTypeTitle = document.createElement('h3');
            mealTypeTitle.innerText = 'Тип блюда:';
            mealTypeList.appendChild(mealTypeTitle);
            
            recipe.mealType.forEach(type => {
                const typeItem = document.createElement('li');
                typeItem.classList.add('tags');
                typeItem.innerText = type;
                mealTypeList.appendChild(typeItem);
            });
            
            const divider = document.createElement('hr');
            
        
            recipeCard.append(recipeId, recipeName, cuisineType, recipeImage, 
                             ingredientsList, instructionsList, prepTime, cookTime, 
                             servings, difficulty, calories, tagsList, userId, 
                             rating, reviewCount, mealTypeList, divider);
            recipesContainer.appendChild(recipeCard);
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных рецептов:', error);
        recipesContainer.innerHTML = '<p>Не удалось загрузить данные рецептов</p>';
    });
