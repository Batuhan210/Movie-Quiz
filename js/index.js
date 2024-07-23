const quizData = [
  {
    question:
      "Kara Şövalye filminde Joker karakterini canlandıran aktör kimdir?",
    a: "Jack Nicholson",
    b: "Jared Leto",
    c: "Heath Ledger",
    d: "Tom Hardy",
    correct: "c",
  },
  {
    question: "The Matrix filminde Neo karakterini canlandıran aktör kimdir?",
    a: "Willem Dafoe",
    b: "Brad Pitt",
    c: "Tom Cruise",
    d: "Keanu Reeves",
    correct: "d",
  },
  {
    question: "Titanic filminde Rose karakterini canlandıran aktris kimdir?",
    a: "Julia Roberts",
    b: "Kate Winslet",
    c: "Maryl Streep",
    d: "Sandra Bullock",
    correct: "b",
  },
  {
    question:
      "Inception filminde rüya hırsızı Dom Cobb karakterini canlandıran aktör kimdir?",
    a: "Leonardo Dicaprio",
    b: "Christian Bale",
    c: "Will Smith",
    d: "Vin Diese",
    correct: "a",
  },
  {
    question:
      "Pulp Fiction filminde Vincent Vega karakterini canlandıran aktör kimdir?",
    a: "Bruce Wills",
    b: "John Travolta",
    c: "Harvey Keitel",
    d: "Samuel L. Jackson",
    correct: "c",
  },
  {
    question:
      "The Godfather filminde Don Vito Corleone karakterini canlandıran aktör kimdir?",
    a: "Al Pacino",
    b: "Robert De Niro",
    c: "Marlon Brando",
    d: "James Caan",
    correct: "c",
  },
  {
    question:
      "Forrest Gump filminde Forrest Gump karakterini canlandıran aktör kimdir?",
    a: "Tom Hanks",
    b: "Paul Walker",
    c: "Brad Pitt",
    d: "Johnny Depp",
    correct: "a",
  },
  {
    question:
      "Eseratin Bedeli filminde Andy Dufresne karakterini canlandıran aktör kimdir?",
    a: "Tim Robbins",
    b: "Morgan Freeman",
    c: "Kevin Spacey",
    d: "Dwayne Johnson",
    correct: "a",
  },
  {
    question:
      "Gladyatör filminde Maximus karakterini canlandıran aktör kimdir?",
    a: "Mel Gibson",
    b: "Andrew Garfield",
    c: "Cillian Murphy",
    d: "Russell Crowe",
    correct: "d",
  },
  {
    question:
      "Yüzüklerin Efendisi üçlemesinin yönetmeni kimdir?",
    a: "Steven Spielberg",
    b: "Christopher Nolan",
    c: "Peter Jackson",
    d: "James Cameron",
    correct: "c",
  },
  {
    question:
      "Annabelle filminde lanetli oyuncak bebeği araştıran çift kimdir?",
    a: "Sam ve Dean Winchester",
    b: "Ed ve Lorraine Warren",
    c: "Harry Maguire ve Lisandro Martinez",
    d: "Mulder ve Scully",
    correct: "b",
  },
];


const quiz = document.getElementById('quiz');
const answerElems = document.getElementsByName('answer'); // changed to getElementsByName
const questionElem = document.getElementById('question');
const option_a = document.getElementById('a_text');
const option_b = document.getElementById('b_text');
const option_c = document.getElementById('c_text');
const option_d = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const scoreDisplay = document.getElementById('score'); // added score display element

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElems.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElems.forEach((answerElem) => {
    if (answerElem.checked) {
      answer = answerElem.id;
    }
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElem.innerText = currentQuizData.question;
  option_a.innerText = currentQuizData.a;
  option_b.innerText = currentQuizData.b;
  option_c.innerText = currentQuizData.c;
  option_d.innerText = currentQuizData.d;
  scoreDisplay.innerText = `Skor: ${score}/${quizData.length}`; // update score display
};

loadQuiz();

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>Şu kadar ${score}/${quizData.length} soruyu doğru cevapladın</h2>
        <button onclick="location.reload()">Tekrar oyna</button>
      `;
    }
  } else {
    alert("Lütfen bir cevap seç!"); 
  }
});