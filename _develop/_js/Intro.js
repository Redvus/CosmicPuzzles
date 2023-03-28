class Intro {

    introStart() {
        wrapper.className += ' wrapper__intro';
        // Солнце и планеты
        const introBlockTop = document.createElement('div');
        introBlockTop.className = 'wrapper__top';
        introBlockTop.innerHTML = `
            <picture id="introSun">
                <img src="assets/games/cosmicpuzzles/images/cp_beginSun.png" alt="Заставка. Солнце">
            </picture>
            <picture id="introPlanet">
                <img src="assets/games/cosmicpuzzles/images/cp_beginPlanet.png" alt="Заставка. Планеты">
            </picture>
        `;
        wrapper.removeChild(container);
        wrapper.appendChild(introBlockTop);

        // Название игры
        const introBlockTitle = document.createElement('div');
        introBlockTitle.className = 'wrapper__title';
        const introBlockTitleTop = document.createElement('div');
        introBlockTitleTop.className = 'wrapper__title_top';
        introBlockTitle.appendChild(introBlockTitleTop);
        introBlockTitleTop.innerHTML = `
            <picture id="introCosmicK" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_K.png" alt="Космические пазлы. К">
            </picture>
            <picture id="introCosmicO" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_O.png" alt="Космические пазлы. О">
            </picture>
            <picture id="introCosmicS" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_S.png" alt="Космические пазлы. С">
            </picture>
            <picture id="introCosmicM" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_M.png" alt="Космические пазлы. М">
            </picture>
            <picture id="introCosmicI" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_I.png" alt="Космические пазлы. И">
            </picture>
            <picture id="introCosmicCH" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_CH.png" alt="Космические пазлы. Ч">
            </picture>
            <picture id="introCosmicE" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_E.png" alt="Космические пазлы. Е">
            </picture>
            <picture id="introCosmicS2" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_S.png" alt="Космические пазлы. С">
            </picture>
            <picture id="introCosmicK2" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_K2.png" alt="Космические пазлы. К">
            </picture>
            <picture id="introCosmicI2" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_I.png" alt="Космические пазлы. И">
            </picture>
            <picture id="introCosmicE2" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginCosmic_E.png" alt="Космические пазлы. Е">
            </picture>
        `;
        const introBlockTitleBottom = document.createElement('div');
        introBlockTitleBottom.className = 'wrapper__title_bottom';
        introBlockTitle.appendChild(introBlockTitleBottom);
        introBlockTitleBottom.innerHTML = `
            <picture id="introPazzlesP" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginPazzles_P.png" alt="Космические пазлы. П">
            </picture>
            <picture id="introPazzlesA" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginPazzles_A.png" alt="Космические пазлы. А">
            </picture>
            <picture id="introPazzlesZ" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginPazzles_Z.png" alt="Космические пазлы. З">
            </picture>
            <picture id="introPazzlesL" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginPazzles_L.png" alt="Космические пазлы. Л">
            </picture>
            <picture id="introPazzlesY" class="wrapper__title_symbol">
                <img src="assets/games/cosmicpuzzles/images/cp_beginPazzles_Y.png" alt="Космические пазлы. Ы">
            </picture>
        `;
        wrapper.appendChild(introBlockTitle);

        // Кнопки
        const introBlockButtons = document.createElement('div');
        introBlockButtons.className = 'wrapper__bottom';
        introBlockButtons.innerHTML = `
            <ul class="wrapper__bottom_menu">
                <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>
                <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>
                <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>
            </ul>
        `;
        wrapper.appendChild(introBlockButtons);

        let
            introS = document.getElementById('introS'),
            introM = document.getElementById('introM'),
            introSlavic = document.getElementById('introSlavic'),
            introMyth = document.getElementById('introMyths'),
            introButton = document.getElementById('introButton'),
            choiceCat = new Choice()
        ;

        function introAnim() {
            let tl = gsap.timeline({
                // onComplete: introButtonLoadNext
            });

            tl
                .fromTo(introS, {
                    autoAlpha: 0,
                    x: '-10%'
                }, {
                    duration: 1,
                    delay: 0.3,
                    autoAlpha: 1,
                    x: 0,
                })
                .fromTo(introSlavic, {
                    autoAlpha: 0,
                    x: '5%'
                }, {
                    duration: 1,
                    delay: '-0.7',
                    autoAlpha: 1,
                    x: 0,
                })
                .fromTo([introM, introMyth], {
                    autoAlpha: 0,
                    x: '5%'
                }, {
                    duration: 1,
                    delay: '-0.7',
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0.45,
                })
                .fromTo(introButton, {
                    autoAlpha: 0,
                    y: '10%'
                }, {
                    duration: 1,
                    delay: '-0.8',
                    autoAlpha: 1,
                    y: 0,
                })
            ;
        }
        // introAnim();

        // function introButtonLoadNext() {
        //     introButton.addEventListener('click', function () {
        //         gsap.to(introBlock, {
        //             duration: 1,
        //             autoAlpha: 0,
        //             x: '-3%',
        //             onComplete: () => {
        //                 container.removeChild(introBlock);
        //                 choiceCat.choiceCategory();
        //             }
        //         });
        //     })
        // }
    }
}