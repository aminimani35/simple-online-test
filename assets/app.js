const correctAnswers = ['A','B','B','A'];
const form = document.querySelector('.quiz-form');
let finalScore = document.querySelector('span');
let result = document.querySelector('.result')


form.addEventListener('submit' , e => {
    e.preventDefault();
    
    let userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score = 0 ; 
    userAnswer.forEach((Answers , index) => {
        if (Answers === correctAnswers[index]){
            score += 25;
        }
        
    })
    
    finalScore.textContent = '%' + score;
    result.classList.remove('d-none');
    console.log(finalScore)
    
    // console.log(finalScore);
    // console.log(userAnswer);
    // console.log(correctAnswers);
    console.log(`Your score is ${score}`);
})