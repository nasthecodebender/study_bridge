const chatButton = document.getElementById("chatButton");
const chatWindow = document.getElementById("chatWindow");
const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendButton = chatWindow ? chatWindow.querySelector(".chat-input button") : null;

// Toggle chat window
function toggleChat() {
    if (!chatWindow) return;
    const isOpen = chatWindow.style.display === "flex";
    chatWindow.style.display = isOpen ? "none" : "flex";
    if (!isOpen && userInput) {
        userInput.focus();
    }
}

// Send message on button click or Enter key
function sendMessage() {
    if (!userInput) return;
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, "user");
    userInput.value = "";

    
    showTyping();

    
    queryAI(text);
}

// Listen for Enter key
if (userInput) {
    userInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
}

// Add message to chat
function addMessage(text, sender) {
    if (!chatMessages) return;

    const row = document.createElement("div");
    row.className = "msg-row " + (sender === "user" ? "msg-user" : "msg-bot");

    const bubble = document.createElement("div");
    bubble.className = "msg-bubble " + (sender === "user" ? "bubble-user" : "bubble-bot");
    bubble.textContent = text;

    row.appendChild(bubble);
    chatMessages.appendChild(row);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTyping() {
    if (!chatMessages) return;
    const typing = document.createElement("div");
    typing.className = "msg-row msg-bot";
    typing.id = "typingIndicator";
    typing.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTyping() {
    const typing = document.getElementById("typingIndicator");
    if (typing) typing.remove();
}


async function queryAI(text) {
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const response = await fetch(
            "https://api-inference.huggingface.co/models/microsoft/phi-2",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    inputs: "You are StudyBridge AI, a helpful Ethiopian high school study assistant. Answer the following question about Ethiopian education, national exams, or study materials: " + text + "\nAnswer:",
                    parameters: {
                        max_length: 200,
                        temperature: 0.7,
                        top_p: 0.9,
                        do_sample: true,
                    }
                }),
                signal: controller.signal
            }
        );

        clearTimeout(timeoutId);

        if (response.ok) {
            const data = await response.json();
            let aiReply = "";

            if (Array.isArray(data) && data.length > 0) {
                aiReply = data[0].generated_text || "";
                
                aiReply = aiReply.split("Answer:")[1] || aiReply;
                aiReply = aiReply.trim();
            } else if (data.generated_text) {
                aiReply = data.generated_text.trim();
                aiReply = aiReply.split("Answer:")[1] || aiReply;
                aiReply = aiReply.trim();
            }

            if (aiReply && aiReply.length > 10) {
                hideTyping();
                addMessage(aiReply, "bot");
                return;
            }
        }
    } catch (e) {
        
        console.log("AI API unavailable, using knowledge base:", e.message);
    }

    
    hideTyping();
    const reply = getKnowledgeBaseReply(text);
    addMessage(reply, "bot");
}


function getKnowledgeBaseReply(query) {
    const q = query.toLowerCase().trim();

    // Ethiopian Education System
    if (q.includes("grade") && (q.includes("system") || q.includes("structure") || q.includes("level"))) {
        return "In Ethiopia, high school spans Grades 9–12. After Grade 10, students take the Ethiopian General Secondary Education Certificate Examination (EGSECE). After Grade 12, students sit for the Ethiopian Higher Education Entrance Examination (EHEEE / National Exam). StudyBridge provides textbooks and resources for all these grades!";
    }

    // National Exams
    if (q.includes("national exam") || q.includes("entrance exam") || q.includes("eheee") || q.includes("egsece")) {
        return "The Ethiopian National Exam (EHEEE) is taken in Grade 12 for university placement. Key subjects: English, Mathematics, Biology, Chemistry, Physics, History, Geography, Economics. StudyBridge offers textbooks for all subjects across all grades to help you prepare!";
    }

    // Subject-specific help
    if (q.includes("biology") && (q.includes("genetics") || q.includes("dna") || q.includes("gene"))) {
        return "Genetics is a key topic in Grade 12 Biology. Key concepts: DNA structure (double helix), genes, alleles, Mendelian inheritance (dominant/recessive), Punnett squares, mitosis vs meiosis, and genetic mutations. StudyBridge has genetics summary booklets in our resources!";
    }

    if (q.includes("biology") && (q.includes("photosynthesis") || q.includes("chlorophyll"))) {
        return "Photosynthesis: Plants convert CO₂ + H₂O into glucose + O₂ using sunlight. Chlorophyll (green pigment) in chloroplasts captures light energy. The equation is: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Key topics: light-dependent and light-independent (Calvin cycle) reactions.";
    }

    if (q.includes("chemistry") && (q.includes("atom") || q.includes("element") || q.includes("periodic"))) {
        return "Atoms are the basic units of matter. Each element has a unique number of protons (atomic number). The periodic table arranges elements by atomic number and groups them by similar properties. Key groups: alkali metals, halogens, noble gases. Your Grade 9-12 Chemistry textbooks cover this in detail!";
    }

    if (q.includes("chemistry") && (q.includes("organic") || q.includes("hydrocarbon") || q.includes("alkane"))) {
        return "Organic chemistry studies carbon compounds. Hydrocarbons contain only C and H. Alkanes (CₙH₂ₙ₊₂) have single bonds, alkenes (CₙH₂ₙ) have double bonds, alkynes (CₙH₂ₙ₋₂) have triple bonds. Functional groups include alcohols (-OH), carboxylic acids (-COOH), and amines (-NH₂).";
    }

    if (q.includes("physics") && (q.includes("newton") || q.includes("motion") || q.includes("force"))) {
        return "Newton's Laws: 1) An object stays at rest or in uniform motion unless acted upon by a force. 2) F = ma (force = mass × acceleration). 3) For every action, there is an equal and opposite reaction. These are fundamental to your Grade 9-12 Physics curriculum!";
    }

    if (q.includes("physics") && (q.includes("electricity") || q.includes("current") || q.includes("voltage") || q.includes("ohm"))) {
        return "Electricity basics: Current (I) flows through conductors, measured in Amperes. Voltage (V) is potential difference. Resistance (R) opposes current. Ohm's Law: V = IR. Series circuits: R_total = R₁+R₂+... Parallel circuits: 1/R_total = 1/R₁ + 1/R₂ + ... Power = VI = I²R.";
    }

    if (q.includes("mathematics") || q.includes("math")) {
        if (q.includes("calculus") || q.includes("derivative") || q.includes("integration")) {
            return "Calculus: Differentiation finds rates of change (dy/dx = derivative). Integration finds area under curves. Key rules: power rule (d/dx xⁿ = nxⁿ⁻¹), chain rule, product rule. The Fundamental Theorem of Calculus connects differentiation and integration.";
        }
        if (q.includes("algebra") || q.includes("equation") || q.includes("quadratic")) {
            return "Quadratic equations: ax² + bx + c = 0. Solve using: x = (-b ± √(b² - 4ac)) / 2a. The discriminant (b² - 4ac) tells you: > 0 → 2 real roots, = 0 → 1 real root, < 0 → no real roots. Practice with your Grade 10-12 Mathematics textbook!";
        }
        if (q.includes("trigonometry") || q.includes("sin") || q.includes("cos") || q.includes("tan")) {
            return "Trigonometry: sin, cos, tan ratios in right triangles. SOH CAH TOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent. Key identities: sin²θ + cos²θ = 1, sin(90°−θ) = cosθ. Grade 11-12 Math covers unit circles and graphs!";
        }
        return "Mathematics in Ethiopian curriculum covers: Algebra, Geometry, Trigonometry, Calculus, Statistics, and Vectors. Grade 9-12 textbooks are available on StudyBridge for each grade level. Which specific topic would you like help with?";
    }

    if (q.includes("history") && (q.includes("ethiopia") || q.includes("ethiopian"))) {
        return "Ethiopian history is rich and ancient! Key periods: The Aksumite Kingdom (1st-7th century AD), Zagwe Dynasty (12th-13th c.), Solomonic Dynasty, the Era of Princes (Zemene Mesafint), Emperor Menelik II (Battle of Adwa 1896), Haile Selassie era, the Derg regime (1974-1991), and the modern Federal Republic. Your Grade 9-12 History textbooks cover these!";
    }

    if (q.includes("geography") && (q.includes("ethiopia") || q.includes("ethiopian"))) {
        return "Ethiopian Geography covers: The Great Rift Valley, Ethiopian highlands (Ras Dashen - 4,550m), major rivers (Blue Nile, Awash, Omo), climate zones (Dega, Wurch, Kolla, Bereha), population distribution, and economic geography. Grade 9-12 Geography textbooks have detailed coverage!";
    }

    if (q.includes("economics")) {
        return "Economics studies scarcity and choice. Microeconomics covers supply & demand, market structures (perfect competition, monopoly, oligopoly), and elasticity. Macroeconomics covers GDP, inflation, unemployment, and fiscal/monetary policy. Key economists: Adam Smith, Keynes, Marx. Your Grade 9-12 Economics textbooks explain all concepts!";
    }

    if (q.includes("english") && (q.includes("grammar") || q.includes("tense") || q.includes("verb"))) {
        return "English Grammar: Present tenses (simple, continuous, perfect), Past tenses, Future tenses. Active vs Passive voice: 'The cat chased the mouse' (active) → 'The mouse was chased by the cat' (passive). Reported speech, conditionals (if clauses), and relative clauses are key topics in Grades 9-12.";
    }

    // About StudyBridge
    if (q.includes("what is studybridge") || q.includes("studybridge") && (q.includes("about") || q.includes("what") || q.includes("who"))) {
        return "StudyBridge is a free online platform created by Thecodebenders (high school students from Dandii Boru School, Addis Ababa). We provide organized access to Ethiopian high school textbooks (Grades 9-12 under the new curriculum), genetics summaries, and exam preparation resources in one clean, accessible interface.";
    }

    if (q.includes("textbook") || q.includes("book") || q.includes("pdf") || q.includes("resource")) {
        return "StudyBridge offers PDF textbooks for Grades 9-12 in all subjects: Chemistry, Biology, Physics, Mathematics, English, Economics, History, and Geography. Visit our Books page to browse, search, and download them all for free!";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach")) {
        return "You can reach StudyBridge at studybridge@gmail.com or call +251 912 324 567. Visit our Contact Us page to send us a message with your feedback or questions!";
    }

    if (q.includes("hello") || q.includes("hi ") || q.includes("hey") || q === "hi" || q === "hello") {
        return "Hello! 👋 Welcome to StudyBridge! I'm your AI study assistant. I can help you with:\n• Ethiopian high school subjects (all grades)\n• National exam preparation tips\n• Finding textbooks and resources\n• Study advice\nWhat would you like to know?";
    }

    if (q.includes("thank")) {
        return "You're welcome! 😊 Keep studying hard and visit StudyBridge anytime for more resources. Good luck with your exams!";
    }

    if (q.includes("who created") || q.includes("who made") || q.includes("creator")) {
        return "StudyBridge was created by Thecodebenders - a team of passionate high school students from Dandii Boru School in Addis Ababa, Ethiopia. We built this platform to help Ethiopian students access quality study materials for free!";
    }

    if (q.includes("how to study") || q.includes("study tip") || q.includes("exam tip") || q.includes("preparation")) {
        return "Study tips for Ethiopian national exams:\n1. 📅 Create a study schedule - cover all subjects\n2. 📝 Practice past exam questions (timed)\n3. 📖 Use your textbooks actively - take notes\n4. 🔄 Review regularly, don't cram\n5. 🧠 Focus on weak areas first\n6. 😴 Get enough sleep before exams\n7. 🤝 Study with friends for difficult topics\nVisit StudyBridge Books for all your textbooks!";
    }

    if (q.includes("grade 9") || q.includes("grade9")) {
        return "Grade 9 is the foundation year of Ethiopian high school. Subjects: Chemistry, Biology, Physics, Mathematics, English, History, Geography, Economics. StudyBridge has all Grade 9 textbooks available for free download! Visit the Books page to access them.";
    }

    if (q.includes("grade 10") || q.includes("grade10") || q.includes("egsece")) {
        return "Grade 10 culminates in the EGSECE examination. All Grade 10 textbooks (Chemistry, Biology, Physics, Mathematics, English, History, Geography, Economics) are available on StudyBridge. Practice well with your textbooks and past papers!";
    }

    if (q.includes("grade 11") || q.includes("grade11")) {
        return "Grade 11 deepens your understanding in all subjects with more advanced topics. StudyBridge provides all Grade 11 textbooks: Chemistry, Biology, Physics, Mathematics, English, History, Geography, Economics. Focus on building strong foundations for Grade 12!";
    }

    if (q.includes("grade 12") || q.includes("grade12") || q.includes("eheee")) {
        return "Grade 12 is your final year with the EHEEE (National Entrance Exam). StudyBridge offers Grade 12 textbooks for all subjects! Focus areas: Mathematics (calculus, vectors, probability), Biology (genetics, evolution, ecology), Chemistry (organic chemistry, electrochemistry), Physics (modern physics, electromagnetism). Good luck! 🎯";
    }

    if (q.includes("help") || q.includes("what can you do") || q.includes("capabilities")) {
        return "I can help you with:\n📚 Ethiopian high school subjects (Grades 9-12)\n📖 Textbook recommendations and resources\n🎯 National exam preparation tips\n🧪 Science topics (Biology, Chemistry, Physics)\n🔢 Mathematics help\n📜 History and Geography facts\n💼 Economics concepts\nJust ask me anything about your studies!";
    }

    // Default fallback
    return "That's an interesting question! While I can answer many questions about Ethiopian high school subjects (Biology, Chemistry, Physics, Mathematics, English, History, Geography, Economics from Grades 9-12), I couldn't find a specific match for your query. Could you rephrase your question or ask about a specific subject or topic? Visit our Books page for free textbooks! 📚";
}

// Expose functions globally
window.toggleChat = toggleChat;
window.sendMessage = sendMessage;
