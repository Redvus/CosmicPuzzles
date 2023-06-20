class Question {

    questionBlock() {
        wrapper.className += ' wrapper__game';
        const containerWrapper = document.createElement('div'),
            questionCategoryTitle = document.createElement('div')
        ;
        containerWrapper.className = 'container__wrapper container__wrapper_category';
        questionCategoryTitle.className = 'container__title container__title_category';
        questionCategoryTitle.innerHTML = `<h1>Подготовка</h1>`;
        containerWrapper.innerHTML = `
            <div class="question__block">
                <div class="question__block_imageblock">
                    <h3>Белка, стрелка и ...</h3>
                    <div class="question__block_image">
                        <p>Кто из животных побывал первым в космосе?</p>
                        <img src="assets/games/cosmicpuzzles/images/cp_questImageBack_1.png" alt="">
                    </div>
                </div>
                <ul class="question__block_list">
                    <li><a href="javascript:void(0);" id="quest_1">Дезик и Цыган</a></li>
                    <li><a href="javascript:void(0);" id="quest_2">Белка и Стрелка</a></li>
                    <li><a href="javascript:void(0);" id="quest_3">Лайка</a></li>
                </ul>
            </div>
        `;
        container.appendChild(containerWrapper);
        containerWrapper.appendChild(questionCategoryTitle);
    }
}