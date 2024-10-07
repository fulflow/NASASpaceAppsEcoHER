// Define the messages array, including an image URL for one of the messages
const messages = [
    {
        text: "Welcome to Sindh, Pakistan! Sindh, a province in southeastern Pakistan, is characterized by its rich cultural heritage and reliance on agriculture, supported by the Indus River. However, it faces significant challenges from climate change, including flooding and water scarcity, affecting its diverse population, especially women in rural areas.", img: null },
    { text: "Let’s look at how climate change has affected the Pakistan women." },
    { text: "In the summer of 2022, intense monsoon rains, worsened by climate change, triggered a super flood that submerged one-third of Pakistan, affecting around 33 million people!", }];

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
