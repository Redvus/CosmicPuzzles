class ChoiceCategory {

    choiceCategory(choiceCategoryName) {
        wrapper.className += ' wrapper__game';
        container.className += ' container__wrapper';
        const choiceCategoryTitle = document.createElement('div');
        choiceCategoryTitle.className = 'container__title';
        choiceCategoryTitle.innerHTML = `
            <h1>${choiceCategoryName}</h1>
        `;
        container.innerHTML = `
            <div class="category__element category__element_1" id="categorySub_1">
                <ul class="category__element_stars">
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_empty.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                </ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_1.png" alt="Категория ${choiceCategoryName}. Первый вопрос">
                </picture>
            </div>
            <div class="category__element category__element_2" id="categorySub_2">
                <ul class="category__element_stars">
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_empty.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                </ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_2.png" alt="Категория ${choiceCategoryName}. Второй вопрос">
                </picture>
            </div>
            <div class="category__element category__element_3" id="categorySub_3">
                <ul class="category__element_stars">
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_empty.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                </ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_3.png" alt="Категория ${choiceCategoryName}. Третий вопрос">
                </picture>
            </div>
            <div class="category__element category__element_4" id="categorySub_4">
                <ul class="category__element_stars">
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_empty.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                </ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_4.png" alt="Категория ${choiceCategoryName}. Четвертый вопрос">
                </picture>
            </div>
            <div class="category__element category__element_5" id="categorySub_5">
                <ul class="category__element_stars">
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_empty.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                </ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_5.png" alt="Категория ${choiceCategoryName}. Пятый вопрос">
                </picture>
            </div>
            <div class="category__element category__element_6" id="categorySub_6">
                <ul class="category__element_stars">
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_empty.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                </ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_6.png" alt="Категория ${choiceCategoryName}. Шестой вопрос">
                </picture>
            </div>
            <div class="category__element category__element_7" id="categorySub_7">
                <ul class="category__element_stars">
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_empty.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                </ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_7.png" alt="Категория ${choiceCategoryName}. Седьмой вопрос">
                </picture>
            </div>
            <div class="category__element category__element_8" id="categorySub_8">
                <ul class="category__element_stars">
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_empty.png" alt=""></li>
                    <li><img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt=""></li>
                </ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_8.png" alt="Категория ${choiceCategoryName}. Восьмой вопрос">
                </picture>
            </div>
        `;

        container.appendChild(choiceCategoryTitle);
    }
}