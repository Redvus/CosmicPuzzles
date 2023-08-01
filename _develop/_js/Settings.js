class Settings {

    settingsBlock() {
        const settingsBack = document.createElement('div'),
            settingsBlock = document.createElement('div')
        ;
        settingsBack.className = 'wrapper__lightbox';
        settingsBlock.className = 'wrapper__lightbox_block';
        settingsBlock.innerHTML = `
            <a href="javascript:void(0);" class="wrapper__lightbox_close" id="settingsCloseButton"></a>
            <a href="javascript:void(0);" class="wrapper__lightbox_button" id="turnOfSoundButton">Выключить звук</a>
            <a href="javascript:void(0);" class="wrapper__lightbox_button" id="clearProgressButton">Сбросить прогресс</a>
        `;
        settingsBack.appendChild(settingsBlock);
        wrapper.appendChild(settingsBack);

        function settingsBlockAnim() {
            let tl = gsap.timeline();
            const settingsBack = document.querySelector('.wrapper__lightbox'),
                settingsBlock = document.querySelector('.wrapper__lightbox_block')
            ;
            tl
                .from(settingsBack, {
                    duration: 0.3,
                    autoAlpha: 0
                })
                .from(settingsBlock, {
                    duration: 0.3,
                    y: '-5%',
                    autoAlpha: 0
                })
            ;
        }
        settingsBlockAnim();
    }
}