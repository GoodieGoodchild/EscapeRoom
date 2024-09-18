// Select elements
const roomImage = document.getElementById('room-image');
const messageArea = document.getElementById('message-area');
const codeEditor = document.getElementById('code-editor');
const runCodeButton = document.getElementById('run-code');
// Game state to track the current room
let currentRoom = 1; // Start with Room 1

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
                Write the correct <code>openDoor()</code> function in the prompt box below. If you write it correctly, you will open the door to the next room!`
            },
            { name: "Dusty Table", xRange: [180, 280], yRange: [150, 250], action: displayMessage, message: `
                "JavaScript functions are like mini-programs that you can call whenever you want to perform a task. Here's the basic layout of a function:
                <br><br>
                function functionName(parameters) {<br>
                    // Code to be executed<br>
                }<br><br>
                - 'function' is a keyword that tells JavaScript you're creating a function.<br>
                - 'functionName' is a name you give to your function, like 'openDoor' or 'findKey'.<br>
                - 'parameters' are optional inputs that the function can use.<br>
                - Inside the curly braces { }, you write the code that should run when the function is called."
            `}
        ]
    },
    2: {
        name: "Room 2",
        objects: [
            { name: "Old Mirror", xRange: [60, 160], yRange: [120, 320], action: showInfoAlert, message: "This mirror is cracked, but it seems to reflect something behind you. Look around carefully." },
            { name: "Locked Door", xRange: [250, 350], yRange: [180, 280], action: displayMessage, message: "You found a locked door! Maybe there's a key hidden somewhere in the room." },
            { name: "Grandfather Clock", xRange: [100, 200], yRange: [150, 250], action: displayMessage, message: `
                "Functions are incredibly useful because they allow you to reuse code without rewriting it. For example, imagine you need to calculate the area of different rectangles multiple times. You can create a function for this:
                <br><br>
                function calculateArea(width, height) {<br>
                    return width * height;<br>
                }<br><br>
                Now, whenever you need to calculate an area, you just call 'calculateArea(width, height)', and it does the math for you. This saves time and keeps your code clean and organized!"
            `}
        ]
    },
    3: {
        name: "Room 3",
        objects: [
            { name: "Broken Picture Frame", xRange: [140, 240], yRange: [170, 270], action: displayMessage, message: `
                "Comments are a great way to add notes or explanations to your code. They don't affect how the code runs, but they help you remember what different parts of your code do. Here's how to add comments in JavaScript:
                <br><br>
                // This is a single-line comment<br><br>
                /*<br>
                This is a multi-line comment.<br>
                It can span multiple lines.<br>
                */<br><br>
                - Use '//' for a single-line comment.<br>
                - Use '/* */' for a multi-line comment."
            `},
            { name: "Secret Compartment", xRange: [350, 450], yRange: [300, 400], action: displayMessage, message: "You've discovered a secret compartment! Solve the puzzle to find the hidden treasure." }
        ]
    }
};

// Rest of the JavaScript remains the same as before...
