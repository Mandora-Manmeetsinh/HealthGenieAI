// quizzes.js

document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.querySelector('#quiz-form');
    const resultContainer = document.querySelector('#result-container');
    
    quizForm.addEventListener('submit', handleQuizSubmit);

    function handleQuizSubmit(event) {
        event.preventDefault();

        // Define correct answers (you can update these according to your quiz questions)
        const correctAnswers = {
            question1: 'Panchakarma',
            question2: 'Qi',
            question3: 'Pitta',
            question4: 'Holistic well-being',
            question5: 'Ginger',
            question6: 'Humors',
            question7: 'Cupping',
            question8: '"Like cures like"',
            question9: 'Natural healing methods',
            question10: 'Oil massage for rejuvenation'

        };

        // Collect user responses
        const userAnswers = new FormData(quizForm);

        let score = 0;
        for (const [question, answer] of userAnswers.entries()) {
            if (correctAnswers[question] === answer) {
                score++;
            }
        }

        // Calculate and display results
        const totalQuestions = Object.keys(correctAnswers).length;
        const percentage = (score / totalQuestions) * 100;

        resultContainer.innerHTML = `
            <h2>Your Quiz Results</h2>
            <p>You answered ${score} out of ${totalQuestions} questions correctly.</p>
            <p>Your score: ${percentage}%</p>
            <p>${percentage >= 70 ? 'Great job!' : 'Try again for a better score!'}</p>
        `;

        // Optionally, reset the form
        quizForm.reset();
    }
});
