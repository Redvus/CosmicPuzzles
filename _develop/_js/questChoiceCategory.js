let progressChoiceQuestValue_1 = 0;
let progressChoiceQuest_1_1 = 0;

if (localStorage.getItem('progressChoiceQuest_1') === null) {
    localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestValue_1));
} else {
    progressChoiceQuestValue_1.textContent = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
}

function questionChoiceCat_1_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowBack();

    if (localStorage.getItem('progressChoiceQuest_1_1') === null) {
        localStorage.setItem('progressChoiceQuest_1_1', JSON.stringify(progressChoiceQuest_1_1));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Белка, Стрелка и ...', 'Кто первым из животных побывал в космосе?', 'Белка', 'Стрелка', 'Тузик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarRight = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarRight.length; i++) {
        if (answerVarRight[i] == answerVarRight[1]) {
            answerVarRight[i].addEventListener('click', () => {
                let progressChoiceQuest_1_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_1'));
                let progressChoiceQuestSum_1_1 = progressChoiceQuest_1_1 + 1;
                let progressChoiceQuestSum_1 = progressChoiceQuestSum_1_1;
                localStorage.setItem('progressChoiceQuest_1_1', JSON.stringify(progressChoiceQuestSum_1_1));
                localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestSum_1));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_1));
            });
        }
    }

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
                choiceCategoryDev();
            }
        });
    });
}