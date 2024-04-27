var content = document.getElementById('Mtext');
var currentIndex = 0;
var lines; // Array to hold all lines

// Fetch the text file and initialize the lines array
fetch('public/src/file.txt')
  .then(response => response.text())
  .then(text => {
    lines = text.split('\n'); // Splitting text into lines
    // Initially, display the first line
    content.innerHTML = lines[currentIndex]; // Display the first line
  })
  .catch(error => console.error('Error fetching the file:', error));

function showNextLine() {
  if (!lines) return; // Check if lines array is initialized
  currentIndex++;
  if (currentIndex < lines.length) {
    content.innerHTML = lines[currentIndex]; // Replace the content with the next line
  }
}

// Listen for click events on the element with the ID "Mtext"
document.getElementById("MtextBox").addEventListener("click", showNextLine);

