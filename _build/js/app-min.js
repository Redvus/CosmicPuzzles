class About{aboutAuthors(e,a,t,n,i,s,c,r){let o=document.createElement("div");o.className="container__about",o.innerHTML=`\n            <div class="container__about_inside">\n                <picture id="aboutAuthorsBack" class="container__about_back">\n                    <img src="assets/games/slavicmyths/images/aboutBack.png" alt="Фон информации об авторах">\n                </picture>\n                <picture id="aboutAuthorsFrame" class="container__about_frame">\n                    <img src="assets/games/slavicmyths/images/frameEmpty.png" alt="Рамка информации об авторах">\n                </picture>\n                <picture id="aboutAuthorsFrameBack" class="container__about_frameback">\n                    <img src="assets/games/slavicmyths/images/frameTextBack.jpg" alt="Фон рамки информации об авторах">\n                </picture>\n                <div class="container__about_text">\n                    <h1 class="container__about_title">Об авторах</h1>\n                    <div class="container__about_person">\n                        <h3>${e}</h3>\n                        <p>${a}</p>\n                        <picture class="container__about_line">\n                            <img src="assets/games/slavicmyths/images/aboutBrake.png" alt="Разделитель авторов">\n                        </picture>\n                    </div>\n                    <div class="container__about_person">\n                        <h3>${t}</h3>\n                        <p>${n}</p>\n                        <picture class="container__about_line">\n                            <img src="assets/games/slavicmyths/images/aboutBrake.png" alt="Разделитель авторов">\n                        </picture>\n                    </div>\n                    <div class="container__about_person">\n                        <h3>${i}</h3>\n                        <p>${s}</p>\n                        <picture class="container__about_line">\n                            <img src="assets/games/slavicmyths/images/aboutBrake.png" alt="Разделитель авторов">\n                        </picture>\n                    </div>\n                    <div class="container__about_person">\n                        <h3>${c}</h3>\n                        <p>${r}</p>\n                        <picture class="container__about_line">\n                            <img src="assets/games/slavicmyths/images/aboutBrake.png" alt="Разделитель авторов">\n                        </picture>\n                    </div>\n                </div>\n            </div>\n            <picture class="container__about_arrow" id="arrowAboutBack">\n                <img src="assets/games/slavicmyths/images/arrowBack.png" alt="Кнопка возврата в игру">\n            </picture>\n        `,document.body.appendChild(o);let l=document.getElementById("aboutAuthorsBack"),m=document.getElementById("aboutAuthorsFrame"),p=document.getElementById("aboutAuthorsFrameBack"),_=document.querySelector(".container__about_title"),g=document.querySelectorAll(".container__about_person"),u=document.getElementById("arrowAboutBack"),d=document.querySelector(".container__about");(new gsap.timeline).fromTo(l,{autoAlpha:0},{duration:.8,autoAlpha:1}).fromTo(m,{autoAlpha:0},{duration:.6,delay:"-0.5",autoAlpha:1}).fromTo(p,{autoAlpha:0},{duration:.6,delay:"-0.5",autoAlpha:1}).fromTo(_,{autoAlpha:0},{duration:.4,delay:"-0.3",autoAlpha:1}).fromTo(g,{autoAlpha:0},{duration:.4,delay:"-0.3",autoAlpha:1,stagger:.07}),u.addEventListener("click",(()=>{gsap.to(d,{duration:.3,autoAlpha:0,onComplete:()=>{document.body.removeChild(d)}})}))}aboutGame(e,a){let t=document.createElement("div");t.className="container__info",t.innerHTML=`\n            <div class="container__info_inside">\n                <picture id="aboutGameBack" class="container__info_frame">\n                    <img src="assets/games/slavicmyths/images/aboutMainBack.png" alt="Фон информации об игре">\n                </picture>\n                <picture id="aboutGameFrameBack" class="container__info_back">\n                    <img src="assets/games/slavicmyths/images/aboutMainPaper.png" alt="Фон рамки информации об авторах">\n                </picture>\n                <div id="aboutGameFrameText" class="container__info_text">\n                    <h1>${e}</h1>\n                    <p>${a}</p>\n                </div>\n            </div>\n            <picture class="container__about_arrow" id="arrowInfoBack">\n                <img src="assets/games/slavicmyths/images/arrowBack.png" alt="Кнопка возврата в игру">\n            </picture>\n        `,document.body.appendChild(t);let n=document.getElementById("aboutGameBack"),i=document.getElementById("aboutGameFrameBack"),s=document.getElementById("aboutGameFrameText"),c=document.getElementById("arrowInfoBack"),r=document.querySelector(".container__info");(new gsap.timeline).fromTo(n,{autoAlpha:0},{duration:.8,autoAlpha:1}).fromTo(i,{autoAlpha:0},{duration:.6,delay:"-0.5",autoAlpha:1}).fromTo(s,{autoAlpha:0},{duration:.8,delay:"-0.2",autoAlpha:1}),c.addEventListener("click",(()=>{gsap.to(r,{duration:.3,autoAlpha:0,onComplete:()=>{document.body.removeChild(r)}})}))}aboutLibrary(e,a,t){let n=document.createElement("div");n.className="container__library",n.innerHTML=`\n            <div class="container__library_inside">\n                <picture class="container__back" id="containerLibraryBack">\n                    <img src="assets/games/slavicmyths/images/containerBack.png" alt="Задний фон контейнера">\n                </picture>\n                <div class="container__inside">\n                    <picture class="container__inside_back" id="containerLibraryPaper">\n                        <img src="assets/games/slavicmyths/images/paperBack.png" alt="Старая бумага как основной фон">\n                    </picture>\n                    <div class="container__frame container__frame_left">\n                        <picture class="frame__left_top" id="containerLibraryFrameLeft">\n                            <img src="assets/games/slavicmyths/images/frameTitle.png" alt="Рамка с названием">\n                        </picture>\n                        <picture class="frame__left_back" id="containerLibraryFrameLeftBack">\n                            <img src="assets/games/slavicmyths/images/frameTextBack.jpg" alt="Задний фон под текстом">\n                        </picture>\n                        <div class="frame__left_title" id="containerLibraryTitle">\n                            <h2>${e}</h2>\n                        </div>\n                        <div class="frame__left_text" id="containerLibraryLeftText">\n                            <p>${a}</p>\n                        </div>\n                    </div>\n                    <div class="container__frame container__frame_right">\n                        <picture class="frame__right_top" id="containerLibraryFrameRight">\n                            <img src="assets/games/slavicmyths/images/frameEmpty.png" alt="Рамка пустая">\n                        </picture>\n                        <picture class="frame__right_back" id="containerLibraryFrameRightBack">\n                            <img src="assets/games/slavicmyths/images/frameTextBack.jpg" alt="Задний фон под текстом">\n                        </picture>\n                        <div class="frame__right_text" id="containerLibraryRightText">\n                            <p>${t}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <picture class="container__about_arrow container__library_arrow" id="arrowLibraryBack">\n                <img src="assets/games/slavicmyths/images/arrowBack.png" alt="Кнопка возврата в игру">\n            </picture>\n        `,document.body.appendChild(n);let i=document.getElementById("containerLibraryBack"),s=document.getElementById("containerLibraryPaper"),c=document.getElementById("containerLibraryFrameLeft"),r=document.getElementById("containerLibraryFrameLeftBack"),o=document.getElementById("containerLibraryTitle"),l=document.getElementById("containerLibraryLeftText"),m=document.getElementById("containerLibraryFrameRight"),p=document.getElementById("containerLibraryFrameRightBack"),_=document.getElementById("containerLibraryRightText"),g=document.getElementById("arrowLibraryBack"),u=document.querySelector(".container__library");(new gsap.timeline).fromTo(i,{autoAlpha:0},{duration:.8,autoAlpha:1}).fromTo(s,{autoAlpha:0},{duration:.6,delay:"-0.3",autoAlpha:1}).fromTo([c,m],{autoAlpha:0},{duration:.6,delay:"-0.3",stagger:.07,autoAlpha:1}).fromTo([r,p],{autoAlpha:0},{duration:.6,delay:"-0.3",stagger:.07,autoAlpha:1}).fromTo([o,l,_],{autoAlpha:0},{duration:.4,delay:"-0.3",stagger:.05,autoAlpha:1}),g.addEventListener("click",(()=>{gsap.to(u,{duration:.3,autoAlpha:0,onComplete:()=>{document.body.removeChild(u)}})}))}}class Sounds{greeting(e){(e=new Audio(e)).oncanplaythrough=()=>{e.play()}}rightAnswer(e){(e=new Audio(e)).oncanplaythrough=()=>{e.play()}}}class Intro{introStart(){wrapper.className+=" wrapper__intro";const e=document.createElement("div");e.className="wrapper__top",e.innerHTML='\n            <picture id="introSun">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginSun.png" alt="Заставка. Солнце">\n            </picture>\n            <picture id="introPlanet">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginPlanet.png" alt="Заставка. Планеты">\n            </picture>\n        ',wrapper.removeChild(container),wrapper.appendChild(e);const a=document.createElement("div");a.className="wrapper__title";const t=document.createElement("div");t.className="wrapper__title_top",a.appendChild(t),t.innerHTML='\n            <picture id="introCosmicK" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_K.png" alt="Космические пазлы. К">\n            </picture>\n            <picture id="introCosmicO" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_O.png" alt="Космические пазлы. О">\n            </picture>\n            <picture id="introCosmicS" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_S.png" alt="Космические пазлы. С">\n            </picture>\n            <picture id="introCosmicM" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_M.png" alt="Космические пазлы. М">\n            </picture>\n            <picture id="introCosmicI" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_I.png" alt="Космические пазлы. И">\n            </picture>\n            <picture id="introCosmicCH" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_CH.png" alt="Космические пазлы. Ч">\n            </picture>\n            <picture id="introCosmicE" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_E.png" alt="Космические пазлы. Е">\n            </picture>\n            <picture id="introCosmicS2" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_S.png" alt="Космические пазлы. С">\n            </picture>\n            <picture id="introCosmicK2" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_K2.png" alt="Космические пазлы. К">\n            </picture>\n            <picture id="introCosmicI2" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_I.png" alt="Космические пазлы. И">\n            </picture>\n            <picture id="introCosmicE2" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_E.png" alt="Космические пазлы. Е">\n            </picture>\n        ';const n=document.createElement("div");n.className="wrapper__title_bottom",a.appendChild(n),n.innerHTML='\n            <picture id="introPazzlesP" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginPazzles_P.png" alt="Космические пазлы. П">\n            </picture>\n            <picture id="introPazzlesA" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginPazzles_A.png" alt="Космические пазлы. А">\n            </picture>\n            <picture id="introPazzlesZ" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginPazzles_Z.png" alt="Космические пазлы. З">\n            </picture>\n            <picture id="introPazzlesL" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginPazzles_L.png" alt="Космические пазлы. Л">\n            </picture>\n            <picture id="introPazzlesY" class="wrapper__title_symbol">\n                <img src="assets/games/cosmicpuzzles/images/cp_beginPazzles_Y.png" alt="Космические пазлы. Ы">\n            </picture>\n        ',wrapper.appendChild(a);const i=document.createElement("div");i.className="wrapper__bottom",i.innerHTML='\n            <ul class="wrapper__bottom_menu">\n                <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>\n                <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>\n                <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>\n            </ul>\n        ',wrapper.appendChild(i);document.getElementById("introS"),document.getElementById("introM"),document.getElementById("introSlavic"),document.getElementById("introMyths"),document.getElementById("introButton"),new ChoiceCategory}}class ChoiceCategory{choiceCategory(e){const a=document.createElement("div"),t=document.createElement("div");a.className="container__wrapper",t.className="container__title",t.innerHTML=`\n            <h1>${e}</h1>\n        `,a.innerHTML=`\n            <a href="javascript:void(0);" class="category__element category__element_1" id="categorySub_1">\n                <ul class="category__element_stars"></ul>\n                <picture class="category__element_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_1.png" alt="Категория ${e}. Первый вопрос">\n                </picture>\n            </a>\n            <a href="javascript:void(0);" class="category__element category__element_2 category__element--hidden" id="categorySub_2">\n                <ul class="category__element_stars"></ul>\n                <picture class="category__element_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_2.png" alt="Категория ${e}. Второй вопрос">\n                </picture>\n            </a>\n            <a href="javascript:void(0);" class="category__element category__element_3 category__element--hidden" id="categorySub_3">\n                <ul class="category__element_stars"></ul>\n                <picture class="category__element_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_3.png" alt="Категория ${e}. Третий вопрос">\n                </picture>\n            </a>\n            <a href="javascript:void(0);" class="category__element category__element_4 category__element--hidden" id="categorySub_4">\n                <ul class="category__element_stars"></ul>\n                <picture class="category__element_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_4.png" alt="Категория ${e}. Четвертый вопрос">\n                </picture>\n            </a>\n            <a href="javascript:void(0);" class="category__element category__element_5 category__element--hidden" id="categorySub_5">\n                <ul class="category__element_stars"></ul>\n                <picture class="category__element_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_5.png" alt="Категория ${e}. Пятый вопрос">\n                </picture>\n            </a>\n            <a href="javascript:void(0);" class="category__element category__element_6 category__element--hidden" id="categorySub_6">\n                <ul class="category__element_stars"></ul>\n                <picture class="category__element_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_6.png" alt="Категория ${e}. Шестой вопрос">\n                </picture>\n            </a>\n            <a href="javascript:void(0);" class="category__element category__element_7 category__element--hidden" id="categorySub_7">\n                <ul class="category__element_stars"></ul>\n                <picture class="category__element_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_7.png" alt="Категория ${e}. Седьмой вопрос">\n                </picture>\n            </a>\n            <a href="javascript:void(0);" class="category__element category__element_8 category__element--hidden" id="categorySub_8">\n                <ul class="category__element_stars"></ul>\n                <picture class="category__element_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_8.png" alt="Категория ${e}. Восьмой вопрос">\n                </picture>\n            </a>\n        `,container.appendChild(a),a.appendChild(t),function(){let e=gsap.timeline();const a=document.getElementById("categorySub_1"),t=document.getElementById("categorySub_2"),n=document.getElementById("categorySub_3"),i=document.getElementById("categorySub_4"),s=document.getElementById("categorySub_5"),c=document.getElementById("categorySub_6"),r=document.getElementById("categorySub_7"),o=document.getElementById("categorySub_8"),l=document.querySelector(".container__wrapper");e.from(l,{autoAlpha:0,duration:"0.6"}).from([a,t,n,i,s,c,r,o],{autoAlpha:0,duration:"0.3",delay:"-0.6",stagger:.2})}()}choiceCategoryElement(){}}class Category{categoryMain(){wrapper.className+=" wrapper__game";document.querySelector(".wrapper__game");const e=document.createElement("div");e.className="container__category",e.innerHTML='\n            <div class="category__main" id="categoryChoice">\n                <div class="category__main_stars">\n                    <picture>\n                        <img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt="Количество набранных очков">\n                    </picture>\n                    <div class="category__main_value">\n                        <span id="progressChoiceValue"></span> / 24\n                    </div>\n                </div>\n                <picture class="category__main_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice.png" alt="Категория Отбор">\n                </picture>\n                <div class="category__main_title">\n                    <h3>Отбор</h3>\n                </div>\n            </div>\n            \n            <div class="category__main" id="categoryPrepare">\n                <div class="category__main_stars">\n                    <picture>\n                        <img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt="Количество набранных очков">\n                    </picture>\n                    <div class="category__main_value">\n                        <span id="progressPrepareValue"></span> / 24\n                    </div>\n                </div>\n                <picture class="category__main_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catPrepare.png" alt="Категория Подготовка">\n                </picture>\n                <div class="category__main_title">\n                    <h3>Подготовка</h3>\n                </div>\n            </div>\n            \n            <div class="category__main" id="categoryFlight">\n                <div class="category__main_stars">\n                    <picture>\n                        <img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt="Количество набранных очков">\n                    </picture>\n                    <div class="category__main_value">\n                        <span id="progressFlightValue"></span> / 24\n                    </div>\n                </div>\n                <picture class="category__main_image">\n                    <img src="assets/games/cosmicpuzzles/images/cp_catFlight.png" alt="Категория Полет">\n                </picture>\n                <div class="category__main_title">\n                    <h3>Полет</h3>\n                </div>\n            </div>\n        ',container.appendChild(e),function(){let e=gsap.timeline();const a=document.getElementById("categoryChoice"),t=document.getElementById("categoryPrepare"),n=document.getElementById("categoryFlight");e.from([a,t,n],{autoAlpha:0,duration:"0.6",delay:"-0.3",y:"-0.5rem",stagger:.2})}()}categoryProgress(e,a){let t=document.getElementById(e);null===localStorage.getItem(a)?localStorage.setItem(a,JSON.stringify(0)):(localStorage.setItem(a,JSON.stringify(0)),t.textContent=JSON.parse(localStorage.getItem(a)))}}class Question{questionBlock(e,a,t,n,i){const s=document.createElement("div"),c=document.createElement("div");s.className="container__wrapper container__wrapper_category",c.className="container__title container__title_category",c.innerHTML="<h1>Подготовка</h1>",s.innerHTML=`\n            <div class="question__block">\n                <div class="question__block_imageblock">\n                    <h3>${e}</h3>\n                    <div class="question__block_image">\n                        <p>${a}</p>\n                        <img src="assets/games/cosmicpuzzles/images/cp_questImageBack_1.png" alt="Изображение по вопросом">\n                    </div>\n                </div>\n                <ul class="question__block_list">\n                    <li><a href="javascript:void(0);" id="answerVar_1">${t}</a></li>\n                    <li><a href="javascript:void(0);" id="answerVar_2">${n}</a></li>\n                    <li><a href="javascript:void(0);" id="answerVar_3">${i}</a></li>\n                </ul>\n            </div>\n        `,container.appendChild(s),s.appendChild(c)}}class ArrowBack{arrowBack(){const e=document.createElement("a");e.className="wrapper__game_arrow",e.id="arrowBack",e.innerHTML='\n            <img src="assets/games/cosmicpuzzles/images/cp_arrowBack.png" alt="Стрелка назад">\n        ',container.appendChild(e)}}function questionPrepareCat_1(){}function f(){}const container=document.querySelector(".container"),wrapper=document.querySelector(".wrapper"),soundsLoad=new Sounds;function introDev(){(new Intro).introStart();const e=document.getElementById("clickLoadGame"),a=document.querySelector(".wrapper__top"),t=document.querySelector(".wrapper__title"),n=document.querySelector(".wrapper__bottom");new ChoiceCategory;e.addEventListener("click",(()=>{gsap.timeline({onComplete:()=>{wrapper.className="wrapper",wrapper.removeChild(a),wrapper.removeChild(t),wrapper.removeChild(n),wrapper.appendChild(container),categoryDev()}}).to(a,{duration:.7,autoAlpha:0,y:"-3%"}).to(t,{duration:.7,delay:-.5,autoAlpha:0,y:"5%"}).to(n,{duration:.7,delay:-.5,autoAlpha:0,y:"5%"})}))}function categoryDev(){const e=new Category,a=new ArrowBack;e.categoryMain(),e.categoryProgress("progressChoiceValue","progressChoiceAll"),e.categoryProgress("progressPrepareValue","progressPrepareAll"),e.categoryProgress("progressFlightValue","progressFlightAll");const t=document.getElementById("categoryChoice"),n=document.querySelector(".container__category"),i=document.getElementById("categoryChoice"),s=document.getElementById("categoryPrepare"),c=document.getElementById("categoryFlight");a.arrowBack();const r=document.getElementById("arrowBack");r.addEventListener("click",(()=>{gsap.to(n,{autoAlpha:0,onComplete:()=>{container.removeChild(r),container.removeChild(n),wrapper.className="wrapper",introDev()}})})),t.addEventListener("click",(()=>{gsap.timeline({onComplete:()=>{container.removeChild(r),container.removeChild(n),choiceCategoryDev()}}).to([i,s,c],{autoAlpha:0,duration:"0.6",delay:"-0.3",y:"0.5rem",stagger:.2})}))}function choiceCategoryDev(){const e=new ChoiceCategory,a=new ArrowBack;e.choiceCategory("Подготовка");const t=document.querySelector(".container__wrapper"),n=document.getElementById("categorySub_1");a.arrowBack();const i=document.getElementById("arrowBack");i.addEventListener("click",(()=>{gsap.to(t,{autoAlpha:0,onComplete:()=>{container.removeChild(i),container.removeChild(t),wrapper.className="wrapper",categoryDev()}})})),n.addEventListener("click",(()=>{gsap.timeline({onComplete:()=>{container.removeChild(i),container.removeChild(t),questionChoiceCat_1()}}).to(t,{autoAlpha:0})}))}function questionBlockDev(){(new Question).questionBlock()}function init(){introDev()}init();