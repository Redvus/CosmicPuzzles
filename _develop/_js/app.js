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
          choiceCatLoad = new ChoiceCategory()
    ;
    clickLoadGame.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                wrapper.removeChild(wrapperTitle);
                wrapper.removeChild(wrapperBottom);
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
        ;
    });
}

function categoryDev() {
    const categoryLoad = new Category();
    categoryLoad.categoryMain();
    categoryLoad.categoryProgress('progressChoiceValue', 'progressChoiceAll');
    categoryLoad.categoryProgress('progressPrepareValue', 'progressPrepareAll');
    categoryLoad.categoryProgress('progressFlightValue', 'progressFlightAll');

    const clickLoadChoice = document.getElementById('categoryChoice'),
        containerCategory = document.querySelector('.container__category'),
        categoryChoice = document.getElementById('categoryChoice'),
        categoryPrepare = document.getElementById('categoryPrepare'),
        categoryFlight = document.getElementById('categoryFlight')
    ;

    clickLoadChoice.addEventListener('click', () => {
       let tl = gsap.timeline({
           onComplete: () => {
               container.removeChild(containerCategory),
               choiceCategoryDev();
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

function choiceCategoryDev() {
    const choiceCatLoad = new ChoiceCategory();
    choiceCatLoad.choiceCategory('Подготовка');

    const containerWrapper = document.querySelector('.container__wrapper'),
        categorySub_1 = document.getElementById('categorySub_1')

    ;

    categorySub_1.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                container.removeChild(containerWrapper);
                questionChoiceCat_1();
            }
        });

        tl
            .to(containerWrapper, {
                autoAlpha: 0,
            })
        ;
    });
}

function questionBlockDev() {
    const question = new Question();
    question.questionBlock();
}

// function aboutStart() {
//     const aboutLoad = new About();
//
//     let clickAboutGame = document.getElementById('clickAboutGame'),
//         clickAboutAuthors = document.getElementById('clickAboutAuthors'),
//         clickAboutLibrary = document.getElementById('clickAboutLibrary'),
//         containerGame = document.querySelector('.container__wrapper')
//     ;
//
//     clickAboutGame.addEventListener('click', (e) => {
//         aboutLoad.aboutGame('Дорогие друзья!', 'Представляем вашему вниманию игру по славянской мифологии. Проверьте, что вы знаете о сказаниях, легендах и поверьях наших предков. Играя, вы прикоснётесь к миру древних славян – узнаете или вспомните о самых значимых для них богах, существах, животных и растениях. В этой игре мы не можем охватить весь объем мифологических представлений древних славян. Наша игра – лишь приглашение к более глубокому их изучению. Быть может, по завершении игры вам захочется продолжить знакомство с миром наших предков, их жизнью, бытом, мировоззрением. А помочь в этом вам могут книги нашей библиотеки.')
//         e.preventDefault();
//     });
//
//     clickAboutAuthors.addEventListener('click', () => {
//         aboutLoad.aboutAuthors('сценарист', 'Инна Ямщикова', 'редактор', 'Андрей Косицин', 'художники', 'Елена Расторгуева<br />Вера Расторгуева', 'Программист', 'Александр Суворов');
//     });
//
//     clickAboutLibrary.addEventListener('click', () => {
//         aboutLoad.aboutLibrary('О библиотеке', 'МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» была создана в декабре 1986 года. На сегодняшний день в ее составе - Центральная городская библиотека имени Н.К. Крупской и 35 библиотек-филиалов, нашими читателями являются жители всех 9 районов города. Библиотеки системы – это информационные, образователь- ные центры, место культурного отдыха и общения. СМИБС находится в центре мировых событий, активно участвует в общероссийских акциях и в жизни города.', 'В библиотеках системы можно получить информацию и литературу по любой теме, доступ к электронным базам данных, воспользоваться услугами Интернет-залов, Центрами общественного доступа, побывать на презентациях выставок и творческих встречах, а также воспользоваться дополнительными сервисными услугами:<ul><li>ксерокопированием;</li><li>сканированием;</li><li>ламинированием документов;</li><li>распечаткой информации на принтере;</li><li>записью на электронные носители.</li></ul>');
//     });
// }

// function soundRightLoad() {
//     soundsLoad.rightAnswer('assets/games/slavicmyths/sounds/rightAnswer_2.ogg');
// }
//
// function soundEndLoad() {
//     soundsLoad.rightAnswer('assets/games/slavicmyths/sounds/rightAnswer.ogg');
// }

function init() {
    // introLoad();
    // aboutStart();
    // questTest();

    introDev();
    // categoryDev();
    // choiceCategoryDev();
    // questionBlockDev();
}

init();