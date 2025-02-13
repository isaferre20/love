const surprises = [
    { text: " Words wrapped in warmth, sealed with a kiss", link: "https://example.com/love-letter", emoji: "💌" },
    { text: " Time for a challenge! Can you handle it? 🏋️‍♂️", emoji: "💪🏼" },
    { text: " Unveil a piece of us… one click and you’re there again.", link: "https://jigex.com/HEx4Z", emoji: "🧩" },
    { text: " The sound of Our Love...Enjoy!", links: ["https://youtu.be/n3IXJ_Ionz8?feature=shared", "https://youtu.be/jXkKr87YfL4?feature=shared", "https://www.youtube.com/watch?v=jwP1HRmDVII", "https://www.youtube.com/watch?v=eFWUnHJWwCg", "https://www.youtube.com/watch?v=r_FL56rASTs", "https://www.youtube.com/watch?v=90R9FSxbxvs"], emoji: "🎶" },
    { text: " A dreamy idea for a perfect date night", emoji: "🥂" },
    { text: "Close your eyes… feel that? That’s me, wrapping you up in love & tracing every inch of you with my touch.", 
        emoji: "🤗", 
        action: triggerHugSurprise
    },

    { text: " A secret snapshot is locked away… will you peek?", link: "https://api.whatsapp.com/send?phone=3921445053&text=Shh...%20only%20you%20get%20to%20see%20this%20🔥%20Ready?%20(send%20me%20this%20message%20to%20discover!)", emoji: "❤️‍🔥" },
    { text: " Wrong Turn… Or Maybe I Planned It That Way. Good Luck!💋", link: "https://example.com/future", emoji: "🍀" }
];

const challenges = [
    "10 Push-Ups – Think of me with every rep 😏",
    "Hold a 30-Second Plank – If you drop, I get 1 wish! 💖",
    "Jump Squats x 30 sec – Show me that strength! 💪",
    "Wall Sit for 30 seconds – Prove your love! 🔥",
    "High Knees for 30 seconds – Keep that energy up! 💃",
    "10 Burpees – If you fail, I pick your punishment 😏",
    "Mountain Climbers for 30 seconds – Climb to my heart ❤️"
];

const finalSurprise = {
    text: "💖 The Grand Finale 💖\nA surprise made just for you! Open it now!",
    link: "https://example.com/your-secret-gift", // Replace with your real link
    emoji: "🎁"
};
let ultimateSurpriseGiven = false; // Ensures the final surprise only appears once


document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM Loaded - Attaching event listener...");

    const challengeButton = document.getElementById("start-challenge-btn");
    if (challengeButton) {
        console.log("✅ Button Found! Adding event listener.");
        challengeButton.addEventListener("click", showChallengeBubble);
    } else {
        console.error("❌ Button NOT found! Check if the ID matches in index.html");
    }
});


const spinSound = new Audio('spin-sound.mp3');

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeProposalText, 1000);
    generateWheel();
});

function playHugAudio() {
    alert("Close your eyes… feel that? That’s me, wrapping you up in love & tracing every inch of you with my touch. Now TURN UP THE VOLUME and close the button to receive your hug 💖🔊");

    let audio = new Audio("ILY_note.mp3"); // Ensure this file exists in the correct path
    audio.loop = false;

    audio.play()
        .then(() => console.log("🎶 Audio is playing"))
        .catch(err => {
            console.error("🔇 Audio play failed:", err);
            alert("Your browser may be blocking autoplay. Tap anywhere on the screen to play.");
            
            // Fallback: Wait for user click to play
            document.body.addEventListener("click", function startAudio() {
                audio.play().catch(err => console.error("Still blocked:", err));
                document.body.removeEventListener("click", startAudio);
            });
        });
}

// Call this function directly when the surprise is triggered
function triggerHugSurprise() {
    playHugAudio();
}


function typeProposalText() {
    const text = "Will you be my AEG? 🌹";
    const subtext = "Say yes, and let me take you somewhere only we belong. 🌙✨";
    let index = 0;
    let subIndex = 0;
    const mainTextElement = document.getElementById("proposal-text");
    const subTextElement = document.getElementById("proposal-subtext");

    if (!mainTextElement || !subTextElement) return;

    mainTextElement.innerHTML = "";
    subTextElement.innerHTML = "";

    function typeMainText() {
        if (index < text.length) {
            mainTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeMainText, 50);
        } else {
            setTimeout(typeSubText, 500);
        }
    }

    function typeSubText() {
        if (subIndex < subtext.length) {
            subTextElement.innerHTML += subtext.charAt(subIndex);
            subIndex++;
            setTimeout(typeSubText, 50);
        }
    }
    
    typeMainText();
}

function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "2_Seductive_Eyes" && password === "1_Charmic_Soul!") {
        fadeOutElement(document.getElementById("login-container"));
        setTimeout(() => {
            fadeInElement(document.getElementById("question-container"));
            createHearts();
        }, 1000);
    } else {
        alert("Oops! Wrong credentials, try again 💕");
    }
}

function showChallengeBubble() {
    console.log("🏋️‍♂️ Challenge Bubble Function Triggered!");

    let bubble = document.getElementById("challenge-bubble");
    let textElement = document.getElementById("challenge-text");
    let timerElement = document.getElementById("timer");
    let startButton = document.getElementById("start-timer-btn"); // Ensure button exists
    let recordButton = document.getElementById("record-video");

    if (!bubble || !textElement || !timerElement || !startButton || !recordButton) {
        console.error("🚨 One or more elements are missing! Make sure `challenge-bubble` exists in `index.html`.");
        return;
    }

    // Select a random challenge
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    textElement.innerText = randomChallenge;

    // Reset UI
    timerElement.innerText = "⏳ Press Start";
    startButton.style.display = "block";  // Ensure Start button is visible
    recordButton.style.display = "none";  // Hide Record button initially

    // Show the challenge bubble
    bubble.classList.add("show");
    bubble.style.display = "flex";

    // Clear any previous timer
    if (window.challengeTimer) {
        clearInterval(window.challengeTimer);
    }

    // Attach event listener for Start button
    startButton.onclick = function () {
        console.log("⏳ Start Button Clicked! Timer starting...");
        startButton.style.display = "none";  // Hide start button
        startChallengeTimer();  // Start the timer function
    };
}

// Function to Start Timer
function startChallengeTimer() {
    console.log("⏳ Timer Started!");
    let timerElement = document.getElementById("timer");
    let recordButton = document.getElementById("record-video");

    let timeLeft = 30;
    timerElement.innerText = `⏳ ${timeLeft}s`;

    window.challengeTimer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `⏳ ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(window.challengeTimer);
            timerElement.innerText = "Time’s Up! Did you make it? 😏";
            recordButton.style.display = "block";  // Show record button
        }
    }, 1000);
}
function recordVideo() {

    let bubble = document.getElementById("challenge-bubble");
    if (bubble) {
        bubble.classList.remove("show");  // Hide the challenge bubble
        bubble.style.display = "none";  
    }

    // Clear any existing timer
    if (window.challengeTimer) {
        clearInterval(window.challengeTimer);
    }

    console.log("🔄 Spinning the wheel again...");
    spinWheel();  // Automatically start a new spin
}

function generateDateIdea() {
    let mood = document.getElementById("mood").value;
    let vibe = document.getElementById("vibe").value;
    let dateIdeaDiv = document.getElementById("date-idea");

    let dateIdea = "";

    // Romantic Mood
    if (mood === "romantic") {
        if (vibe === "movie") {
            dateIdea = "Create a Movie with Your Love Story. 💖🎬";
        } else if (vibe === "games") {
            dateIdea = "💞 Play a love trivia game about each other, loser has to send a voice note confessing a love fantasy!";
        } else if (vibe === "challenge") {
            dateIdea = "Cooking Battle🔥: Compete in a ‘mystery box cooking challenge’ using surprise ingredients & share a glass of wine!";
        }
    }

    // Adventurous Mood
    if (mood === "adventurous") {
        if (vibe === "movie") {
            dateIdea = "🎬 Use an interactive movie/game (like 'Black Mirror: Bandersnatch' or 'Escape Room: Tournament of Champions'.Take turns making choices and see where the story goes...";
        } else if (vibe === "games") {
            dateIdea = "Online Strip Uno🃏💋: Play Uno, but every time you draw a card, you must reveal a secret... or take something off!";
        } else if (vibe === "challenge") {
            dateIdea = "Go for a run or a sporty activity together!🏃";
        }
    }

    // Chill Mood
    if (mood === "chill") {
        if (vibe === "movie") {
            dateIdea = "Choose a romantic or steamy movie. Every time a kiss or sensual scene happens, both of you must change something about your outfit—remove a layer, adjust something, or add something playful.";
        } else if (vibe === "games") {
            dateIdea = "Flirty Truth or Dare: Use a truth-or-dare generator with spicy, flirty, and intimate prompts...💋";
        } else if (vibe === "challenge") {
            dateIdea = "💃🔥 Play a slow, sexy song and both of you dance in your own space, on camera. The challenge? Make it as teasing as possible without laughing or stopping. Whoever loses owes a personalized dare. 💋";
        }
    }

    // Show the date idea
    dateIdeaDiv.innerHTML = `<p>${dateIdea}</p>`;
    dateIdeaDiv.style.display = "block";
}


function showDateQuiz() {
    document.querySelectorAll(".love-bubble").forEach(el => el.remove());

    let bubble = document.createElement("div");
    bubble.classList.add("love-bubble");

    // Date Quiz Questions
    bubble.innerHTML = `
        <p>Let's plan a long-distance date we'll never forget! ✨🥂</p>
        <p>How are you feeling today?</p>
        <select id="mood">
            <option value="romantic">Cozy ❤️</option>
            <option value="adventurous">Adventurous🎢</option>
            <option value="chill">Chill(y)🔥</option>
        </select>

        <p>What’s your vibe for the evening?</p>
        <select id="vibe">
            <option value="movie">Movie Night 🎬</option>
            <option value="games">Games & Laughter 🎮</option>
            <option value="challenge">Challenge 🌶️</option>
        </select>

        <button class="bubble-button" id="generate-date">Generate Date Idea 💡</button>
        <div id="date-idea" style="display: none; margin-top: 15px;"></div>
    `;

    let closeButton = document.createElement("span");
    closeButton.innerText = "✖";
    closeButton.classList.add("close-button");
    closeButton.onclick = () => bubble.remove();
    bubble.prepend(closeButton);

    document.body.appendChild(bubble);
    setTimeout(() => bubble.classList.add("show"), 100);

    // Event listener for Generate Date Idea button
    document.getElementById("generate-date").onclick = function () {
        generateDateIdea();
    };
}


function moreYesOptions() {
    let noButton = document.getElementById("no-button");
    noButton.innerText = "Sure, Papi?";
    noButton.setAttribute("onclick", "evenMoreYesOptions()");
}

function evenMoreYesOptions() {
    let noButton = document.getElementById("no-button");
    noButton.innerText = "I was going to tell you a secret… ";
    noButton.setAttribute("onclick", "lastChance()");
}

function lastChance() {
    let noButton = document.getElementById("no-button");
    noButton.innerText = "Okay, but what if I give you unlimited hugs? 🤗";
    noButton.setAttribute("onclick", "finalNoOption()");
}

function finalNoOption() {
    alert("😢 Alright... but you'll miss out on all the love! I'll still be here if you change your mind. 💔")
}

function goToWheel() {
    const questionContainer = document.getElementById("question-container");
    const mainContainer = document.getElementById("main-container");

    // Add a spinning transition effect
    questionContainer.style.transition = "transform 1s ease-in-out, opacity 0.8s";
    questionContainer.style.transform = "rotateY(180deg) scale(0.5)";
    questionContainer.style.opacity = "0";

    setTimeout(() => {
        questionContainer.classList.add("hidden");
        mainContainer.classList.remove("hidden");
        mainContainer.style.opacity = "0";
        mainContainer.style.transform = "scale(0.5)";
        setTimeout(() => {
            mainContainer.style.transition = "transform 1s ease-in-out, opacity 1s";
            mainContainer.style.opacity = "1";
            mainContainer.style.transform = "scale(1) rotateY(0deg)";
        }, 50);
    }, 900);

}

function generateWheel() {
    const wheel = document.getElementById("wheel");
    wheel.innerHTML = "";

    const numSegments = surprises.length;
    const segmentAngle = 360 / numSegments;
    const radius = 110; // Distanza perfetta dal centro

    surprises.forEach((surprise, index) => {
        let emojiSpan = document.createElement("span");
        emojiSpan.innerHTML = surprise.emoji;
        emojiSpan.style.position = "absolute";

        // **Posiziona l'emoji nel centro del segmento**
        let adjustedRadius = radius * 0.75; // Sposta l'emoji dentro al triangolo
        let angleDeg = (index * segmentAngle) + (segmentAngle / 2); // Prende il centro del segmento
        let angleRad = angleDeg * (Math.PI / 180); // Converte in radianti

        let xPos = Math.sin(angleRad) * adjustedRadius;
        let yPos = Math.cos(angleRad) * adjustedRadius;

        emojiSpan.style.top = `calc(50% - ${yPos}px)`;
        emojiSpan.style.left = `calc(50% + ${xPos}px)`;

        // **Mantiene l'emoji DRITTA**
        emojiSpan.style.transform = `translate(-50%, -50%)`;

        emojiSpan.style.fontSize = "32px"; // Grandezza perfetta per leggibilità

        wheel.appendChild(emojiSpan);
    });
}

// Function to show the Floating Love Bubble for all surprises
function showLoveBubble(surprise) {
    // Remove any existing bubble before creating a new one
    document.querySelectorAll(".love-bubble").forEach(el => el.remove());
    
    // Create the bubble element
    let bubble = document.createElement("div");
    bubble.classList.add("love-bubble");
    bubble.innerHTML = `<p>${surprise.emoji} ${surprise.text}</p>`;
    
    // Close button
    let closeButton = document.createElement("span");
    closeButton.innerText = "✖";
    closeButton.classList.add("close-button");
    closeButton.onclick = () => bubble.remove();
    bubble.prepend(closeButton);
    
    // Special case for "Wrong Turn" message - change button to "Spin Again"
    let button = document.createElement("button");
    if (surprise.text.includes("Wrong Turn")) {
        button.innerText = "Spin Again!";
        button.classList.add("bubble-button");
        button.onclick = spinWheel;
    } 
    else if (surprise.text.includes("sound")) {
        let randomLink = surprise.links[Math.floor(Math.random() * surprise.links.length)];
        button.innerText = "Listen Now 🎵";
        button.classList.add("bubble-button");
        button.onclick = () => window.open(randomLink, '_blank');
    }
    else if (surprise.text.includes("date")) {
        button.innerText = "Start Date Quiz 💡";
        button.classList.add("bubble-button");
        button.onclick = () => showDateQuiz();
    }
    else if (surprise.text.includes("piece")) {
        button.innerHTML = "Click & build a piece of us<br><br>Come back when task accomplished!";
        button.classList.add("bubble-button");
        button.onclick = () => window.open(surprise.link, '_blank');
    }
    else {
        button.innerText = "Open Your Surprise ♡";
        button.classList.add("bubble-button");
        button.onclick = () => window.open(surprise.link, '_blank');
    }
    
    bubble.appendChild(button);
    document.body.appendChild(bubble);
    
    // Add animation class
    setTimeout(() => bubble.classList.add("show"), 100);
}

// Function to show a centered pop-up for the Love Letter
function showLoveLetterPopup() {
    // Remove any existing pop-up and floating letter emoji before creating a new one
    document.querySelectorAll(".love-letter, .magic-envelope").forEach(el => el.remove());

    // Create the floating love letter emoji
    let envelope = document.createElement("div");
    envelope.innerHTML = "💌";
    envelope.classList.add("magic-envelope");
    document.body.appendChild(envelope);

    // Animate it from the top
    setTimeout(() => envelope.classList.add("slide"), 500);

    // Click event to open the love letter pop-up
    envelope.onclick = function () {
        // Remove envelope after clicking
        envelope.classList.add("open");

        // Create the pop-up for the love letter
        let popup = document.createElement("div");
        popup.classList.add("love-letter");
        popup.innerHTML = `
            <span class="close-button" onclick="this.parentElement.remove()">✖</span>
            Tengo ganas de ti
            <p></p>
            Tengo ganas de abrazarte,<br> 
            con mis labios besarte<br> 
            y con mis manos acariciarte. 
            <p></p>
            Tengo ganas de ti 
            <p></p>
            Tengo ganas de tu voz susurrando,<br>
            mientras nos estamos amando<br> 
            y mis piernas están temblando. 
            <p></p>
            Tengo ganas de ti
            <p></p>
            Tengo ganas de dormir en tu pecho,<br> 
            de tenerte en mis brazos estrechos<br>
            hasta despertar con el sol que ilumina nuestro techo. 
            <p></p>
            Tengo ganas de ti 
            <p></p>
            Sí, tengo ganas de ti,<br> 
            porque si la distancia tiene el poder de alejar nuestros cuerpos,<br> 
            ningún kilómetro nos prohibirá desearnos y amarnos.  
            <p></p>
            <p>Te amo en este universo,<br>
            y en infinitos más te amaré.</p>
            <p></p>
            حياة
            <p></p>
            <button class="continue-button" onclick="this.parentElement.remove()">Close</button>
        `;

        document.body.appendChild(popup);

        // Show the pop-up with animation
        setTimeout(() => popup.classList.add("show"), 100);
    };
}

function openFinalVideo() {
    console.log("🎬 Playing the Final Surprise Video!");

    // Remove existing video popup if any
    document.querySelectorAll(".video-popup").forEach(el => el.remove());

    // Create video pop-up container
    let videoPopup = document.createElement("div");
    videoPopup.classList.add("video-popup");

    // Add video element
    videoPopup.innerHTML = `
        <span class="close-button" onclick="this.parentElement.remove()">✖</span>
        <video controls autoplay>
            <source src="try.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;

    document.body.appendChild(videoPopup);

    // Show with animation
    setTimeout(() => videoPopup.classList.add("show"), 100);
}


function showFinalSurprisePopup() {
    console.log("🎁 Final Surprise Pop-up Triggered!");

    let popupContainer = document.getElementById("final-surprise-container");

    if (!popupContainer) {
        console.error("❌ Error: `final-surprise-container` is missing in `index.html`!");
        return;
    }

    popupContainer.innerHTML = ""; // Clear any previous content

    let popup = document.createElement("div");
    popup.classList.add("final-surprise");

    popup.innerHTML = `
        <span class="close-button" onclick="document.getElementById('final-surprise-container').innerHTML = '';">✖</span>
        <h2>💖 The Grand Finale 💖</h2>
        <p>This journey of love has led you here... and now, your final surprise awaits!</p>
        <p>Are you ready?</p>
        <button class="final-button" onclick="openFinalVideo()">Open Your Ultimate Gift 🎁</button>
    `;

    popupContainer.appendChild(popup);
    setTimeout(() => popup.classList.add("show"), 100);
}



// Shuffle function to randomize an array (Fisher-Yates Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Create a queue with shuffled surprises
let surpriseQueue = [...surprises];
shuffleArray(surpriseQueue);

// Function to get the next surprise without repeating until all are shown
function getNextSurprise() {
    console.log("🌀 Checking Surprise Queue:", surpriseQueue);

    if (surpriseQueue.length === 0) { 
        if (!ultimateSurpriseGiven) {
            console.log("🎁 Grand Finale Activated! No more normal surprises.");
            ultimateSurpriseGiven = true;
            return finalSurprise;  // Ensure it returns finalSurprise properly
        } else {
            console.log("🔄 Resetting Surprises - All have been revealed.");
            surpriseQueue = [...surprises]; // Refill surprises
            shuffleArray(surpriseQueue);
        }
    }

    let nextSurprise = surpriseQueue.shift();
    
    if (!nextSurprise) {
        console.error("⚠️ No valid surprise found! Returning finalSurprise as fallback.");
        return finalSurprise; // Ensure it never returns undefined
    }

    console.log("🎡 Selected Surprise:", nextSurprise);
    return nextSurprise;
}

// Modify the spinWheel function to use the effects
function spinWheel() {
    // Remove any existing love bubble, letter, or envelope before spinning
    document.querySelectorAll(".love-bubble, .love-letter-popup").forEach(el => el.remove());
    
    const wheel = document.getElementById("wheel");
    const pointer = document.querySelector(".pointer");
    const numSegments = surprises.length;
    const segmentAngle = 360 / numSegments;
    
    const chosenSurprise = getNextSurprise(); // Get next surprise from the queue
    const randomIndex = surprises.indexOf(chosenSurprise);
    
    // If it's the final surprise, stop exactly on it
    const stopAngle = chosenSurprise === finalSurprise ? 180 : (360 - (randomIndex * segmentAngle) - (segmentAngle / 2));
    
    const spins = 5; // Full spins before stopping
    const totalRotation = spins * 360 + stopAngle;
    
    spinSound.play();
    
    wheel.style.transition = "transform 3s ease-out";
    wheel.style.transform = `rotate(${totalRotation}deg)`;
    
    pointer.style.animation = "pointerShake 0.2s infinite ease-in-out alternate";
    
    setTimeout(() => {
        pointer.style.animation = "none";
        const chosenSurprise = surprises[randomIndex];
        
        if (!chosenSurprise) {
            console.error("⚠️ chosenSurprise is undefined! Triggering Final Surprise.");
            showFinalSurprisePopup();}
        else if (chosenSurprise.emoji === "💌") {
            showLoveLetterPopup(); // Show pop-up for the love letter
        } else if (chosenSurprise.emoji === "💪🏼") {
            showChallengeBubble();
        } else if (chosenSurprise.action) {
            chosenSurprise.action();
        } else {
            showLoveBubble(chosenSurprise); // Default love bubble for all other surprises
        }
    }, 3000);
}

function addConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10vh";
        confetti.style.fontSize = "24px";
        confetti.style.animation = "fall 2s ease-out forwards";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
    }
}

function fadeOutElement(element) {
    element.style.transition = "opacity 0.5s ease-in-out";
    element.style.opacity = "0";
    setTimeout(() => {
        element.style.display = "none";
    }, 500);
}

function fadeInElement(element) {
    element.style.display = "block";
    element.style.opacity = "0";
    setTimeout(() => {
        element.style.transition = "opacity 0.5s ease-in-out";
        element.style.opacity = "1";
    }, 10);
}


function createHearts() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("animated-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; 
        heart.style.opacity = Math.random();
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}

