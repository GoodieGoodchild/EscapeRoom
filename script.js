// Game state to track the current room
let currentRoom = 1; // Start with Room 1

// Data structure to store room objects and their properties
const rooms = {
    1: {
        name: "Room 1",
        objects: [
            { name: "Bookshelf", xRange: [50, 150], yRange: [100, 300], action: showInfoAlert, message: "These bookshelves are filled with dusty old books, but one book seems different. Try clicking on that." },
            { name: "Special Book", xRange: [300, 400], yRange: [200, 300], action: displayMessage, message: `
                <strong>You discovered a special book!</strong><br>
                To unlock the secret behind the bookshelf, you need to learn how to create a JavaScript function.<br><br>
                Here’s an example of how to create a function in JavaScript:<br>
                <code>
function openDoor() {<br>
    // Code to open the door goes here<br>
}
                </code>
                <br>
                Write the openDoor() function correctly in the prompt box below. Use the same spacing and If you write it correctly, you will open the door to the next room!`
            }
        ]
    },
    2: {
        name: "Room 2",
        objects: [
            { name: "Old Mirror", xRange: [60, 160], yRange: [120, 320], action: showInfoAlert, message: "This mirror is cracked, but it seems to reflect something behind you. Look around carefully." },
            { name: "Locked Door", xRange: [250, 350], yRange: [180, 280], action: displayMessage, message: "You found a locked door! Maybe there's a key hidden somewhere in the room." }
        ]
    },
    3: {
        name: "Room 3",
        objects: [
            { name: "Grandfather Clock", xRange: [100, 200], yRange: [150, 250], action: showInfoAlert, message: "The clock has stopped, but there's something odd about the time it's stuck at. It might be a clue." },
            { name: "Secret Compartment", xRange: [350, 450], yRange: [300, 400], action: displayMessage, message: "You've discovered a secret compartment! Solve the puzzle to find the hidden treasure." }
        ]
    }
};

// Select elements
const room1Image = document.getElementById('room1-image');
const room2Image = document.getElementById('room2-image');
const room3Image = document.getElementById('room3-image');
const messageArea = document.getElementById('message-area');
const codeEditor = document.getElementById('code-editor');
const runCodeButton = document.getElementById('run-code');
const coordinatesDisplay = document.getElementById('coordinates-display');

// Function to display messages in the message area
function displayMessage(message) {
    messageArea.innerHTML = message;  // Display the message in the message area
}

// Function to display an alert with additional information
function showInfoAlert(infoMessage) {
    alert(infoMessage); // Show an alert with the information message
}

// Function to handle room transitions
function advanceToNextRoom() {
    if (currentRoom === 1) {
        room1Image.style.display = 'none'; // Hide Room 1
        room2Image.style.display = 'block'; // Show Room 2
        currentRoom = 2; // Update game state to Room 2
        displayMessage("Welcome to Room 2! Find the clues to advance further.");
    } else if (currentRoom === 2) {
        room2Image.style.display = 'none'; // Hide Room 2
        room3Image.style.display = 'block'; // Show Room 3
        currentRoom = 3; // Update game state to Room 3
        displayMessage("You've reached Room 3! This is your final challenge.");
    }
}

// Handle clicks on the room image
document.querySelectorAll('.room-image').forEach(roomImage => {
    roomImage.addEventListener('click', function(event) {
        const x = event.offsetX; // Get the x coordinate
        const y = event.offsetY; // Get the y coordinate

        // Update the coordinates display for debugging
        coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;

        console.log(`Clicked at X: ${x}, Y: ${y}`); // Debugging output to console

        // Get the current room's objects
        const roomObjects = rooms[currentRoom].objects;

        // Check if the click is within the coordinates of any interactive object
        let clickedOnObject = false;
        for (let obj of roomObjects) {
            if (x > obj.xRange[0] && x < obj.xRange[1] && y > obj.yRange[0] && y < obj.yRange[1]) {
                obj.action(obj.message); // Call the object's action function with its message
                clickedOnObject = true;
                break;
            }
        }

        // If not clicked on any object, display a default message
        if (!clickedOnObject) {
            displayMessage("Try to find a clue.");
        }
    });
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
            advanceToNextRoom(); // Move to the next room
        } else {
            displayMessage("Hmm, it looks like you didn't write the function correctly. Make sure your function is named openDoor and follows the correct format!");
        }
    } catch (error) {
        displayMessage("Error in your code: " + error.message);
    }
}

// Run the player's code when the button is clicked
runCodeButton.addEventListener('click', checkUserCode);
