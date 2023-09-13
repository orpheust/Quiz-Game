const mainMenu = document.getElementById("main-menu");
const backButtonOptions = document.getElementById("back-btn-options");
const backButtonCredits = document.getElementById("back-btn-credits");
const playButton = document.getElementById("play-btn");
const optionsButton = document.getElementById("options-btn");
const creditsButton = document.getElementById("credits-btn");
const nextButton = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz");
const optionsContainer = document.getElementById("options");
const creditsContainer = document.getElementById("credits");
const countdownElement = document.getElementById("countdown");
const timerElement = document.getElementById("timer");
const questionDuration = 15;
const homeButton = document.getElementById("home-btn");
const title = document.getElementById("title");
let countdownInterval;
let score = 0;

window.onload = function() {
    slider = document.querySelector(".slider input");
    slider.oninput = function() {
        progressBar = document.querySelector(".slider progress");
        progressBar.value = slider.value;
        sliderValue =  document.querySelector(".sliderValue");
        sliderValue.innerHTML = slider.value;
    }
}

playButton.addEventListener("click", () => {
    mainMenu.style.display = "none";
    quizContainer.style.display = "block";
    startQuiz();
});

optionsButton.addEventListener("click", () => {
    mainMenu.style.display = "none";
    optionsContainer.style.display = "block";
});

creditsButton.addEventListener("click", () => {
    mainMenu.style.display = "none";
    creditsContainer.style.display = "block";
});

backButtonOptions.addEventListener("click", () => {
    goToMainMenu();
});

backButtonCredits.addEventListener("click", () => {
    resetState();
    goToMainMenu();
});

homeButton.addEventListener("click", () => {
    goToMainMenu();
    homeButton.disabled = true;
    playButton.disabled = false;
    optionsButton.disabled = false;
    creditsButton.disabled = false;
    countdownElement.style.display = "none";
    title.style.display = "block";

});

function goToMainMenu() {
    quizContainer.style.display = "none";
    optionsContainer.style.display = "none";
    creditsContainer.style.display = "none";
    mainMenu.style.display = "block";
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startCountdown(duration) {
  countdownElement.style.display = "block";
  let timeLeft = duration;

timerElement.textContent = timeLeft;
countdownInterval = setInterval(() => {
  timeLeft--;
  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    timeLeft = 0;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        startCountdown(questionDuration);
    } else {
        showScore();
        countdownElement.style.display = "none"; 
        }
    }
    timerElement.textContent = timeLeft;
    }, 1000);
}

const questions = [
	{
		question: 'Norma hukum memiliki sifat memaksa dan mengikat, artinya ...',
        answers: [
            { text: 'Setiap warga negara harus tunduk kepada hukum dan bagi yang melanggar dikenakan sanksi', correct: true },
            { text: 'Penegak hukum harus dapat memaksakan kehendaknya pada pelanggar hukum', correct: false },
            { text: 'Hukum merupakan sumber tindakan bagi setiap manusia', correct: false },
            { text: 'Setiap warga Negara harus takut pada hukum yang berlaku', correct: false },
        ],
    },
    {
        question: 'Yang bukan dikatakan seseorang telah melakukan kegiatan korupsi, apabila telah memenuhi unsur-unsur berikut, adalah ...',
        answers: [
            { text: 'Adanya pelaku', correct: true },
            { text: 'Menyalahgunakan wewenang, kesempatan, dan sarana', correct: false },
            { text: 'Menguntungkan diri sendiri atau kelompok', correct: false },
            { text: 'Adanya kerugian negara', correct: false },
        ],
    },
    {
        question: 'Perhatikan data-data berikut !\n( 1 ) UUD NRI tahun 1945\n( 2 ) PeraturanPresiden\n( 3 ) UU/PERPU\n( 4 ) Ketetapan MPR\n( 5 ) Peraturan daerah Provinsi\n( 6 ) Peraturan daerah kabupaten / Kota\n( 7 ) Peraturan Pemerintah\nYang termasuk peraturan perundang undangan yang di buat oleh pemerintah pusat ditunjukkan nomor ...',
        answers: [
            { text: '(1)-(2)-(3) dan (4)', correct: true },
            { text: '(2)-(3)-(4) dan (5)', correct: false },
            { text: '(3)-(4)-(5) dan (6)', correct: false },
            { text: '(4)-(5)-(6) dan (7)', correct: false },
        ],
    },
    {
        question: 'Setiap perbuatan penyelenggaraan negara secara melawan hukum yang menguntungkan kepentingan keluarganya dan atau kroninya diatas kepentingan masyarakat, bangsa, dan Negara disebut ...',
        answers: [
            { text: 'Kolusi', correct: false },
            { text: 'Persekongkolan', correct: false },
            { text: 'Kesepakatan', correct: false },
            { text: 'Nepotisme', correct: true },
        ],
    },
    {
        question: 'Satu contoh sikap yang sesuai dengan norma kesusilaan adalah ...',
        answers: [
            { text: 'Menolong orang yang kesusahan', correct: true },
            { text: 'Berbagi kepada orang tua', correct: false },
            { text: 'Menghormati orang yang lebih tua', correct: false },
            { text: 'Membuang sampah pada tempatnya', correct: false },
        ],
    },
    {
        question: 'Dari pilihan berikut ini manakah yang merupakan sikap positif terhadap pengamalan Pancasila, sila ke-1 dalam kehidupan berbangsa dan bernegara adalah ...',
        answers: [
            { text: 'Tidak membeda-bedakan suku saat berteman', correct: false },
            { text: 'Beribadah sesuai dengan agama yang dianut', correct: true },
            { text: 'Bermusyawarah untuk memecahkan masalah', correct: false },
            { text: 'Menghormati orang yang lebih tua', correct: false },
        ],
    },
    {
        question: 'Setelah melalui proses perlawanan terhadap penjajah selama bertahun tahun, pada akhirnya perjuangan bangsa Indonesia dapat membuahkan hasil nyata dengan diproklamasikan kemerdekaan pada tanggal 17 Agustus 1945. Faktor utama yang menunjang keberhasilan tersebut adalah ...',
        answers: [
            { text: 'Persenjataan yang digunakan semakin canggih', correct: false },
            { text: 'Jumlah rakyat Indonesia semakin banyak', correct: false },
            { text: 'Bantuan dari negara lain yang simpatik', correct: false },
            { text: 'Tumbuhnya rasa persatuan dan kesatuan yang kokoh', correct: true },
        ],
    },
    {
        question: 'Pancasila merupakan bagian terpenting dalam pemerintah Indonesia kerena berkedudukan sebagai landasan ...',
        answers: [
            { text: 'Konstitusional', correct: true },
            { text: 'Struktural', correct: false },
            { text: 'Oprasional', correct: false },
            { text: 'Idiil', correct: false },
        ],
    },
    {
        question: 'Sejak dahulu banyak negara yang ingin menguasai negara Indonesia. Pernyataan tersebut menjelaskan salah satu penyebab pentingnya bela Negara dilihat dari alasan ...',
        answers: [
            { text: 'Demografis', correct: false },
            { text: 'Geografis', correct: false },
            { text: 'Sumber daya alam', correct: false },
            { text: 'Historis', correct: true },
        ],
    },
    {
        question: 'Hak hak dasar yang dimiliki manusia sejak lahir sebagai anugerah dari Tuhan Yang Maha Esa disebut ...',
        answers: [
            { text: 'Kewajiban asasi', correct: false },
            { text: 'Hak asasi', correct: true },
            { text: 'Hak kodrati', correct: false },
            { text: 'Hak alami', correct: false },
        ],
    },
];

shuffle(questions);

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;

function startQuiz() {
    title.style.display = "none";
    clearInterval(countdownInterval);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    homeButton.style.display = "none";
    showQuestion();
    startCountdown(questionDuration);
    nextButton.innerHTML = "Next";
    nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        clearInterval(countdownInterval);
        showQuestion();
        startCountdown(questionDuration);
    } else {
        showScore();
    }
});
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", (event) => selectAnswer(event, answer));
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = "true";
        }
    });

    nextButton.disabled = true;
}

function selectAnswer(event, answer) {
  const selectedBtn = event.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  clearInterval(countdownInterval);
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");

    const correctAnswerBtn = Array.from(answerButtonsElement.children).find(
      (button) => button.dataset.correct === "true"
    );

    if (correctAnswerBtn) {
      correctAnswerBtn.classList.add("correct");
    }
  }
  const answerButtons = document.querySelectorAll(".btn");
  answerButtons.forEach((button) => {
    button.disabled = true;
  });

  nextButton.disabled = false;
  nextButton.style.display = "block";
}

function showScore() {
    resetState();
    countdownElement.style.display = "none";
    questionElement.innerHTML = 'You scored ' + score + ' out of ' + questions.length + '!';
    nextButton.innerHTML = "Play Again";
    homeButton.style.display = "block";
    nextButton.style.display = "block";
    homeButton.disabled = false;
    nextButton.addEventListener("click", () => {
        startQuiz();
        clearInterval(countdownInterval);
        startCountdown(questionDuration);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
