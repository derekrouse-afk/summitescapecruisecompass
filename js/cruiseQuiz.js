let currentQuestion = 0;
const selectedAnswers = [];
const userProfile = {};

const resultEmojis = {
    "royal-caribbean": "🚢🌴🎉",
    "carnival": "🎉🍹🌊",
    "norwegian": "🍽️🎭🎶",
    "msc": "🌍🍝⚓",
    "disney": "🏰✨🎈",
    "virgin": "🍸🎧💃",
    "celebrity": "🍷🍽️💎",
    "princess": "🌅🌊🛳️",
    "holland-america": "🍷🎻🗺️",
    "cunard": "🎩🛳️🌟"
};

const startButton = document.getElementById("startButton");
const introText = document.getElementById("introText");
const quizContainer = document.getElementById("quizContainer");
const questionTitle = document.getElementById("questionTitle");
const answers = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const resultContainer = document.getElementById("resultContainer");
const contactContainer = document.getElementById("contactContainer");
const cruiseLineInput = document.getElementById("cruiseLine");
const matchScoreInput = document.getElementById("matchScore");
const summaryText = document.getElementById("summaryText");
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    introText.style.display = "none";
    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    loadQuestion();
});

contactForm.addEventListener("submit", handleContactSubmit);

function handleContactSubmit(event) {
    event.preventDefault();

    const payload = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        cruiseLine: cruiseLineInput.value,
        matchScore: matchScoreInput.value,
        message: document.getElementById("message").value.trim(),
    };

    const endpoint = contactForm.dataset.endpoint || contactForm.action;
    submitContactData(endpoint, payload);
}

function submitContactData(endpoint, payload) {
    const button = contactForm.querySelector("button[type='submit']");
    button.disabled = true;
    button.textContent = "Sending...";
    contactMessage.classList.add("hidden");

    fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Unable to send request. Please try again later.");
        }
        return response.json().catch(() => null);
    })
    .then(() => {
        const userName = payload.name ? payload.name.split(' ')[0] : 'Traveler';
        showContactFeedback(`Thanks, ${userName}! Your cruise result has been sent successfully. One of our planners will reach out soon.`, true);
        contactForm.reset();
    })
    .catch(error => {
        showContactFeedback(error.message || "There was a problem sending your result.", false);
    })
    .finally(() => {
        button.disabled = false;
        button.textContent = "Send Your Result";
    });
}

function showContactFeedback(message, success) {
    contactMessage.textContent = message;
    contactMessage.classList.toggle("hidden", false);
    contactMessage.classList.toggle("success", success);
    contactMessage.classList.toggle("error", !success);
}

function loadQuestion() {
    answers.classList.add("fade-out");
    questionTitle.classList.add("fade-out");

    setTimeout(() => {
        const question = questions[currentQuestion];
        questionTitle.textContent = question.question;
        answers.innerHTML = "";
        progressBar.style.width = ((currentQuestion + 1) / questions.length) * 100 + "%";

        question.answers.forEach((answer, index) => {
            const card = document.createElement("div");
            card.className = "answer";
            card.textContent = answer.text;

            if (selectedAnswers[currentQuestion] === index) {
                card.classList.add("selected");
            }

            card.addEventListener("click", () => {
                document.querySelectorAll(".answer").forEach(card => card.classList.remove("selected"));
                card.classList.add("selected");
                selectedAnswers[currentQuestion] = index;
            });

            answers.appendChild(card);
        });

        if (currentQuestion === 0) {
            backButton.style.visibility = "hidden";
            backButton.style.display = "inline-block";
        } else {
            backButton.style.visibility = "visible";
            backButton.style.display = "inline-block";
        }
        nextButton.textContent = currentQuestion === questions.length - 1 ? "See My Matches ✨" : "Next ➡️";

        answers.classList.remove("fade-out");
        questionTitle.classList.remove("fade-out");
    }, 130);
}

nextButton.addEventListener("click", () => {
    if (selectedAnswers[currentQuestion] === undefined) {
        alert("Please select an answer before continuing.");
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion += 1;
        loadQuestion();
        return;
    }

    buildTravelerProfile();
});

backButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion -= 1;
        loadQuestion();
    }
});

function buildTravelerProfile() {
    const totals = {};
    const counts = {};

    questions.forEach((question, index) => {
        const answer = question.answers[selectedAnswers[index]];
        Object.entries(answer.profile).forEach(([key, value]) => {
            totals[key] = (totals[key] || 0) + value;
            counts[key] = (counts[key] || 0) + 1;
        });
    });

    Object.keys(totals).forEach(key => {
        const average = Math.round(totals[key] / counts[key]);
        userProfile[key] = Math.min(10, Math.max(0, average));
    });

    const matches = calculateCruiseMatches(userProfile);
    displayResults(matches);
}

function calculateCruiseMatches(profile) {
    const results = cruiseLines.map(cruiseLine => {
        let scoreSum = 0;
        let attributes = 0;

        Object.keys(profile).forEach(attribute => {
            const travelerValue = profile[attribute];
            const cruiseValue = cruiseLine.scores[attribute] || 0;
            const difference = Math.abs(travelerValue - cruiseValue);
            const attributeScore = Math.max(0, 100 - difference * 10);
            scoreSum += attributeScore;
            attributes += 1;
        });

        const percentage = attributes ? Math.round(scoreSum / attributes) : 0;
        return { cruiseLine, percentage };
    });

    return results.sort((a, b) => b.percentage - a.percentage);
}

function displayResults(matches) {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = "";

    const topThree = matches.slice(0, 3);

    const heading = document.createElement("h2");
    heading.textContent = "Your Cruise 🧭 Compass Results";
    resultContainer.appendChild(heading);

    const instruction = document.createElement("p");
    instruction.className = "result-instruction";
    instruction.textContent = "Choose the cruise that feels most like your dream vacation to send me a message and get more information tailored just for you.";
    resultContainer.appendChild(instruction);

    topThree.forEach(result => {
        const card = document.createElement("button");
        card.className = "answer";
        card.type = "button";
        card.setAttribute("aria-label", `Contact us about ${result.cruiseLine.name}`);
        const emojiString = resultEmojis[result.cruiseLine.id] || "🌊✨";
        card.innerHTML = `
            <h3>${emojiString} ${result.cruiseLine.name}</h3>
            <p><strong>${result.percentage}% Match</strong></p>
            <p>${result.cruiseLine.description}</p>
        `;
        card.addEventListener("click", () => openContactForm(result));
        resultContainer.appendChild(card);
    });

    const actions = document.createElement("div");
    actions.className = "result-actions";

    const resetButton = document.createElement("button");
    resetButton.className = "secondary-button";
    resetButton.textContent = "Try Again 🔄";
    resetButton.addEventListener("click", resetQuiz);
    actions.appendChild(resetButton);
    resultContainer.appendChild(actions);
}

function openContactForm(result) {
    // celebratory overlay then reveal contact form
    showCelebration(900, () => {
        quizContainer.classList.add("hidden");
        resultContainer.classList.add("hidden");
        contactContainer.classList.remove("hidden");

        const card = contactContainer.querySelector('.contact-card');
        if (card) {
            card.classList.remove('pop-in');
            // trigger reflow then add animation class
            void card.offsetWidth;
            card.classList.add('pop-in');
        }

        cruiseLineInput.value = result.cruiseLine.name;
        matchScoreInput.value = `${result.percentage}% Match`;
        summaryText.innerHTML = `You selected <strong>${result.cruiseLine.name}</strong> with a <strong>${result.percentage}% match</strong>. Fill out the form below and send me your result.`;
    });
}

function showCelebration(duration = 900, cb) {
    const overlay = document.createElement('div');
    overlay.className = 'celebrate-overlay';
    const emojis = ['🎉', '✨', '🧭', '🌟', '🥳'];
    for (let i = 0; i < 16; i++) {
        const span = document.createElement('span');
        span.className = 'celebration-emoji';
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.round(Math.random() * 100) + '%';
        span.style.animationDelay = (Math.random() * 0.25) + 's';
        span.style.fontSize = (18 + Math.random() * 36) + 'px';
        overlay.appendChild(span);
    }
    document.body.appendChild(overlay);
    setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => {
            overlay.remove();
            if (typeof cb === 'function') cb();
        }, 300);
    }, duration);
}

function resetQuiz() {
    currentQuestion = 0;
    selectedAnswers.length = 0;
    Object.keys(userProfile).forEach(key => delete userProfile[key]);
    resultContainer.classList.add("hidden");
    contactContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
}

function resetQuiz() {
    currentQuestion = 0;
    selectedAnswers.length = 0;
    Object.keys(userProfile).forEach(key => delete userProfile[key]);
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
}
