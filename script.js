// Change text content dynamically when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.textContent = "This text was changed using JavaScript!";
});

// Modify CSS styles when a button is clicked
document.getElementById("changeStyleBtn").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.style.color = "green";  // Change text color
    message.style.fontSize = "20px"; // Increase font size
});

// Add a new paragraph when the button is clicked
document.getElementById("addElementBtn").addEventListener("click", function() {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a newly added paragraph!";
    document.body.appendChild(newParagraph);
});
