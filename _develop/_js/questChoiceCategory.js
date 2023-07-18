let progressChoiceQuestValue_1 = 0,
    progressChoiceQuest_1_1 = 0,
    progressChoiceQuest_1_2 = 0,
    progressChoiceQuest_1_3 = 0
;

if (localStorage.getItem('progressChoiceQuest_1') === null) {
    localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestValue_1));
} else {
    progressChoiceQuestValue_1.textContent = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
}

function questionChoiceCat_1_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let progressChoiceQuest_1_1Key = 'progressChoiceQuest_1_1';
    let progressChoiceQuest_1_1Value = progressChoiceQuest_1_1;
    let answerWrightNum = 1;

    if (localStorage.getItem(progressChoiceQuest_1_1Key) === null) {
        localStorage.setItem(progressChoiceQuest_1_1Key, JSON.stringify(progressChoiceQuest_1_1Value));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Белка, Стрелка и ...', 'Кто первым из животных побывал в космосе?', 'Белка', 'Стрелка', 'Тузик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarRight = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarRight.length; i++) {
        if (answerVarRight[i] == answerVarRight[answerWrightNum]) {
            answerVarRight[i].addEventListener('click', () => {
                let progressChoiceQuest_1_1 = JSON.parse(localStorage.getItem(progressChoiceQuest_1_1Key));
                let progressChoiceQuestSum_1_1 = progressChoiceQuest_1_1 + 1;
                let progressChoiceQuestSum_1 = progressChoiceQuestSum_1_1;

                let progressChoiceQuestLeft_1_1 =  1;
                let progressChoiceQuestLeftWrong_1_1 = progressChoiceQuestLeft_1_1 - 1;

                localStorage.setItem('progressChoiceQuest_1_1', JSON.stringify(progressChoiceQuestSum_1_1));
                localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestSum_1));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_1));
                localStorage.setItem('progressChoiceQuestLeft_1_1', JSON.stringify(progressChoiceQuestLeftWrong_1_1));
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Конечно же стрелка, потому как это только и это есть правильный ответ, а не другой');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext');
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                questionChoiceCat_1_2();
            }
        });
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                choiceCategoryDev();
                lockSubQuestChoice();
            }
        });
    });
}

function questionChoiceCat_1_2() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let progressChoiceQuest_1_2Key = 'progressChoiceQuest_1_2';
    let progressChoiceQuest_1_2Value = progressChoiceQuest_1_2;
    let answerWrightNum = 0;

    if (localStorage.getItem(progressChoiceQuest_1_2Key) === null) {
        localStorage.setItem(progressChoiceQuest_1_2Key, JSON.stringify(progressChoiceQuest_1_2Value));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Белка, Стрелк', 'Кто первым из животных побывал в космосе?', 'Бе', 'Стр', 'Тузик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarRight = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarRight.length; i++) {
        if (answerVarRight[i] == answerVarRight[answerWrightNum]) {
            answerVarRight[i].addEventListener('click', () => {
                let progressChoiceQuest_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
                let progressChoiceQuestSum_1_2 = progressChoiceQuest_1_2Value + 1;
                let progressChoiceQuestSum_1 = progressChoiceQuest_1 + progressChoiceQuestSum_1_2;
                localStorage.setItem(progressChoiceQuest_1_2Key, JSON.stringify(progressChoiceQuestSum_1_2));
                localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestSum_1));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_1));
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Конечно же стрелка, потому как это только');
    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext');
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                questionChoiceCat_1_3();
            }
        });
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                choiceCategoryDev();
                lockSubQuestChoice();
            }
        });
    });
}

function questionChoiceCat_1_3() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let progressChoiceQuest_1_3Key = 'progressChoiceQuest_1_3';
    let progressChoiceQuest_1_3Value = progressChoiceQuest_1_3;
    let answerWrightNum = 0;

    if (localStorage.getItem(progressChoiceQuest_1_3Key) === null) {
        localStorage.setItem(progressChoiceQuest_1_3Key, JSON.stringify(progressChoiceQuest_1_3Value));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Белyyu5656', 'Кто первым из животных побсмосе?', 'asdas', 'ghfghg', 'jkjkh');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarRight = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarRight.length; i++) {
        if (answerVarRight[i] == answerVarRight[answerWrightNum]) {
            answerVarRight[i].addEventListener('click', () => {
                let progressChoiceQuest_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
                let progressChoiceQuestSum_1_3 = progressChoiceQuest_1_3Value + 1;
                let progressChoiceQuestSum_1 = progressChoiceQuest_1 + progressChoiceQuestSum_1_3;
                localStorage.setItem(progressChoiceQuest_1_3Key, JSON.stringify(progressChoiceQuestSum_1_3));
                localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestSum_1));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_1));
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Конечно же стрелка, потому как это только');
    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext');
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                choiceCategoryDev();
                lockSubQuestChoice();
            }
        });
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                choiceCategoryDev();
                lockSubQuestChoice();
            }
        });
    });
}