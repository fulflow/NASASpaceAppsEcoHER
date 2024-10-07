// Define the messages array, including an image URL for one of the messages
const messages = [
    { text: "Kisumu has traditionally relied on its fertile lands and reliable rainfall for agriculture, but these patterns are rapidly deteriorating. The region is now experiencing severe weather fluctuations that threaten food security.", img: null },
    { text: "Expansive agricultural fields transitioning from lush green to dry and barren.", img: "assets/kenya1.webp" },
    { text: "Recent years have seen an increase in erratic rainfall patterns, with long periods of drought followed by intense downpours. These changes have devastating consequences for staple crops like maize, cassava, and sweet potatoes, which are vital for both local consumption and economic stability.", img: null },
    { text: "Over 25% of Kisumu’s farmland has been affected by extreme weather, leading to crop failures.", img: null },
    { text: "Another pressing concern is the degradation of soil quality. Continuous cultivation without adequate soil management practices is resulting in nutrient depletion, while climate-induced erosion is washing away the fertile topsoil essential for healthy crops.", img: null }
    ,
    { text: "Additionally, invasive plant species and pests are becoming more prevalent due to the changing climate, further threatening agricultural productivity. The shift in climate is also altering the timing of seasonal rains, making traditional planting calendars unreliable." },
    { text: "Women farmers in Kisumu play a critical role in food production, yet only about 15% own the land they cultivate." },
    { text: "As traditional water sources become unreliable, female farmers are forced to travel further to find water, significantly increasing their workload. The time spent on these tasks takes away from the time they could spend tending to their crops, exacerbating the impact of climate change on agricultural productivity." },

];
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


/** 
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

    // Change the color of the message bubble after the fourth message
    if (index >= 5) { 
        chatContainer.style.backgroundColor = "#D3D3D3"; // Change to your desired color

    }

    chatContainer.appendChild(messageBubble); // Append the message bubble to the chat container
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
*/