const questions = [
    {
        question: "Qual o maior vencedor da Libertadores?",
        answers: ["Club Atlético Independente", "São paulo", "Boca Juniors", "Ponte Preta"],
        correctAnswer: 0
    },
    {
        question: "Qual maior ganhador da Champions League?",
        answers: ["FC Manchester United", "FC Bayer München", "Real Madrid", "Varcelona"],
        correctAnswer: 2
    },
    {
        question: "Qual seleção tem mais Copas do Mundo?",
        answers: ["Argentina","Germany","Brasil","England"],
        correctAnswer: 2
    },
    {
        question: "Quem é o melhor jogador do mundo?",
        answers: ["Messi", "Cristiano Ronaldo", "Vinícius Junior", "Anthony"],
        correctAnswer: 3
    },
    {
        question: "Qual time no Brasil venceu todos campeonatos que disputou?",
        answers: ["Palmeiras", "São paulo", "Flamengo", "XV de Piracicaba"],
        correctAnswer: 1
    },
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `Você acertou ${score} de ${questions.length}`;
}

window.onload = loadQuestions;