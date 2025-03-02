// Function to open the modal and display the clicked image
function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");

    modal.style.display = "block"; // Show the modal
    modalImg.src = img.src; // Set the source of the modal image
    captionText.innerHTML = img.alt; // Set the caption text
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Hide the modal
}

// Function to display a greeting based on the time of day
function displayGreeting() {
    const greetingElement = document.createElement("div");
    greetingElement.style.position = "fixed";
    greetingElement.style.top = "20px";
    greetingElement.style.right = "20px";
    greetingElement.style.backgroundColor = "#ff6f61";
    greetingElement.style.color = "white";
    greetingElement.style.padding = "10px 20px";
    greetingElement.style.borderRadius = "5px";
    greetingElement.style.zIndex = "1000";
    greetingElement.style.fontSize = "18px";
    greetingElement.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 9) {
        greeting = "Good Morning, My Love!";
    } else if (hour < 18) {
        greeting = "Good Afternoon, My Love!";
    } else {
        greeting = "Good Evening, My Love!";
    }

    greetingElement.innerText = greeting;
    document.body.appendChild(greetingElement);

    // Remove the greeting after 5 seconds
    setTimeout(() => {
        greetingElement.remove();
    }, 5000);
}

// Event listener for closing the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}

// Call the displayGreeting function when the page loads
window.onload = displayGreeting;