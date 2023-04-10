class Category {

    categoryMain() {
        wrapper.className += ' wrapper__game';
        const categoryBlock = document.createElement('div');
        categoryBlock.className = 'container__category';
        categoryBlock.innerHTML = `
            <div class="category__main" id="categoryChoice">
                <ul class="category__main_stars">
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_empty.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                </ul>
                <picture class="category__main_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice.png" alt="Категория Отбор">
                </picture>
                <div class="category__main_title">
                    <h2>Отбор</h2>
                </div>
            </div>
            <div class="category__main" id="categoryPrepare">
                <ul class="category__main_stars">
                    
                </ul>
                <picture class="category__main_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catPrepare.png" alt="Категория Подготовка">
                </picture>
                <div class="category__main_title">
                    <h3>Подготовка</h3>
                </div>
            </div>
            <div class="category__main" id="categoryFlight">
                <ul class="category__main_stars">
                    
                </ul>
                <picture class="category__main_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catFlight.png" alt="Категория Полет">
                </picture>
                <div class="category__main_title">
                    <h3>Полет</h3>
                </div>
            </div>
        `;
        container.appendChild(categoryBlock);
    }
}