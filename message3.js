// Define the messages array, including an image URL for one of the messages
const messages = [
    { text: "The Philippines is an archipelago in Southeast Asia consisting of over 7,000 islands. Known for its diverse culture, rich history, and natural beauty, it faces significant challenges from climate change, including typhoons, rising sea levels, and increased flooding. These environmental issues impact agriculture, fisheries, and the livelihoods of many Filipinos.", img: null },
    { text: "Let’s look at how climate change has affected the Philippines women."},
    { text: "Surface rainfall accumulations (mm) estimated from the NASA IMERG satellite precipitation product from 10 to 17 May 2020 in association with the passage of Typhoon Vongfong.", img: "assets/phili.png" }];

let currentMessageIndex = 0;

function displayMessage(index) {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.innerHTML = ""; // Clear previous messages

    // Create message bubble
    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message-bubble");

    // Create text node for the message
    const messageText = document.createTextNode(messages[index].text);
    messageBubble.appendChild(messageText);

    // Check if there's an image for the current message
    if (messages[index].img) {
        const imgElement = document.createElement("img");
        imgElement.src = messages[index].img;
        imgElement.alt = "Image related to message"; // Provide an alt text for the image
        imgElement.style.maxWidth = "100%"; // Ensure the image fits within the bubble
        imgElement.style.borderRadius = "10px"; // Optional: add some styling to the image
        messageBubble.appendChild(imgElement);
    }

    chatContainer.appendChild(messageBubble); // Append the message bubble to the chat container

    // Change the background color of the chat container after the fourth message
    if (index >= 5) { // Index 3 corresponds to the fourth message
        chatContainer.style.backgroundColor = "#fff5e5"; // Change to your desired color
    } else {
        chatContainer.style.backgroundColor = "#f1f5f0"; // Reset to default (white) when before the fourth message
    }
}

// Show the next message
function nextMessage() {
    if (currentMessageIndex < messages.length - 1) {
        currentMessageIndex++;
        displayMessage(currentMessageIndex);
    }
    updateButtonState();
}

// Show the previous message
function prevMessage() {
    if (currentMessageIndex > 0) {
        currentMessageIndex--;
        displayMessage(currentMessageIndex);
    }
    updateButtonState();
}

// Update button states
function updateButtonState() {
    document.getElementById("prevButton").disabled = currentMessageIndex === 0;
    document.getElementById("nextButton").disabled = currentMessageIndex === messages.length - 1;
}

// Automatically set the first message when the page loads
document.addEventListener("DOMContentLoaded", function() {
    displayMessage(currentMessageIndex); // Show the first message immediately on load
});
