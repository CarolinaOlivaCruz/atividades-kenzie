// funções independentes
// passar o objeto e um segundo ou terceiro parâmetro

const slenzie = {
    nameEvent: '',
    questions: [question]
}

const question = {
    user: '',
    userQuestion: '',
    vote: 0,
}

function createEvent(objeto, nomeEvento) {

    if (typeof(nomeEvento) === 'string' && nomeEvento.length >= 5) {
        return objeto.nameEvent = nomeEvento;
    } else {
        return 'The input value is invalid';
    }

}
console.log(createEvent(slenzie, 'amigo'));
console.log(slenzie.nameEvent);


function addQuestion(objeto, question){

    objeto.questions[0].userQuestion = question;

    if(objeto.questions[0].user === ''){
        return "The user can't be empty";
    } 
    if(objeto.questions[0].userQuestion === ''){
        return "The question can't be null";
    } 

    return objeto.questions[0].userQuestion;
}
console.log(addQuestion(slenzie, 'Qual a pergunta?'));




function addVoteToQuestion(valor, objeto){

    for(i = 0; i < objeto.questions.length; i++){

        objeto.questions[0].vote += valor;

        if(valor > objeto.questions.length){
          return 'Question not found.'
        }
        if(valor <= 0){
            return 'The value is not allowed';
        } else {
            return 'Vote registered successfully';
        }
    }
}
console.log(addVoteToQuestion(1, slenzie));
console.log(slenzie.questions[0].vote);


function questioAnswered(valor, objeto){

    let answered = true;

    for(i = 0; i < objeto.questions.length; i++){

        objeto.questions[0].userQuestion += ' ' + answered;

        if(valor > objeto.questions.length){
            return 'Question not found.'
          }
          if(valor <= 0){
              return 'The value is not allowed';
          }
    }
}
console.log(questioAnswered(1, slenzie));
console.log(slenzie.questions[0].userQuestion);



function unansweredQuestions(objeto){

let outPut = [];

for(i = 0; i < objeto.questions.length; i++){
    if()
}

}
