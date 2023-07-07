class ChoiceCategory {

    choiceCategory(choiceCategoryName) {
        // wrapper.className += ' wrapper__game';
        const containerWrapper = document.createElement('div'),
              choiceCategoryTitle = document.createElement('div')
        ;
        containerWrapper.className = 'container__wrapper';
        choiceCategoryTitle.className = 'container__title';
        choiceCategoryTitle.innerHTML = `
            <h1>${choiceCategoryName}</h1>
        `;
        containerWrapper.innerHTML = `
            <a href="javascript:void(0);" class="category__element category__element_1" id="categorySub_1">
                <ul class="category__element_stars"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_1.png" alt="Категория ${choiceCategoryName}. Первый вопрос">
                </picture>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_2 category__element--hidden" id="categorySub_2">
                <ul class="category__element_stars"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_2.png" alt="Категория ${choiceCategoryName}. Второй вопрос">
                </picture>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_3 category__element--hidden" id="categorySub_3">
                <ul class="category__element_stars"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_3.png" alt="Категория ${choiceCategoryName}. Третий вопрос">
                </picture>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_4 category__element--hidden" id="categorySub_4">
                <ul class="category__element_stars"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_4.png" alt="Категория ${choiceCategoryName}. Четвертый вопрос">
                </picture>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_5 category__element--hidden" id="categorySub_5">
                <ul class="category__element_stars"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_5.png" alt="Категория ${choiceCategoryName}. Пятый вопрос">
                </picture>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_6 category__element--hidden" id="categorySub_6">
                <ul class="category__element_stars"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_6.png" alt="Категория ${choiceCategoryName}. Шестой вопрос">
                </picture>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_7 category__element--hidden" id="categorySub_7">
                <ul class="category__element_stars"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_7.png" alt="Категория ${choiceCategoryName}. Седьмой вопрос">
                </picture>
            </a>
            <a href="javascript:void(0);" class="category__element category__element_8 category__element--hidden" id="categorySub_8">
                <ul class="category__element_stars"></ul>
                <picture class="category__element_image">
                    <img src="assets/games/cosmicpuzzles/images/cp_catChoice_8.png" alt="Категория ${choiceCategoryName}. Восьмой вопрос">
                </picture>
            </a>
        `;

        container.appendChild(containerWrapper);
        containerWrapper.appendChild(choiceCategoryTitle);

        function choiceCategoryAnimation() {
            let tl = gsap.timeline();

            const categorySub_1 = document.getElementById('categorySub_1'),
                categorySub_2 = document.getElementById('categorySub_2'),
                categorySub_3 = document.getElementById('categorySub_3'),
                categorySub_4 = document.getElementById('categorySub_4'),
                categorySub_5 = document.getElementById('categorySub_5'),
                categorySub_6 = document.getElementById('categorySub_6'),
                categorySub_7 = document.getElementById('categorySub_7'),
                categorySub_8 = document.getElementById('categorySub_8'),
                containerWrapper = document.querySelector('.container__wrapper')
            ;

            tl
                .from(containerWrapper, {
                    autoAlpha: 0,
                    duration: "0.6",
                })
                .from([categorySub_1, categorySub_2, categorySub_3, categorySub_4, categorySub_5, categorySub_6, categorySub_7, categorySub_8], {
                    autoAlpha: 0,
                    duration: "0.3",
                    delay: "-0.6",
                    stagger: 0.2
                })
            ;
        }

        choiceCategoryAnimation();
    }

    choiceCategoryElement() {

    }
}