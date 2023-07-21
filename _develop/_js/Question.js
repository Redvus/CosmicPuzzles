class Question {

    questionBlock(
        questionTitleCategory,
        questionTitle,
        questionQuest,
        questionVariant1,
        questionVariant2,
        questionVariant3) {

        // Development
        wrapper.className += ' wrapper__game';

        const containerWrapper = document.createElement('div'),
            questionCategoryTitle = document.createElement('div'),
            questionCategoryStars = document.createElement('ul')
        ;
        containerWrapper.className = 'container__wrapper container__wrapper_category';
        questionCategoryTitle.className = 'container__title container__title_category';
        questionCategoryStars.className = 'wrapper__stars';
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
                    <li id="answerVar_1"><a href="javascript:void(0);">${questionVariant1}</a></li>
                    <li id="answerVar_2"><a href="javascript:void(0);">${questionVariant2}</a></li>
                    <li id="answerVar_3"><a href="javascript:void(0);">${questionVariant3}</a></li>
                </ul>
            </div>
        `;
        container.appendChild(containerWrapper);
        containerWrapper.appendChild(questionCategoryTitle);
        wrapper.appendChild(questionCategoryStars);

        const questButtonLi_1 = document.getElementById('answerVar_1'),
            questButtonLi_2 = document.getElementById('answerVar_2'),
            questButtonLi_3 = document.getElementById('answerVar_3'),
            questButtonList = [questButtonLi_1, questButtonLi_2, questButtonLi_3],
            questButtonLiPosition = ['0', '33%', '66%'],
            positionLiTop = questButtonLiPosition.sort(() => Math.floor(Math.random() * questButtonLiPosition.length))
        ;

        questButtonList.forEach((el, idx) => {
            el.style.top = positionLiTop[idx];
        });

        function questionBlockAnimation() {
            let tl = gsap.timeline();
            tl
                .from('.container__title_category', {
                    autoAlpha: 0,
                    duration: 0.2,
                    delay: 0.3
                })
                .from('.question__block_imageblock', {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: 0.3
                })
                .from(questButtonList, {
                    autoAlpha: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    delay: '-0.2'
                })
            ;
        }
        questionBlockAnimation();
    }

    answerBlock(answerVarNum, answerTextRight) {
        const questionBlock = document.querySelector('.question__block_list'),
            questionBlockText = document.createElement('div'),
            questionBlockWrongText = document.createElement('div'),
            answerWrongVar = ['Неправильно', 'В следующий раз повезет', 'Не отчаивайся'],
            answerWrongVarView = answerWrongVar[Math.floor(Math.random() * answerWrongVar.length)]
        ;

        questionBlockText.innerHTML = `
            <div class="question__block_text-inside"><p>${answerTextRight}</p></div>
<!--            <a href="javascript:void(0);" class="question__block_next">Следующий вопрос</a>-->
        `;
        questionBlockWrongText.innerHTML = `
            <div class="question__block_text-inside"><p>${answerWrongVarView}</p></div>
<!--            <a href="javascript:void(0);" class="question__block_next">Следующий вопрос</a>-->
        `;

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            answerLi = document.querySelectorAll('ul.question__block_list > li'),
            answerLiRight = document.querySelectorAll('ul.question__block_list > li > a'),
            answerBlockTextInside = document.querySelector('.question__block_text-inside'),
            answerTextInside = document.querySelectorAll('.question__block_text-inside > p'),
            tl = gsap.timeline()
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            if (answerVarArray[i] === answerVarArray[answerVarNum]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== answerVarNum) {
                            el.remove();
                            questionBlock.appendChild(questionBlockText);
                            questionBlockText.className = 'question__block_text';
                        }
                        if (idx === answerVarNum) {
                            answerLiRight[i].className += 'question__block_list--right';
                            tl
                                .to(el, {
                                    top: 0,
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                                .from('.question__block_text', {
                                    autoAlpha: 0,
                                    duration: 0.2
                                })
                            ;
                        }
                    });
                });
            } else if (answerVarArray[i] === answerVarArray[0]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== 0) {
                            el.remove();
                            questionBlock.appendChild(questionBlockWrongText);
                            questionBlockWrongText.className = 'question__block_text';
                        }
                        if (idx === 0) {
                            answerLiRight[i].className += 'question__block_list--wrong';
                            tl
                                .to(el, {
                                    top: 0,
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                                .from('.question__block_text', {
                                    autoAlpha: 0,
                                    duration: 0.2
                                })
                            ;
                        }
                    });
                });
            } else if (answerVarArray[i] === answerVarArray[1]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== 1) {
                            el.remove();
                            questionBlock.appendChild(questionBlockWrongText);
                            questionBlockWrongText.className = 'question__block_text';
                        }
                        if (idx === 1) {
                            answerLiRight[i].className += 'question__block_list--wrong';
                            tl
                                .to(el, {
                                    top: 0,
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                                .from('.question__block_text', {
                                    autoAlpha: 0,
                                    duration: 0.2
                                })
                            ;
                        }
                    });
                });
            } else if (answerVarArray[i] === answerVarArray[2]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== 2) {
                            el.remove();
                            questionBlock.appendChild(questionBlockWrongText);
                            questionBlockWrongText.className = 'question__block_text';
                        }
                        if (idx === 2) {
                            answerLiRight[i].className += 'question__block_list--wrong';
                            tl
                                .to(el, {
                                    top: 0,
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                                .from('.question__block_text', {
                                    autoAlpha: 0,
                                    duration: 0.2
                                })
                            ;
                        }
                    });
                });
            }
        }
    }
}