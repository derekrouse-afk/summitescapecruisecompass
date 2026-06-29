let currentQuestion = 0;
const userProfile = {};

const startButton = document.getElementById("startButton");
const introText = document.getElementById("introText");
const quizContainer = document.getElementById("quizContainer");
const questionTitle = document.getElementById("questionTitle");
const answers = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

const selectedAnswers = [];

startButton.addEventListener("click", () => {

    startButton.style.display = "none";
    introText.style.display = "none";

    quizContainer.classList.remove("hidden");

    loadQuestion();

});

function loadQuestion() {

    const question = questions[currentQuestion];

    questionTitle.textContent = question.question;

    answers.innerHTML = "";

    progressBar.style.width =
        ((currentQuestion + 1) / questions.length) * 100 + "%";

    question.answers.forEach((answer, index) => {

        const card = document.createElement("div");

        card.className = "answer";

        card.textContent = answer.text;

        if (selectedAnswers[currentQuestion] === index) {
            card.classList.add("selected");
        }

        card.addEventListener("click", () => {

            document.querySelectorAll(".answer").forEach(card =>
                card.classList.remove("selected")
            );

            card.classList.add("selected");

            selectedAnswers[currentQuestion] = index;

        });

        answers.appendChild(card);

    });

    backButton.style.display =
        currentQuestion === 0 ? "none" : "inline-block";

}

nextButton.addEventListener("click", () => {

    if (selectedAnswers[currentQuestion] === undefined) {

        alert("Please select an answer.");

        return;

    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        buildTravelerProfile();

        return;

    }

    loadQuestion();

});

backButton.addEventListener("click", () => {

    currentQuestion--;

    loadQuestion();

});

function buildTravelerProfile() {

    questions.forEach((question, index) => {

        const answer = question.answers[selectedAnswers[index]];

        Object.entries(answer.profile).forEach(([key, value]) => {

            if (!userProfile[key]) {

                userProfile[key] = 0;

            }

            userProfile[key] += value;

        });

    });

    console.clear();

    console.log("Traveler Profile");

    console.table(userProfile);

    const matches = calculateCruiseMatches(userProfile);

displayResults(matches);

    answers.innerHTML =
        "<h3>Your travel profile has been created.</h3><p>Next we'll compare it against every cruise line in our database.</p>";

    nextButton.style.display = "none";
    backButton.style.display = "none";

}function displayResults(matches){

    const topThree = matches.slice(0,3);

    questionTitle.innerHTML =
        "Your Cruise 🧭 Compass Results";

    answers.innerHTML = "";

    topThree.forEach(result=>{

        const card=document.createElement("div");

        card.className="answer";

        card.innerHTML=`

        <h3>${result.cruiseLine.name}</h3>

        <p>${result.percentage}% Match</p>

        <p>${result.cruiseLine.description}</p>

        `;

        answers.appendChild(card);

    });

    nextButton.style.display="none";

    backButton.style.display="none";

}