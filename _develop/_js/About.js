class About {

    aboutAuthors(peronFirstTitle, peronFirstName, peronSecondTitle, peronSecondName, peronThirdTitle, peronThirdName) {
        const containerWrapper = document.createElement('div'),
            containerTitle = document.createElement('div')
        ;
        containerWrapper.className = 'container__wrapper container__wrapper_about';
        containerTitle.className = 'container__title container__title_category';

        containerTitle.innerHTML = `<h1 class="c">Об авторах</h1>`;
        containerWrapper.innerHTML = `
            <div class="container__about">
                <div class="container__wrapper_person">
                    <h4>${peronFirstTitle}</h4>
                    <p>${peronFirstName}</p>
                </div>
                <div class="container__wrapper_person">
                    <h4>${peronSecondTitle}</h4>
                    <p>${peronSecondName}</p>
                </div>
                <div class="container__wrapper_person">
                    <h4>${peronThirdTitle}</h4>
                    <p>${peronThirdName}</p>
                </div>
            </div>
        `;
        container.appendChild(containerWrapper);
        containerWrapper.appendChild(containerTitle);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__game';
        wrapper.appendChild(introBlockBack);

        const wrapperAboutBack = document.createElement('picture');
        wrapperAboutBack.className = 'wrapper__back_about';
        wrapperAboutBack.innerHTML = `
            <img src="assets/games/cosmicpuzzles/images/cp_aboutBAck.png" alt="Фон об авторах">
        `;
        wrapper.appendChild(wrapperAboutBack);

        let containerAboutTitle = document.querySelector('.container__title_category'),
            containerAboutPerson = document.querySelectorAll('.container__wrapper_person'),
            aboutBack = document.querySelector('.wrapper__back_about')
        ;

        function aboutAuthorsAnim() {
            let tl = new gsap.timeline();

            tl
                .from(introBlockBack, {
                    autoAlpha: 0,
                    duration: 0.6,
                    delay: '-0.3'
                })
                .from(aboutBack, {
                    autoAlpha: 0,
                    duration: 0.6
                })
                .from(containerAboutTitle, {
                    autoAlpha: 0,
                    duration: 0.6,
                    delay: '-0.3'
                })
                .from(containerAboutPerson, {
                    autoAlpha: 0,
                    duration: 0.6,
                    delay: '-0.3',
                    y: "-0.5rem",
                    stagger: 0.2
                })
            ;
        }
        aboutAuthorsAnim();
    }

    aboutLibrary(libraryTitle, libraryLeftText, libraryRightText) {
        let questBlock = document.createElement('div');
        questBlock.className = 'container__library';
        questBlock.innerHTML = `
            <div class="container__library_inside">
                <picture class="container__back" id="containerLibraryBack">
                    <img src="assets/games/slavicmyths/images/containerBack.png" alt="Задний фон контейнера">
                </picture>
                <div class="container__inside">
                    <picture class="container__inside_back" id="containerLibraryPaper">
                        <img src="assets/games/slavicmyths/images/paperBack.png" alt="Старая бумага как основной фон">
                    </picture>
                    <div class="container__frame container__frame_left">
                        <picture class="frame__left_top" id="containerLibraryFrameLeft">
                            <img src="assets/games/slavicmyths/images/frameTitle.png" alt="Рамка с названием">
                        </picture>
                        <picture class="frame__left_back" id="containerLibraryFrameLeftBack">
                            <img src="assets/games/slavicmyths/images/frameTextBack.jpg" alt="Задний фон под текстом">
                        </picture>
                        <div class="frame__left_title" id="containerLibraryTitle">
                            <h2>${libraryTitle}</h2>
                        </div>
                        <div class="frame__left_text" id="containerLibraryLeftText">
                            <p>${libraryLeftText}</p>
                        </div>
                    </div>
                    <div class="container__frame container__frame_right">
                        <picture class="frame__right_top" id="containerLibraryFrameRight">
                            <img src="assets/games/slavicmyths/images/frameEmpty.png" alt="Рамка пустая">
                        </picture>
                        <picture class="frame__right_back" id="containerLibraryFrameRightBack">
                            <img src="assets/games/slavicmyths/images/frameTextBack.jpg" alt="Задний фон под текстом">
                        </picture>
                        <div class="frame__right_text" id="containerLibraryRightText">
                            <p>${libraryRightText}</p>
                        </div>
                    </div>
                </div>
            </div>
            <picture class="container__about_arrow container__library_arrow" id="arrowLibraryBack">
                <img src="assets/games/slavicmyths/images/arrowBack.png" alt="Кнопка возврата в игру">
            </picture>
        `;
        document.body.appendChild(questBlock);

        let containerLibraryBack = document.getElementById('containerLibraryBack'),
            containerLibraryPaper = document.getElementById('containerLibraryPaper'),
            containerLibraryFrameLeft = document.getElementById('containerLibraryFrameLeft'),
            containerLibraryFrameLeftBack = document.getElementById('containerLibraryFrameLeftBack'),
            containerLibraryTitle = document.getElementById('containerLibraryTitle'),
            containerLibraryLeftText = document.getElementById('containerLibraryLeftText'),
            containerLibraryFrameRight = document.getElementById('containerLibraryFrameRight'),
            containerLibraryFrameRightBack = document.getElementById('containerLibraryFrameRightBack'),
            containerLibraryRightText = document.getElementById('containerLibraryRightText'),
            arrowLibraryBack = document.getElementById('arrowLibraryBack'),
            containerLibrary = document.querySelector('.container__library')
        ;

        function aboutLibraryAnim() {
            let tl = new gsap.timeline();

            tl
                .fromTo(containerLibraryBack, {
                    autoAlpha: 0
                }, {
                    duration: 0.8,
                    autoAlpha: 1
                })
                .fromTo(containerLibraryPaper, {
                    autoAlpha: 0
                }, {
                    duration: 0.6,
                    delay: '-0.3',
                    autoAlpha: 1
                })
                .fromTo([containerLibraryFrameLeft, containerLibraryFrameRight], {
                    autoAlpha: 0
                }, {
                    duration: 0.6,
                    delay: '-0.3',
                    stagger: 0.07,
                    autoAlpha: 1
                })
                .fromTo([containerLibraryFrameLeftBack, containerLibraryFrameRightBack], {
                    autoAlpha: 0
                }, {
                    duration: 0.6,
                    delay: '-0.3',
                    stagger: 0.07,
                    autoAlpha: 1
                })
                .fromTo([containerLibraryTitle, containerLibraryLeftText, containerLibraryRightText], {
                    autoAlpha: 0
                }, {
                    duration: 0.4,
                    delay: '-0.3',
                    stagger: 0.05,
                    autoAlpha: 1
                })
            ;
        }
        aboutLibraryAnim();

        arrowLibraryBack.addEventListener('click', () => {
            gsap.to(containerLibrary, {
                duration: 0.3,
                autoAlpha: 0,
                onComplete: () => {
                    document.body.removeChild(containerLibrary);
                }
            })
        });
    }
}