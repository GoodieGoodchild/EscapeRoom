// Select elements
const roomImage = document.getElementById('room-image');
const messageArea = document.getElementById('message-area');
const codeEditor = document.getElementById('code-editor');
const runCodeButton = document.getElementById('run-code');

// Function to display messages
function displayMessage(message) {
    messageArea.innerHTML = message;  // Display the message in the message area
}

// Function to display messages
function displayMessage(message) {
    messageArea.innerHTML = message;  // Display the message in the message area
}

// Handle clicks on the room image
roomImage.addEventListener('click', function(event) {
    const x = event.offsetX; // Get the x coordinate
    const y = event.offsetY; // Get the y coordinate

    console.log(`Clicked at X: ${x}, Y: ${y}`); // Debugging output to console

    // If clicked within the bookshelf area
    if (x > 136 && x < 229 && y > 392 && y < 450) {
        displayMessage(`
            <strong>You discovered a bookshelf!</strong><br>
            To unlock the secret behind the bookshelf, you need to learn how to create a JavaScript function.<br><br>
            <code>
function openDoor() {<br>
    // Code to open the door goes here<br>
}
            </code><br>
            Write the correct <code>openDoor()</code> function in the prompt box below. If you write it correctly, you will open the door to the next room!
        `);
        // Set the challenge for the code editor
        codeEditor.value = "";  // Clear any existing code
        codeEditor.placeholder = "Write your openDoor function here...";
    }
});


// Function to check if the user's code is correct
function checkUserCode() {
    const userCode = codeEditor.value;

    try {
        // Evaluate the user's code
        eval(userCode);

        // Check if the openDoor function exists
        if (typeof openDoor === "function") {
            displayMessage("Congratulations! The door creaks open, and you move to the next room!");
            // Here you could add logic to move to the next room
        } else {
            displayMessage("Hmm, it looks like you didn't write the function correctly. Make sure your function is named openDoor and follows the correct format!");
        }
    } catch (error) {
        displayMessage("Error in your code: " + error.message);
    }
}
