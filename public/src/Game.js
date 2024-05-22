let lines; // Initialize lines variable
let currentIndex = 0; // Initialize currentIndex
let keyword= "your_keyword_here";
const content = document.getElementById('MtextBox'); // Assuming content is an HTML element with id "content"

// Fetch the text file and initialize the lines array
fetch('public/src/file.txt')
  .then(response => response.text())
  .then(text => {
    lines = text.split('\n'); // Splitting text into lines
    // Initially, display the first line
    content.innerHTML = lines[currentIndex]; // Display the first line
  })
  .catch(error => console.error('Error fetching the file:', error));

function modifySaveData(keyword) {
    // Assuming innerArray is defined somewhere in your code
    // Loop through the choices
    for (const choice of SAVE_DATA[0].choices[0]) {
        // Check if the keyword is present in the choice array
        const index = choice.indexOf(keyword);
        if (index !== -1) {
            // If the keyword is found, update its value to 1
            choice[index] = 1;
            // Log the values in the inner array
            console.log("Values in inner array:", innerArray);
            break; // Assuming the keyword appears only once in the array
        }
    }
}

function showNextLine(keyword) {
    if (!lines) return; // Check if lines array is initialized
    
    // Get the current line
    var currentLine = lines[currentIndex];

    // Check if the current line contains the keyword
    if (currentLine.includes(keyword)) {
        // Do something if the keyword is found in the current line
        console.log("Keyword found in this line:", currentLine, innerArray);
        modifySaveData(keyword); // Pass the keyword to the function
    } else {
        // Do something if the keyword is not found in the current line
        console.log("Keyword not found in this line:", currentLine);
        // You can perform any other action you want here
    }

    // Move to the next line
    currentIndex++;

    // Check if there are more lines
    if (currentIndex < lines.length) {
        content.innerHTML = lines[currentIndex]; // Replace the content with the next line
    }
}

// Assuming keyword is defined somewhere in your code
content.addEventListener("click", () => showNextLine(keyword));
