class Question {

    questionBlock(
        questionTitleCategory,
        questionTitle,
        questionQuest,
        questionVariant1,
        questionVariant2,
        questionVariant3) {
        // wrapper.className += ' wrapper__game';
        const containerWrapper = document.createElement('div'),
            questionCategoryTitle = document.createElement('div')
        ;
        containerWrapper.className = 'container__wrapper container__wrapper_category';
        questionCategoryTitle.className = 'container__title container__title_category';
        questionCategoryTitle.innerHTML = `<h1>${questionTitleCategory}</h1>`;
        containerWrapper.innerHTML = `
            <div class="question__block">
                <div class="question__block_imageblock">
                    <h3>${questionTitle}</h3>
                    <div class="question__block_image">
                        <p>${questionQuest}</p>
                        <img src="assets/games/cosmicpuzzles/images/cp_questImageBack_1.png" alt="Изображение по вопросом">
                    </div>
                </div>
                <ul class="question__block_list">
                    <li><a href="javascript:void(0);" id="answerVar_1">${questionVariant1}</a></li>
                    <li><a href="javascript:void(0);" id="answerVar_2">${questionVariant2}</a></li>
                    <li><a href="javascript:void(0);" id="answerVar_3">${questionVariant3}</a></li>
                </ul>
            </div>
        `;
        container.appendChild(containerWrapper);
        containerWrapper.appendChild(questionCategoryTitle);
    }
}