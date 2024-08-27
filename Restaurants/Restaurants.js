const container = document.getElementById("flex-container")
numberOfElements = 24

for (let i = 0; i < numberOfElements; i++) {
    // Create a new div element
    const newDiv = document.createElement('div');
    newDiv.className = "box"

    // Add content to the new div
    newDiv.innerHTML = `<p style='color:white'>This is restaurant number ${i + 1}</p>`;

    // Append the new div to the container
    container.appendChild(newDiv);
}