class ArrowBack {

    arrowBack() {
        const containerArrowBack = document.createElement('a');
        containerArrowBack.className = 'wrapper__game_arrow';
        containerArrowBack.id = 'arrowBack';
        containerArrowBack.innerHTML = `
            <img src="assets/games/cosmicpuzzles/images/cp_arrowBack.png" alt="Стрелка назад">
        `;
        container.appendChild(containerArrowBack);
    }

    clearStorage() {
        const containerClear = document.createElement('a');
        containerClear.className = 'wrapper__game_clear';
        containerClear.id = 'clearStorageClick';
        containerClear.innerHTML = `
            <img src="assets/games/cosmicpuzzles/images/cp_clearButton.png" alt="Стереть память">
        `;
        container.appendChild(containerClear);
    }
}