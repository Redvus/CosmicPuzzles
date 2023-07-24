let progressChoiceQuestValue_1 = 0;

if (localStorage.getItem('progressChoiceQuest_1') === null) {
    localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestValue_1));
} else {
    progressChoiceQuestValue_1.textContent = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
}

function questionChoiceCat_1_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_1_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_1'));
    let progressChoiceQuest_1_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_2'));
    let progressChoiceQuest_1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'));

    if (localStorage.getItem('progressChoiceQuest_1_1') === null) {
        localStorage.setItem('progressChoiceQuest_1_1', JSON.stringify(progressChoiceQuest_1_1));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Белка, Стрелка и ...', 'Кто первым из животных побывал в космосе?', 'Белка', 'Стрелка', 'Тузик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarRight = [answerVar_1, answerVar_2, answerVar_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_1_1 === 0 &&
        progressChoiceQuest_1_2 === 1 &&
        progressChoiceQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1"></li>
            <li id="questionStar_2" class="fill"></li>
            <li id="questionStar_3"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 0 &&
        progressChoiceQuest_1_2 === 0 &&
        progressChoiceQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1"></li>
            <li id="questionStar_2"></li>
            <li id="questionStar_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 0 &&
        progressChoiceQuest_1_2 === 1 &&
        progressChoiceQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1"></li>
            <li id="questionStar_2" class="fill"></li>
            <li id="questionStar_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_1"></li>
            <li id="questionStar_2"></li>
            <li id="questionStar_3"></li>
        `;
    }

    const questionStar_1 = document.getElementById('questionStar_1'),
        questionStar_2 = document.getElementById('questionStar_2'),
        questionStar_3 = document.getElementById('questionStar_3')
    ;

    for (let i = 0; i < answerVarRight.length; i++) {
        if (answerVarRight[i] === answerVarRight[answerWrightNum]) {
            answerVarRight[i].addEventListener('click', () => {
                let progressChoiceQuest_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
                let progressChoiceQuestSum_1_1 = progressChoiceQuest_1_1 + 1;
                let progressChoiceQuestSum_1 = progressChoiceQuestSum_1_1 + progressChoiceQuest_1;

                // let progressChoiceQuestLeft_1_1 =  1;
                // let progressChoiceQuestLeftWrong_1_1 = progressChoiceQuestLeft_1_1 - 1;

                localStorage.setItem('progressChoiceQuest_1_1', JSON.stringify(progressChoiceQuestSum_1_1));
                localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestSum_1));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_1));
                // localStorage.setItem('progressChoiceQuestLeft_1_1', JSON.stringify(progressChoiceQuestLeftWrong_1_1));
                if (progressChoiceQuestSum_1_1 === 1) {
                    questionStar_1.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Конечно же стрелка, потому как это только и это есть правильный ответ, а не другой');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_2')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_1_1 === 0 &&
                    progressChoiceQuest_1_2 === 0 &&
                    progressChoiceQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_1_1 === 0 &&
                    progressChoiceQuest_1_2 === 1 &&
                    progressChoiceQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_1_1 === 0 &&
                    progressChoiceQuest_1_2 === 0 &&
                    progressChoiceQuest_1_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_2 === 1 && questValue_1_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_1_2 === 0) {
                    questionChoiceCat_1_2();
                } else if (questValue_1_2 === 1 && questValue_1_3 === 0) {
                    questionChoiceCat_1_3();
                }
            }
        });
        if (progressChoiceQuest_1_1 === 0 &&
            progressChoiceQuest_1_2 === 1 &&
            progressChoiceQuest_1_3 === 1) {
            gsap.to(questionStars, {
                autoAlpha: 0,
                delay: '-0.3',
                onComplete: () => {
                    wrapper.removeChild(questionStars);
                }
            });
        }
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
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });
}

function questionChoiceCat_1_2() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 0;
    let progressChoiceQuest_1_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_1'));
    let progressChoiceQuest_1_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_2'));
    let progressChoiceQuest_1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'));

    if (localStorage.getItem('progressChoiceQuest_1_2') === null) {
        localStorage.setItem('progressChoiceQuest_1_2', JSON.stringify(progressChoiceQuest_1_2));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Белка, Стрелк', 'Кто первым из животных побывал в космосе?', 'Бе', 'Стр', 'Тузик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarRight = [answerVar_1, answerVar_2, answerVar_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_1_1 === 1 &&
        progressChoiceQuest_1_2 === 0 &&
        progressChoiceQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1" class="fill"></li>
            <li id="questionStar_2"></li>
            <li id="questionStar_3"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 0 &&
        progressChoiceQuest_1_2 === 0 &&
        progressChoiceQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1"></li>
            <li id="questionStar_2"></li>
            <li id="questionStar_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 1 &&
        progressChoiceQuest_1_2 === 0 &&
        progressChoiceQuest_1_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_1" class="fill"></li>
            <li id="questionStar_2"></li>
            <li id="questionStar_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_1"></li>
            <li id="questionStar_2"></li>
            <li id="questionStar_3"></li>
        `;
    }

    const questionStar_2 = document.getElementById('questionStar_2');

    for (let i = 0; i < answerVarRight.length; i++) {
        if (answerVarRight[i] === answerVarRight[answerWrightNum]) {
            answerVarRight[i].addEventListener('click', () => {
                let progressChoiceQuest_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
                let progressChoiceQuestSum_1_2 = progressChoiceQuest_1_2 + 1;
                let progressChoiceQuestSum_1 = progressChoiceQuest_1 + progressChoiceQuestSum_1_2;
                localStorage.setItem('progressChoiceQuest_1_2', JSON.stringify(progressChoiceQuestSum_1_2));
                localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestSum_1));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_1));
                if (progressChoiceQuestSum_1_2 === 1) {
                    questionStar_2.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Конечно же стрелка, потому как это только');
    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_1_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_1')),
        questValue_1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_1_1 === 0 &&
                    progressChoiceQuest_1_2 === 0 &&
                    progressChoiceQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_1_1 === 1 &&
                    progressChoiceQuest_1_2 === 0 &&
                    progressChoiceQuest_1_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_1_1 === 0 &&
                    progressChoiceQuest_1_2 === 0 &&
                    progressChoiceQuest_1_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_1_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_1_3 === 0) {
                    questionChoiceCat_1_3();
                }
            }
        });
        if (progressChoiceQuest_1_1 === 1 &&
            progressChoiceQuest_1_2 === 0 &&
            progressChoiceQuest_1_3 === 1) {
            gsap.to(questionStars, {
                autoAlpha: 0,
                delay: '-0.3',
                onComplete: () => {
                    wrapper.removeChild(questionStars);
                }
            });
        }
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category')
    ;
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
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });
}

function questionChoiceCat_1_3() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_1_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_1'));
    let progressChoiceQuest_1_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_2'));
    let progressChoiceQuest_1_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_3'));

    if (localStorage.getItem('progressChoiceQuest_1_3') === null) {
        localStorage.setItem('progressChoiceQuest_1_3', JSON.stringify(progressChoiceQuest_1_3));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Белyyu5656', 'Кто первым из животных побсмосе?', 'asdas', 'ghfghg', 'jkjkh');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarRight = [answerVar_1, answerVar_2, answerVar_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_1_1 === 1 &&
        progressChoiceQuest_1_2 === 1 &&
        progressChoiceQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1" class="fill"></li>
            <li id="questionStar_2" class="fill"></li>
            <li id="questionStar_3"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 1 &&
        progressChoiceQuest_1_2 === 0 &&
        progressChoiceQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1" class="fill"></li>
            <li id="questionStar_2"></li>
            <li id="questionStar_3"></li>
        `;
    } else if (progressChoiceQuest_1_1 === 0 &&
        progressChoiceQuest_1_2 === 1 &&
        progressChoiceQuest_1_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_1"></li>
            <li id="questionStar_2" class="fill"></li>
            <li id="questionStar_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_1"></li>
            <li id="questionStar_2"></li>
            <li id="questionStar_3"></li>
        `;
    }

    const questionStar_3 = document.getElementById('questionStar_3');

    for (let i = 0; i < answerVarRight.length; i++) {
        if (answerVarRight[i] === answerVarRight[answerWrightNum]) {
            answerVarRight[i].addEventListener('click', () => {
                let progressChoiceQuest_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
                let progressChoiceQuestSum_1_3 = progressChoiceQuest_1_3 + 1;
                let progressChoiceQuestSum_1 = progressChoiceQuest_1 + progressChoiceQuestSum_1_3;
                localStorage.setItem('progressChoiceQuest_1_3', JSON.stringify(progressChoiceQuestSum_1_3));
                localStorage.setItem('progressChoiceQuest_1', JSON.stringify(progressChoiceQuestSum_1));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_1));
                if (progressChoiceQuestSum_1_3 === 1) {
                    questionStar_3.className += 'fill';
                }
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
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
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
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });
}