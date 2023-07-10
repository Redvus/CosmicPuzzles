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
}