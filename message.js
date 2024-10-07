// Define the messages array, including an image URL for one of the messages
const messages = [
    { text: "Uttarakhand has always been defined by its seasonal monsoons, but these patterns are changing fast. Unpredictable rains are becoming the new normal, with some years bringing heavy floods and others prolonged droughts. Crops like rice and wheat, which need a consistent water supply, are either being flooded or drying out.This leaves farmers with too little water during the dry season and too much during the wet season, often destroying crops.", img: null },
    { text: "Glaciers are melting and rivers are losing water flow.", img: "assets/india1.jpg" },
    { text: "As temperatures rise, the glaciers feeding Uttarakhand's rivers are melting rapidly, disrupting water flow. This leaves farmers with too little water during the dry season and too much during the wet season, often destroying crops.", img: null },
    { text: "40% of Uttarakhand’s agricultural land is at risk of desertification due to soil erosion.", img: null },
    { text: "Heavy rains are also eroding the topsoil, depleting nutrients and making it harder for crops to grow. Farmers are now seeing their soil fertility decrease, partly due to unsustainable farming practices. With traditional growing seasons shifting, it's becoming harder to predict when to plant and harvest, throwing age-old farming schedules off balance.", img: null }
    ,
    { text: "While all farmers in Uttarakhand are affected, female farmers face the steepest challenges. Women make up more than half of the farm workforce, yet they often lack the resources and land ownership needed to access support systems." },
    { text: "Women are working in fields, fetching water. Over 70% of Uttarakhand’s agricultural labor force is made up of women.", img: "assets/india2.jpg" },
    { text: "As water becomes scarcer and the soil deteriorates, female farmers must spend more time fetching water, tending to struggling crops, and dealing with the added impact of climate change. Women already work longer hours in the fields, spending 35% more time on farm tasks than men. Now, with climate change increasing the complexity of their jobs, this workload continues to grow.", img: null },
    { text: "On top of farm duties, these women still manage household chores and childcare. With traditional water sources drying up, they often travel further to fetch water, leaving less time for their crops, which yield lower returns each season. So let’s help them out. ", img: null }

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