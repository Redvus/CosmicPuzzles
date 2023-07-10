let progressChoiceCat = 0;

if (localStorage.getItem('progressChoiceCat') === null) {
    localStorage.setItem('progressChoiceCat', JSON.stringify(progressChoiceCat));
} else {
    progressChoiceCat.textContent = JSON.parse(localStorage.getItem('progressChoiceCat'));
}

function questionChoiceCat_1() {
    let questChoiceCatLoad = new Question();
    questChoiceCatLoad.questionBlock('Белка, Стрелка и ...', 'Кто первым из животных побывал в космосе?', 'Белка', 'Стрелка', 'Тузик');
    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarRight = [answerVar_1, answerVar_2, answerVar_3]
    ;

    for (let i = 0; i < answerVarRight.length; i++) {
        if (answerVarRight[i] == answerVarRight[1]) {
            answerVarRight[i].addEventListener('click', () => {
                let progressSum = JSON.parse(localStorage.getItem('progressChoiceCat'));
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressChoiceCat'));
                let progressLeftWrong = progressLeftStorage + 1;
                localStorage.setItem('progressLeft', JSON.stringify(progressLeftWrong));
            });
        }
    }
}