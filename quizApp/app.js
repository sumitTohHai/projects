const questions= [{
    'que' : 'Which of the language is markup language',
    'a' : 'HTMl',
    'b' : 'CSS',
    'c' : 'JavaScipt',
    'd' : 'PHP',
    'correct' : 'a'
},
{
    'que' : "In which year JavaScritp was launched",
    'a' : '1996',
    'b' : '1995',
    'c' : '1994',
    'd' : 'none of the above',
    'correct' : 'c'
},
{
    'que' : "What does CSS stand for",
    'a' : 'Hyper Text Markup Language',
    'b' : 'Cascadic Style Sheet',
    'c' : 'Jasson object notation',
    'd' : 'none of the above',
    'correct' : 'b'
}



]
let index =0;
let total = questions.length;
let right =0;
let wrong =0;

const quesbox = document.querySelector("#quesbox")
const optionInput =document.querySelectorAll(".input")
const loadQuestion =()=>{
    if (index=== total) {
        return endQuiz()
        
    }

    reset();

    const data = questions[index]
    
    quesbox.innerText =` ${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;

}

const submitQuiz = ()=>{
    const ans = getanswer()
    const data = questions[index]
    if(ans===data.correct){
        right++ ;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();

    return;

}

const getanswer=()=>{
    let answer;
    optionInput.forEach(
        (input) =>{
            if(input.checked){
               answer =input.value;
            }
            
        }
    )
    return answer;
}

const reset =()=>{
    optionInput.forEach(
        (input)=>{
            input.checked= false;
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML = `
    <h3> Thank you for playing  This Quiz </h3>
    <h2>${right} / ${total} are correct  </h2>
    
    `
}

loadQuestion();