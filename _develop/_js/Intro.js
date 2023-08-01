class Intro {

    introStart() {
        // wrapper.className += ' wrapper__intro';
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

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__intro';
        wrapper.appendChild(introBlockBack);

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

        const wrapperTop = document.querySelector('.wrapper__top'),
            wrapperTitle = document.querySelector('.wrapper__title'),
            wrapperBottom = document.querySelector('.wrapper__bottom'),
            wrapperBack = document.querySelector('.wrapper__intro')
        ;

        function introAnim() {
            let tl = gsap.timeline();
            tl
                .to(wrapperBack, {
                    duration: 0.6,
                    delay: '-0.4',
                    autoAlpha: 1
                })
                .to(wrapperTop, {
                    duration: 0.6,
                    autoAlpha: 1
                })
                .to(wrapperTitle, {
                    duration: 0.6,
                    delay: '-0.4',
                    autoAlpha: 1
                })
                .to(wrapperBottom, {
                    duration: 0.6,
                    delay: '-0.4',
                    autoAlpha: 1
                })
            ;
        }
        introAnim();
    }
}