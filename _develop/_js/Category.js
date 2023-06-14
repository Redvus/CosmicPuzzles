class Category {

    categoryMain() {
        wrapper.className += ' wrapper__game';
        const categoryBlock = document.createElement('div');
        categoryBlock.className = 'container__category';
        categoryBlock.innerHTML = `
            <div class="category__main" id="categoryChoice">
                <div class="category__main_stars">
                    <picture>
                        <img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt="Количество набранных очков">
                    </picture>
                    <div class="category__main_value">
                        <span id="progressChoiceValue"></span> / 24
                    </div>
                </div>
                <picture class="category__main_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice.png" alt="Категория Отбор">
                </picture>
                <div class="category__main_title">
                    <h3>Отбор</h3>
                </div>
            </div>
            
            <div class="category__main" id="categoryPrepare">
                <div class="category__main_stars">
                    <picture>
                        <img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt="Количество набранных очков">
                    </picture>
                    <div class="category__main_value">
                        <span id="progressPrepareValue"></span> / 24
                    </div>
                </div>
                <picture class="category__main_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catPrepare.png" alt="Категория Подготовка">
                </picture>
                <div class="category__main_title">
                    <h3>Подготовка</h3>
                </div>
            </div>
            
            <div class="category__main" id="categoryFlight">
                <div class="category__main_stars">
                    <picture>
                        <img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt="Количество набранных очков">
                    </picture>
                    <div class="category__main_value">
                        <span id="progressFlightValue"></span> / 24
                    </div>
                </div>
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

    categoryProgress(progressID, progressNameValue) {
        let progressValue = document.getElementById(progressID),
            progressBasic = 0
        ;

        if (localStorage.getItem(progressNameValue) === null) {
            localStorage.setItem(progressNameValue, JSON.stringify(progressBasic));
        } else {
            localStorage.setItem(progressNameValue, JSON.stringify(progressBasic));
            progressValue.textContent = JSON.parse(localStorage.getItem(progressNameValue));
        }
    }
}