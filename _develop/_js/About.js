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
                <div class="container__about_person">
                    <h4>${peronFirstTitle}</h4>
                    <p>${peronFirstName}</p>
                </div>
                <div class="container__about_person">
                    <h4>${peronSecondTitle}</h4>
                    <p>${peronSecondName}</p>
                </div>
                <div class="container__about_person">
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

        const wrapperAboutBack = document.createElement('div');
        wrapperAboutBack.className = 'wrapper__back_about';
        wrapper.appendChild(wrapperAboutBack);

        let containerAboutTitle = document.querySelector('.container__title_category'),
            containerAboutPerson = document.querySelectorAll('.container__about_person'),
            aboutBack = document.querySelector('.wrapper__back_about')
        ;

        function aboutAuthorsAnim() {
            let tl = new gsap.timeline();

            tl
                .from(introBlockBack, {
                    autoAlpha: 0,
                    duration: 0.8,
                    delay: '-0.1'
                })
                .from(aboutBack, {
                    autoAlpha: 0,
                    duration: 0.6,
                    delay: '-0.3'
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
        const containerWrapper = document.createElement('div'),
            containerTitle = document.createElement('div')
        ;
        containerWrapper.className = 'container__wrapper container__wrapper_about';
        containerTitle.className = 'container__title container__title_category';

        containerTitle.innerHTML = `<h1 class="c">${libraryTitle}</h1>`;
        containerWrapper.innerHTML = `
            <div class="container__about container__about_text">
                <div class="container__about_left">
                    ${libraryLeftText}
                </div>
                <div class="container__about_right">
                    ${libraryRightText}
                </div>
            </div>
        `;
        container.appendChild(containerWrapper);
        containerWrapper.appendChild(containerTitle);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__game';
        wrapper.appendChild(introBlockBack);

        let containerAboutTitle = document.querySelector('.container__title_category'),
            containerAboutLeft = document.querySelectorAll('.container__about_left'),
            containerAboutRight = document.querySelectorAll('.container__about_right')
        ;

        function aboutLibraryAnim() {
            let tl = new gsap.timeline();

            tl
                .from(introBlockBack, {
                    autoAlpha: 0,
                    duration: 0.8,
                    delay: '-0.1'
                })
                .from(containerAboutTitle, {
                    autoAlpha: 0,
                    duration: 0.6,
                    delay: '-0.3'
                })
                .from([containerAboutLeft, containerAboutRight], {
                    autoAlpha: 0,
                    duration: 0.6,
                    delay: '-0.3',
                    stagger: 0.2
                })
            ;
        }
        aboutLibraryAnim();
    }
}