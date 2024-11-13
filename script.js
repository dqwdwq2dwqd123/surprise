// Array of love messages for each day
const messages = [
    "You’re my favorite person, and I’m so lucky to have you. ❤️",
    "I love you more with each passing day. 💖",
    "Every moment with you is my favorite memory. 🌸",
    "Your smile makes my day brighter!",
    "Thank you for being the amazing person you are.",
    "I can’t wait to spend the rest of my life with you. 🌟",
    "You are my sunshine on cloudy days. ☀️",
    "I’m so grateful for every moment we share together. 😂",
    "I love how kind and thoughtful you are. 💌",
    "You make everything feel better. ✨",
    "Just thinking about you makes me smile. 😊",
    "YOURE SO CUTEE MARIA AAA. 🌻",
    "My life is better with you in it. 🌷",
    "Thank you for loving me the way you do.",
    "You’re always on my mind and in my heart. ❤️",
    "I’m here for you, today and always. 🌈",
    "I'm yours forever and ever.",
    "Every day, you show me what true love is. 💕",
    "I love your SMILEEEE AND EYES AND EVERYTHING ABOUT YOU MARIAAAA.",
    "Our little inside jokes mean the world to me. 🌎",
    "I promise to cherish and love you always.",
    "You’re my one and only, forever and always. 💖",
    "You're the best thing to ever happen to me Mazzybomb.",
    "I only have eyes for you Maria. 💖"
];

// Function to open message for a specific day
function openMessage(day) {
    const messageContent = document.getElementById("message-content");
    messageContent.textContent = messages[day - 1]; // Set the message for the day
    document.getElementById("message-popup").style.display = "block";
}

// Function to close the message popup
function closeMessage() {
    document.getElementById("message-popup").style.display = "none";
}

// Initial function call to ensure that days become clickable based on the current date if needed.
window.onload = () => {
    checkAvailability();
};
