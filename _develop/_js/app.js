const container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper')
;

const soundsLoad = new Sounds();

/* Develop */
function introDev() {
    const introDevLoad = new Intro();
    introDevLoad.introStart();

    const clickLoadGame = document.getElementById('clickLoadGame'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTitle = document.querySelector('.wrapper__title'),
        wrapperBottom = document.querySelector('.wrapper__bottom'),
        wrapperBack = document.querySelector('.wrapper__intro'),
        choiceCatLoad = new ChoiceCategory()
    ;
    clickLoadGame.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                wrapper.removeChild(wrapperTitle);
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(wrapperBack);
                wrapper.appendChild(container);
                categoryDev();
            }
        });
        tl
            .to(wrapperTop, {
                duration: 0.7,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(wrapperTitle, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBottom, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBack, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0
            })
        ;
    });
}

/* Запускаем категории */
function categoryDev() {
    const categoryLoad = new Category(),
        arrowBackLoad = new ArrowsAll();
    ;
    categoryLoad.categoryMain();
    categoryLoad.categoryProgress('progressChoiceValue', 'progressChoiceAll');
    categoryLoad.categoryProgress('progressPrepareValue', 'progressPrepareAll');
    categoryLoad.categoryProgress('progressFlightValue', 'progressFlightAll');


    const containerCategory = document.querySelector('.container__category'),
        categoryChoice = document.getElementById('categoryChoice'),
        categoryPrepare = document.getElementById('categoryPrepare'),
        categoryFlight = document.getElementById('categoryFlight')
    ;

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerCategory);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
    });
    arrowBackLoad.clearStorage();
    const clearButton = document.getElementById('clearStorageClick'),
        setProgressChoice = document.getElementById('progressChoiceValue'),
        setProgressPrepare = document.getElementById('progressPrepareValue'),
        setProgressFlight = document.getElementById('progressFlightValue')
    ;
    clearButton.addEventListener('click', () => {
        localStorage.clear();
        localStorage.setItem('progressChoiceAll', JSON.stringify(0));
        localStorage.setItem('progressPrepareAll', JSON.stringify(0));
        localStorage.setItem('progressFlightAll', JSON.stringify(0));
        setProgressChoice.textContent = JSON.parse(localStorage.getItem('progressChoiceAll'));
        setProgressPrepare.textContent = JSON.parse(localStorage.getItem('progressPrepareAll'));
        setProgressFlight.textContent = JSON.parse(localStorage.getItem('progressFlightAll'));
    });

    categoryChoice.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(clearButton);
                container.removeChild(containerCategory);
                choiceCategoryDev();
                lockSubQuestChoice();
            }
        });
        tl
            .to([categoryChoice, categoryPrepare, categoryFlight], {
                autoAlpha: 0,
                duration: "0.6",
                delay: "-0.3",
                y: "0.5rem",
                stagger: 0.2
            })
        ;
    });

    categoryPrepare.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(clearButton);
                container.removeChild(containerCategory);
                prepareCategoryDev();
            }
        });
        tl
            .to([categoryChoice, categoryPrepare, categoryFlight], {
                autoAlpha: 0,
                duration: "0.6",
                delay: "-0.3",
                y: "0.5rem",
                stagger: 0.2
            })
        ;
    });

    categoryFlight.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(clearButton);
                container.removeChild(containerCategory);
                flightCategoryDev();
            }
        });
        tl
            .to([categoryChoice, categoryPrepare, categoryFlight], {
                autoAlpha: 0,
                duration: "0.6",
                delay: "-0.3",
                y: "0.5rem",
                stagger: 0.2
            })
        ;
    });
}

/* Запускаем вопросы в квтегории Отбор */
function choiceCategoryDev() {
    const choiceCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    choiceCatLoad.choiceCategory('Отбор', 'Choice');

    const containerWrapper = document.querySelector('.container__wrapper'),
        categorySubChoice_1 = document.getElementById('categorySubChoice_1')
    ;

    if (localStorage.getItem('progressChoiceQuest_1_1') === null) {
        localStorage.setItem('progressChoiceQuest_1_1', JSON.stringify(0));
    } else if (localStorage.getItem('progressChoiceQuest_1_1') == 1) {
        localStorage.setItem('progressChoiceQuest_1_1', JSON.stringify(1));
    }

    //Local Storage. Progress
    let progressChoiceQuest1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1'));
    let progressChoiceQuest2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2'));
    let progressChoiceQuest3 = JSON.parse(localStorage.getItem('progressChoiceQuest_3'));
    let progressChoiceQuest4 = JSON.parse(localStorage.getItem('progressChoiceQuest_4'));
    let progressChoiceQuest5 = JSON.parse(localStorage.getItem('progressChoiceQuest_5'));
    let progressChoiceQuest6 = JSON.parse(localStorage.getItem('progressChoiceQuest_6'));
    let progressChoiceQuest7 = JSON.parse(localStorage.getItem('progressChoiceQuest_7'));
    let progressChoiceQuest8 = JSON.parse(localStorage.getItem('progressChoiceQuest_8'));
    let progressChoiceQuestAll = progressChoiceQuest1 + progressChoiceQuest2 + progressChoiceQuest3 + progressChoiceQuest4 + progressChoiceQuest5 + progressChoiceQuest6 + progressChoiceQuest7 + progressChoiceQuest8;
    localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestAll));

    let categorySubStars_1 = document.querySelector('.category__element_stars'),
        categorySubQuest_2 = document.getElementById('categorySubChoice_2')
    ;

    if (progressChoiceQuest1 == 1) {
        categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li></li>
            <li></li>
        `;
    } else if (progressChoiceQuest1 == 2) {
        categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li></li>
        `;
    } else if (progressChoiceQuest1 == 3) {
        categorySubStars_1.innerHTML = `
            <li class="fill"></li>
            <li class="fill"></li>
            <li class="fill"></li>
        `;
    }

    if (progressChoiceQuest1 >= 1) {
        categorySubQuest_2.className = 'category__element category__element_2';
    }

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapper, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                wrapper.className = 'wrapper';
                categoryDev();
            }
        });
    });

    categorySubChoice_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                loadQuestReady();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });
}

/* Запускаем вопросы в квтегории Подготовка */
function prepareCategoryDev() {
    const choiceCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    choiceCatLoad.choiceCategory('Подготовка', 'Prepare');

    const containerWrapper = document.querySelector('.container__wrapper'),
        categorySubPrepare_1 = document.getElementById('categorySubPrepare_1')
    ;

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapper, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                wrapper.className = 'wrapper';
                categoryDev();
            }
        });
    });

    categorySubPrepare_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                questionPrepareCat_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });
}

/* Запускаем вопросы в квтегории Полет */
function flightCategoryDev() {
    const choiceCatLoad = new ChoiceCategory(),
        arrowBackLoad = new ArrowsAll();
    choiceCatLoad.choiceCategory('Полет', 'Flight');

    const containerWrapper = document.querySelector('.container__wrapper'),
        categorySubFlight_1 = document.getElementById('categorySubFlight_1')
    ;

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapper, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                wrapper.className = 'wrapper';
                categoryDev();
            }
        });
    });

    categorySubFlight_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(containerWrapper);
                questionFlightCat_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });
}

/* Переходим к неотвеченному вопросу */
function loadQuestReady() {
    let loadQuestReady_1_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_1')),
        loadQuestReady_1_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_1_2')),
        loadQuestReady_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1')),
        loadQuestReady_2 = document.getElementById('categorySubChoice_1')
    ;

    if (loadQuestReady_1_1 === 0) {
        questionChoiceCat_1_1();
    } else if (loadQuestReady_1_1 === 1 && loadQuestReady_1 === 1) {
        questionChoiceCat_1_2();
    } else if (loadQuestReady_1_2 === 1 && loadQuestReady_1 === 2) {
        questionChoiceCat_1_3();
    } else if (loadQuestReady_1_2 === 0 && loadQuestReady_1 === 2) {
        questionChoiceCat_1_2();
    }
}

/* Блокируем подкатегории при всех ответах */
function lockSubQuestChoice() {
    let loadQuestReady_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_1')),
        loadQuestReady_2 = document.getElementById('categorySubChoice_1')
    ;

    if (loadQuestReady_1 === 3) {
        loadQuestReady_2.className = 'category__element category__element_1 category__element--lock';
    }
}

function questionBlockDev() {
    const question = new Question();

    question.questionBlock('Отбор', 'Белка, Стрелка и ...', 'Кто первым из животных побывал в космосе?', 'Белка', 'Стрелка', 'Тузик');

    question.answerBlock(1, 'Конечно же стрелка, потому как это только и это есть правильный ответ, а не другой');

}

function aboutStart() {
    const aboutLoad = new About();

    let clickAboutGame = document.getElementById('clickAboutGame'),
        clickAboutAuthors = document.getElementById('clickAboutAuthors'),
        clickAboutLibrary = document.getElementById('clickAboutLibrary'),
        containerGame = document.querySelector('.container__wrapper')
    ;

    clickAboutGame.addEventListener('click', (e) => {
        aboutLoad.aboutGame('Дорогие друзья!', 'Представляем вашему вниманию игру по славянской мифологии. Проверьте, что вы знаете о сказаниях, легендах и поверьях наших предков. Играя, вы прикоснётесь к миру древних славян – узнаете или вспомните о самых значимых для них богах, существах, животных и растениях. В этой игре мы не можем охватить весь объем мифологических представлений древних славян. Наша игра – лишь приглашение к более глубокому их изучению. Быть может, по завершении игры вам захочется продолжить знакомство с миром наших предков, их жизнью, бытом, мировоззрением. А помочь в этом вам могут книги нашей библиотеки.')
        e.preventDefault();
    });

    clickAboutAuthors.addEventListener('click', () => {
        aboutLoad.aboutAuthors('сценарист', 'Инна Ямщикова', 'редактор', 'Андрей Косицин', 'художники', 'Елена Расторгуева<br />Вера Расторгуева', 'Программист', 'Александр Суворов');
    });

    clickAboutLibrary.addEventListener('click', () => {
        aboutLoad.aboutLibrary('О библиотеке', 'МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» была создана в декабре 1986 года. На сегодняшний день в ее составе - Центральная городская библиотека имени Н.К. Крупской и 35 библиотек-филиалов, нашими читателями являются жители всех 9 районов города. Библиотеки системы – это информационные, образователь- ные центры, место культурного отдыха и общения. СМИБС находится в центре мировых событий, активно участвует в общероссийских акциях и в жизни города.', 'В библиотеках системы можно получить информацию и литературу по любой теме, доступ к электронным базам данных, воспользоваться услугами Интернет-залов, Центрами общественного доступа, побывать на презентациях выставок и творческих встречах, а также воспользоваться дополнительными сервисными услугами:<ul><li>ксерокопированием;</li><li>сканированием;</li><li>ламинированием документов;</li><li>распечаткой информации на принтере;</li><li>записью на электронные носители.</li></ul>');
    });
}

function soundRightLoad() {
    soundsLoad.rightAnswer('assets/games/slavicmyths/sounds/rightAnswer_2.ogg');
}

function soundEndLoad() {
    soundsLoad.rightAnswer('assets/games/slavicmyths/sounds/rightAnswer.ogg');
}

function init() {
    // introLoad();
    // aboutStart();
    // questTest();

    // introDev();
    categoryDev();
    // choiceCategoryDev();
    // questionBlockDev();
}

init();