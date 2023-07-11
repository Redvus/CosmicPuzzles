

function questionPrepareCat_1() {
    let questPrepareBlock = new Question();
    let questArrowBack = new ArrowBack();

    questPrepareBlock.questionBlock('Подготовка', 'Белка, Стрелка и ...', 'Кто первым из животных побывал в космосе?', 'Белка', 'Стрелка', 'Тузик');

    // Стрелка назад в категорию
    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                prepareCategoryDev();
            }
        });
    });
}