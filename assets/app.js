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
    // showing the result 
    scrollTo(0,0);
    
    result.classList.remove('d-none');
    console.log(finalScore)
    
    // console.log(finalScore);
    // console.log(userAnswer);
    // console.log(correctAnswers);
    // console.log(`Your score is ${score}`);
    // animating the result 
    let output = 0;
    const timer = setInterval(()=>{
        finalScore.textContent = '%' + output;
        if (output === score){
            clearInterval('timer');
        }
        else{
            output++;
        }
    },10)
})