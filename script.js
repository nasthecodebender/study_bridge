const API_KEY = "PASTE_YOUR_GEMINI_API_KEY_HERE";


function toggleChat() {
    const chat = document.getElementById("chatWindow");

    if (chat.style.display === "flex") {
        chat.style.display = "none";
    } else {
        chat.style.display = "flex";
    }
}


async function sendMessage() {
    const input = document.getElementById("userInput");
    const messages = document.getElementById("chatMessages");

    const userMessage = input.value.trim();

    if (!userMessage) return;

    messages.innerHTML += `
        <p><strong>You:</strong> ${userMessage}</p>
    `;

    input.value = "";

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: userMessage
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        const aiReply =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Sorry, I couldn't generate a response.";

        messages.innerHTML += `
            <p><strong>🤖 AI:</strong> ${aiReply}</p>
        `;

        messages.scrollTop = messages.scrollHeight;

    } catch (error) {
        console.error(error);

        messages.innerHTML += `
            <p><strong>🤖 AI:</strong> Error connecting to Gemini.</p>
        `;
    }
}
        
