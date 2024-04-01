// Get elements
const buttons = document.querySelectorAll('.button');
const tallyCount = document.getElementById('tallyCount');
const logBody = document.getElementById('logBody');
const customText = document.getElementById('customText');
const customValue = document.getElementById('customValue');
const addCustomButton = document.getElementById('addCustom');

// Initialize tally
let tally = 0;

// Function to update tally
function updateTally(value) {
  if (isNaN(value)) {
    value = 0; // Convert NaN to 0
  }
  tally += value;
  tallyCount.textContent = tally;
}


// Function to add log as a table row
function addLogRow(timestamp, text, value) {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `<td>${timestamp}</td><td>${text}</td><td>${value}</td>`;
  logBody.appendChild(newRow);
}

// Function to add log
function addLog(text, value) {
  const timestamp = new Date().toLocaleString();
  if (value !== undefined && !isNaN(value)) {
    addLogRow(timestamp, text, value);
  }
}


// Define button values (you can adjust these values as needed)
const buttonValues = {
  button1: 5,
  button2: 10,
  // Add more buttons and their values as needed
};

// Event listeners for buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.id;
    const value = buttonValues[buttonId]; // Extracting the value from buttonValues object
    updateTally(value); // Updating tally with the extracted value
    addLog(button.textContent, value); // Adding log with button text content and extracted value
  });
});

// Event listener for adding custom input
addCustomButton.addEventListener('click', () => {
  const text = customText.value;
  const value = parseInt(customValue.value);
  if (text && !isNaN(value)) {
    updateTally(value);
    addLog(text, value);
    customText.value = '';
    customValue.value = '';
  } else {
    alert('Please enter valid text and point value.');
  }
});
