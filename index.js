const questions = [
  {
    'id': 1,
    "question": '¿En qué continente está Benin?',
    'Options': [
      'África',
      'Antártida',
      'Estados Unidos',
      'Europa'
    ],
    'answer': 'África'
  },
  {
    'id': 2,
    "question": '¿Cuál es el idioma oficial de Benin?',
    'Options': [
      'Francés',
      'Italiano',
      'Turco',
      'Español'
    ],
    'answer': 'Francés'
  },
  {
    'id': 3,
    "question": '¿Qué es lo que más vende al otros paises?',
    'Options': [
      'Indumentaria',
      'Automóviles',
      'Algodón',
      'Carne'
    ],
    'answer': 'Algodón'
  },
  {
    'id': 4,
    "question": '¿Cómo es el clima en Benin?',
    'Options': [
      'Frío',
      'Tropical',
      'Caluroso'
    ],
    'answer': 'Tropical'
  },
  {
    'id': 5,
    "question": '¿Cual es la religión oficial?',
    'Options': [
      'Indú',
      'Católico',
      'Vudú',
      'Judío'
    ],
    'answer': 'Vudú'
  },
  {
    'id': 6,
    "question": 'Benin le ofrece a los visitantes ...',
    'Options': [
      'Comida y bebida',
      'Regala ropa',
      'No ofrece nada',
      'Un beso en la frente'
    ],
    'answer': 'Comida y bebida'
  },
  {
    'id': 7,
    "question": '¿Cuál es su capital?',
    'Options': [
      'Buenos Aires',
      'Washington',
      'Turquia',
      'Porto novo'
    ],
    'answer': 'Porto novo'
  },
  {
    'id': 8,
    "question": '¿Cuántas veces clasificó al mundial de fútbol masculino?',
    'Options': [
      '1 vez',
      '2 veces',
      '3 veces',
      'Ninguna'
    ],
    'answer': 'Ninguna'
  },
  {
    'id': 9,
    "question": '¿En qué parte del continente está ubicado?',
    'Options': [
      'al Norte',
      'al Sur',
      'al Este',
      'al Oeste'
    ],
    'answer': 'al Oeste'
  },
  {
    'id': 10,
    "question": '¿Cuántas personas viven en Benin?',
    'Options': [
      '11 millones',
      '7 millones',
      '20 millones',
      '100 mil'
    ],
    'answer': '11 millones'
  },
  {
    'id': 11,
    "question": '¿Cual es el animal que adoran?',
    'Options': [
      'Jaguar',
      'Tortuga',
      'Serpiente',
      'Las Aves'
    ],
    'answer': 'Serpiente'
  }
]

const start_quiz = document.querySelector('#start_quiz');
const container = document.querySelector('.quiz_container');
const result_box = document.querySelector('.result_box');
const next = document.querySelector('#next');
const section_next = document.querySelector('.ques');
const replay = document.querySelector('#replay');
const options = document.querySelector('.options');
const buttons = document.querySelector('.buttons');

// start_quiz button event 
start_quiz.addEventListener('click', () => {
  start_quiz.style.display = 'none';
  container.style.display = 'block';
  show_question(0);
  buttons.classList.add('disabled');

})

// replay button event 
replay.addEventListener('click', () => {
  start_quiz.style.display = 'block';
  result_box.style.display = 'none';
  active = 0;
  userscore = 0;
  show_question(active);
  options.classList.remove('disabled');
})

// next button event 
let active = 0; // question index number
next.addEventListener('click', () => {
  if (active < questions.length - 1) {
    active++;
    show_question(active);
    options.classList.remove('disabled');
    buttons.classList.add('disabled')
  }
  else {
    result_box.style.display = 'block';
    container.style.display = 'none'
    result(); //result function 
  }
})

// show_question function 
let userscore = 0; // correct answer select by user
function show_question(index) {
  // question name 
  const quiz_question = document.querySelector('.quiz_question');
  quiz_question.innerHTML = `<h1><p>${questions[index].id}. </p>${questions[index].question}</h1>`
  //  question option list 
  options.innerHTML = `<div class="option_list">${questions[index].Options[0]}</div>
    <div class="option_list">${questions[index].Options[1]}</div>
    <div class="option_list">${questions[index].Options[2]}</div>
    <div class="option_list">${questions[index].Options[3]}</div>`

  const options_list = document.querySelectorAll('.option_list');
  options_list.forEach((e) => {
    e.addEventListener('click', (op) => {
      if (op.target.innerHTML == questions[active].answer) {
        console.log(op.target.innerHTML);
        userscore++; //userscore incresed by correct answer
        e.classList.add('correct');
        options.classList.add('disabled');
        buttons.classList.remove('disabled');
      }

      else {
        e.classList.add('wrong');
        options.classList.add('disabled');
        buttons.classList.remove('disabled');
        // if wrong answer selected then correct class added correct answer 
        for (let i = 0; i < options.children.length; i++) {
          if (options.children[i].innerHTML == questions[active].answer) {
            options.children[i].classList.add('correct');
          }
        }
      }
    })
  })
}

function result() {
  const score = document.querySelector('.score');
  score.innerHTML = `<h1>Your Score is</h1><span><p>${userscore}</p>of<p>${questions.length}</p></span>`
}

