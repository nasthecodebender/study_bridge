// ==================== QUIZ DATA ====================
const quizzes = {
    9: [
        { text: "Which of the following is a noun?", options: ["Run", "Happiness", "Quickly", "Beautiful"], correct: "B" },
        { text: "Identify the verb in this sentence: 'She runs fast every morning.'", options: ["She", "Runs", "Fast", "Morning"], correct: "B" },
        { text: "What is the plural form of 'child'?", options: ["Childs", "Children", "Childes", "Childen"], correct: "B" },
        { text: "Choose the correct sentence:", options: ["He go to school.", "He goes to school.", "He going to school.", "He gone to school."], correct: "B" },
        { text: "Which word is an adjective?", options: ["Slowly", "Tall", "Run", "Table"], correct: "B" },
        { text: "What is the past tense of 'eat'?", options: ["Eated", "Ate", "Eaten", "Eating"], correct: "B" },
        { text: "Choose the correct spelling:", options: ["Recieve", "Receive", "Recive", "Receeve"], correct: "B" },
        { text: "Which sentence uses a capital letter correctly?", options: ["i live in Addis Ababa.", "I live in addis ababa.", "I live in Addis Ababa.", "i Live in Addis Ababa."], correct: "C" },
        { text: "What is the opposite of 'happy'?", options: ["Glad", "Sad", "Joyful", "Cheerful"], correct: "B" },
        { text: "Choose the correct question tag: 'You are a student, _______?'", options: ["aren't you", "are you", "don't you", "isn't you"], correct: "A" },
        { text: "Identify the adverb: 'He spoke loudly.'", options: ["He", "Spoke", "Loudly", "None"], correct: "C" },
        { text: "What is a synonym for 'big'?", options: ["Small", "Tiny", "Large", "Little"], correct: "C" },
        { text: "Which sentence is in the past tense?", options: ["I eat bread.", "I ate bread.", "I will eat bread.", "I am eating bread."], correct: "B" },
        { text: "Choose the correct conjunction: 'I wanted to go, _______ it was raining.'", options: ["so", "but", "or", "for"], correct: "B" },
        { text: "What is the subject of this sentence: 'The dog barked loudly.'", options: ["The dog", "Barked", "Loudly", "None"], correct: "A" },
        { text: "Which word is a pronoun?", options: ["Table", "He", "Running", "Beautiful"], correct: "B" },
        { text: "What is the comparative form of 'good'?", options: ["Gooder", "Better", "Best", "More good"], correct: "B" },
        { text: "What is the superlative form of 'tall'?", options: ["Taller", "More tall", "Tallest", "Most tall"], correct: "C" },
        { text: "Choose the correct article: 'She is _______ honest person.'", options: ["a", "an", "the", "none"], correct: "B" },
        { text: "Which sentence is correct?", options: ["I have never been to Lalibela.", "I have never went to Lalibela.", "I never gone to Lalibela.", "I never go to Lalibela yesterday."], correct: "A" }
    ],
    10: [
        { text: "What is a phrase?", options: ["A group of words with a subject and verb", "A group of words without a subject and verb", "A single word", "A paragraph"], correct: "B" },
        { text: "What is a clause?", options: ["A group of words with a subject and verb", "A group of words without a verb", "A single letter", "A sentence always"], correct: "A" },
        { text: "Identify the independent clause: 'Because it was raining, we stayed home.'", options: ["Because it was raining", "We stayed home", "Because it was", "Raining we stayed"], correct: "B" },
        { text: "What is a compound sentence?", options: ["One independent clause", "Two or more independent clauses joined by a conjunction", "One independent and one dependent clause", "No clauses"], correct: "B" },
        { text: "Which sentence is complex?", options: ["I like coffee and tea.", "I like coffee because it is strong.", "I like coffee, but she likes tea.", "I like coffee."], correct: "B" },
        { text: "Choose the correct relative pronoun: 'The man _______ called you is my uncle.'", options: ["which", "who", "whose", "whom"], correct: "B" },
        { text: "What is the function of an adverb clause?", options: ["Modifies a noun", "Modifies a verb, adjective, or adverb", "Replaces a noun", "Joins two sentences"], correct: "B" },
        { text: "Identify the type of conditional: 'If it rains, the ground gets wet.'", options: ["Zero conditional", "First conditional", "Second conditional", "Third conditional"], correct: "A" },
        { text: "'If I had studied, I would have passed.' This is:", options: ["Zero conditional", "First conditional", "Second conditional", "Third conditional"], correct: "D" },
        { text: "What is the passive form of 'The chef cooks dinner'?", options: ["Dinner is cooked by the chef.", "Dinner was cooked by the chef.", "Dinner cooked by the chef.", "The chef is cooked by dinner."], correct: "A" }
    ],
    11: [
        { text: "What is a noun clause?", options: ["A clause that functions as a noun.", "A clause that modifies a verb.", "A clause that joins two sentences.", "A clause without a verb."], correct: "A" },
        { text: "Identify the noun clause: 'What she said surprised me.'", options: ["What she said", "surprised me", "she said", "me"], correct: "A" },
        { text: "What is an adjective clause?", options: ["A clause that modifies a noun.", "A clause that modifies a verb.", "A clause that acts as a subject.", "A clause that shows time."], correct: "A" },
        { text: "Identify the adjective clause: 'The book that I bought is interesting.'", options: ["The book", "that I bought", "is interesting", "I bought"], correct: "B" },
        { text: "What is an adverb clause?", options: ["A clause that modifies a verb, adjective, or adverb.", "A clause that modifies a noun.", "A clause that acts as a subject.", "A clause that replaces a pronoun."], correct: "A" },
        { text: "Identify the adverb clause: 'He left because he was tired.'", options: ["He left", "because he was tired", "he was tired", "left"], correct: "B" },
        { text: "What is the subjunctive mood used for?", options: ["Facts", "Wishes, suggestions, unreal situations", "Commands", "Questions"], correct: "B" },
        { text: "Correct the subjunctive: 'I suggest that he goes early.'", options: ["I suggest that he go early.", "I suggest that he went early.", "I suggest that he gone early.", "I suggest that he going early."], correct: "A" },
        { text: "What is parallel structure?", options: ["Using the same grammatical form for similar ideas.", "Using different tenses.", "Using long sentences.", "Using passive voice."], correct: "A" },
        { text: "Correct the parallel structure: 'She likes reading, to swim, and dancing.'", options: ["She likes reading, swimming, and dancing.", "She likes to read, to swim, and to dance.", "Both A and B", "She likes read, swim, dance."], correct: "C" }
    ],
    12: [
        { text: "What is a complex sentence?", options: ["One independent clause.", "One independent clause and at least one dependent clause.", "Two independent clauses.", "No clauses."], correct: "B" },
        { text: "What is a compound-complex sentence?", options: ["Two independent clauses and at least one dependent clause.", "One independent clause.", "Two dependent clauses.", "No independent clauses."], correct: "A" },
        { text: "Identify the sentence type: 'Although I was tired, I finished my homework, and I went to bed.'", options: ["Simple", "Compound", "Complex", "Compound-complex"], correct: "D" },
        { text: "What is a restrictive clause?", options: ["A clause that is essential to the meaning of the sentence (no commas).", "A clause that is extra information (commas).", "A clause that modifies a verb.", "A clause that acts as a subject."], correct: "A" },
        { text: "Identify the restrictive clause: 'The students who study hard will pass.'", options: ["The students", "who study hard", "will pass", "hard"], correct: "B" },
        { text: "What is a nonrestrictive clause?", options: ["Essential information (no commas).", "Extra information (commas).", "A verb clause.", "A noun clause."], correct: "B" },
        { text: "Identify the nonrestrictive clause: 'My brother, who lives in Addis, is a doctor.'", options: ["My brother", "who lives in Addis", "is a doctor", "Addis"], correct: "B" },
        { text: "What is the difference between 'its' and 'it's'?", options: ["Its = possessive; it's = it is.", "Its = it is; it's = possessive.", "Same.", "Its = plural; it's = singular."], correct: "A" },
        { text: "Choose the correct: 'The dog wagged _______ tail.'", options: ["it's", "its", "its'", "it is"], correct: "B" },
        { text: "What is the difference between 'then' and 'than'?", options: ["Then = time; than = comparison.", "Then = comparison; than = time.", "Same.", "Then = cause; than = effect."], correct: "A" }
    ]
};

// ==================== GLOBAL VARIABLES ====================
let currentGrade = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let quizActive = false;
let answerLocked = false;

// ==================== DOM ELEMENTS ====================
const quizContainer = document.getElementById('quizContainer');
const scoreDisplay = document.getElementById('scoreDisplay');
const questionCounter = document.getElementById('questionCounter');
const progressFill = document.getElementById('progressFill');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');

// ==================== HELPER FUNCTIONS ====================
function letterToIndex(letter) {
    return letter.charCodeAt(0) - 65;
}

function indexToLetter(index) {
    return String.fromCharCode(65 + index);
}

// ==================== CORE FUNCTIONS ====================
function loadQuiz(grade) {
    if (!quizzes[grade]) {
        alert('Quiz not available for this grade yet!');
        return;
    }
    
    currentGrade = grade;
    currentQuestions = [...quizzes[grade]];
    currentIndex = 0;
    score = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    quizActive = true;
    answerLocked = false;
    
    updateScoreDisplay();
    renderCurrentQuestion();
    
    quizContainer.classList.add('active');
    
    // Update active button style
    document.querySelectorAll('.grade-btn').forEach(btn => {
        if (btn.dataset.grade == grade) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score} / ${currentQuestions.length}`;
}

function renderCurrentQuestion() {
    if (!quizActive || currentIndex >= currentQuestions.length) {
        finishQuiz();
        return;
    }
    
    const question = currentQuestions[currentIndex];
    questionText.textContent = `${currentIndex + 1}. ${question.text}`;
    questionCounter.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
    
    const progressPercent = ((currentIndex + 1) / currentQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // Render options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, idx) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (userAnswers[currentIndex] === idx) {
            optionDiv.classList.add('selected');
        }
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'question';
        radio.value = idx;
        radio.checked = (userAnswers[currentIndex] === idx);
        radio.disabled = answerLocked;
        
        const label = document.createElement('label');
        label.textContent = `${indexToLetter(idx)}. ${option}`;
        
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        
        optionDiv.addEventListener('click', (e) => {
            if (answerLocked) return;
            if (e.target.tagName !== 'INPUT') {
                radio.checked = !radio.checked;
            }
            if (radio.checked) {
                selectAnswer(idx);
            }
        });
        
        radio.addEventListener('change', () => {
            if (radio.checked) selectAnswer(idx);
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Clear feedback
    feedbackDiv.className = 'feedback';
    feedbackDiv.style.display = 'none';
    feedbackDiv.innerHTML = '';
    
    // Update next button text
    if (currentIndex === currentQuestions.length - 1) {
        nextBtn.textContent = 'Finish Quiz';
    } else {
        nextBtn.textContent = 'Next Question';
    }
    
    // Enable/disable next button
    nextBtn.disabled = (userAnswers[currentIndex] === null);
}

function selectAnswer(selectedIdx) {
    if (answerLocked) return;
    
    const question = currentQuestions[currentIndex];
    const correctLetter = question.correct;
    const correctIdx = letterToIndex(correctLetter);
    const isCorrect = (selectedIdx === correctIdx);
    
    // Save answer
    userAnswers[currentIndex] = selectedIdx;
    
    // Update score if correct and not previously answered
    const wasPreviouslyCorrect = (userAnswers[currentIndex] !== null && 
        userAnswers[currentIndex] === correctIdx);
    
    if (isCorrect && !wasPreviouslyCorrect) {
        score++;
    } else if (!isCorrect && wasPreviouslyCorrect) {
        score--;
    }
    
    updateScoreDisplay();
    answerLocked = true;
    
    // Show feedback
    const correctOptionText = question.options[correctIdx];
    
    if (isCorrect) {
        feedbackDiv.className = 'feedback correct';
        feedbackDiv.innerHTML = `✅ Correct! Well done.`;
    } else {
        feedbackDiv.className = 'feedback wrong';
        feedbackDiv.innerHTML = `❌ Wrong! The correct answer is ${correctLetter}. ${correctOptionText}`;
    }
    
    // Highlight correct/wrong options
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach((opt, idx) => {
        if (idx === correctIdx) {
            opt.classList.add('correct-feedback');
        }
        if (idx === selectedIdx && idx !== correctIdx) {
            opt.classList.add('wrong-feedback');
        }
        const radio = opt.querySelector('input');
        if (radio) radio.disabled = true;
    });
    
    // Enable next button
    nextBtn.disabled = false;
}

function nextQuestion() {
    if (!quizActive) return;
    if (answerLocked === false && userAnswers[currentIndex] !== null) {
        answerLocked = true;
    }
    if (answerLocked === false) {
        alert('Please select an answer before continuing.');
        return;
    }
    
    currentIndex++;
    
    if (currentIndex < currentQuestions.length) {
        answerLocked = false;
        renderCurrentQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    quizActive = false;
    
    const total = currentQuestions.length;
    const percentage = (score / total) * 100;
    let gradeLetter = '';
    let gradeClass = '';
    
    if (percentage >= 90) { gradeLetter = 'A+'; gradeClass = 'grade-A'; }
    else if (percentage >= 80) { gradeLetter = 'A'; gradeClass = 'grade-A'; }
    else if (percentage >= 75) { gradeLetter = 'B+'; gradeClass = 'grade-B'; }
    else if (percentage >= 70) { gradeLetter = 'B'; gradeClass = 'grade-B'; }
    else if (percentage >= 65) { gradeLetter = 'C+'; gradeClass = 'grade-C'; }
    else if (percentage >= 60) { gradeLetter = 'C'; gradeClass = 'grade-C'; }
    else if (percentage >= 50) { gradeLetter = 'D'; gradeClass = 'grade-D'; }
    else { gradeLetter = 'F'; gradeClass = 'grade-F'; }
    
    let message = '';
    if (percentage >= 80) message = '🎉 Excellent work! You have mastered this grade level!';
    else if (percentage >= 65) message = '👍 Good job! Keep practicing to improve further.';
    else if (percentage >= 50) message = '📚 Not bad! Review the material and try again.';
    else message = '💪 Keep learning! Review the answers and try the quiz again.';
    
    feedbackDiv.className = 'feedback';
    feedbackDiv.style.display = 'block';
    feedbackDiv.innerHTML = `
        <div class="result-card">
            <h2>🎯 Quiz Complete!</h2>
            <div class="result-score">${score} / ${total}</div>
            <div class="result-percentage">${percentage.toFixed(1)}%</div>
            <div class="grade-letter ${gradeClass}">Grade: ${gradeLetter}</div>
            <p style="margin-top: 15px;">${message}</p>
            <button class="restart-btn" onclick="restartQuiz()">🔄 Take Quiz Again</button>
            <button class="restart-btn" onclick="changeGrade()" style="background: #6b7280; margin-left: 10px;">📚 Change Grade</button>
        </div>
    `;
    
    optionsContainer.innerHTML = '';
    nextBtn.style.display = 'none';
}

function restartQuiz() {
    nextBtn.style.display = 'block';
    loadQuiz(currentGrade);
}

function changeGrade() {
    nextBtn.style.display = 'block';
    quizContainer.classList.remove('active');
    document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
    currentGrade = null;
    quizActive = false;
}

// ==================== EVENT LISTENERS ====================
document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const grade = parseInt(btn.dataset.grade);
        loadQuiz(grade);
    });
});

nextBtn.addEventListener('click', nextQuestion);

// Make functions global for onclick handlers
window.restartQuiz = restartQuiz;
window.changeGrade = changeGrade;

// Initial state
quizContainer.classList.remove('active');