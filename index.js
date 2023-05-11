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
    'img': 'silueta_Africa_Benin.png',
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
    'img': 'francia.png',
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
    'img': 'cotonegraine.jpg',
    'answer': 'Algodón'
  },
  {
    'id': 4,
    "question": '¿Cómo es el clima en Benin?',
    'Options': [
      'Frío',
      'Tropical',
      'Caluroso',
      'Templado'
    ],
    'img': 'ouidah_benin.jpg',
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
    'img': 'benin-voodoo-festival.jpg',
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
    'img': '800px-Lunch_vendor.jpg',
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
    'img': 'yanick-folly-benin-porto-novo.jpg',
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
    'img': '31o6_482Qhk_l.jpg',
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
    'img': 'silueta_Africa_Benin.png',
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
    'img': '1556205060_793921_1556207162_noticia_normal_recorte1.jpg',
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
    'img': 'benin-serpiente.webp',
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
const imagesResponse = document.querySelector('.imagesResponse');

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
  let optionsItems = ''
  imagesResponse.innerHTML = ''
  for (let i = 0; i < questions[index].Options.length; i++) {
    optionsItems += `<div class="option_list">${questions[index].Options[i]}</div>`;
  }
  options.innerHTML = optionsItems

  const options_list = document.querySelectorAll('.option_list');
  options_list.forEach((e) => {
    e.addEventListener('click', (op) => {
      if (op.target.innerHTML == questions[active].answer) {
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
      imagesResponse.innerHTML = `<img src=${questions[index].img} />`
    })
  })
}

function result() {
  const score = document.querySelector('.score');
  let message = ''
  if (userscore === questions.length) message = `<h1>Felicidades!!!</h1><span><p>Acertaste todas las preguntas</p></span>`;
  else if (userscore > (questions.length * 0.7)) message = `<h1>Muy bien!</h1><span>Acertaste<p>${userscore}</p>de<p>${questions.length}</p>preguntas</span>`;
  else if (userscore > (questions.length * 0.5)) message = `<h1>Bien</h1><span>Acertaste<p>${userscore}</p>de<p>${questions.length}</p>preguntas</span>`;
  else message = `<h1>Acertaste</h1><span><p>${userscore}</p>de<p>${questions.length}</p>preguntas.</span>`;
  score.innerHTML = message;
}

