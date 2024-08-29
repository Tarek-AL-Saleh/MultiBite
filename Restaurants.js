const container = document.getElementById("flex-container")
numberOfElements = 24

for (let i = 0; i < numberOfElements; i++) {
    // Create a new div element
    const newDiv = document.createElement('div');
    newDiv.className = "box"

    // Add content to the new div
    const newImage = document.createElement('img');
    newImage.src = `restaurant_images/${i}.png`
    newImage.style.width = "100%";
    newImage.style.height = "100%";
    newImage.style.position = "relative";
    newImage.style.display = "block";
    // newDiv.innerHTML = `<p style='color:white'>This is restaurant number ${i + 1}</p>`;

    // Append the new div to the container
    container.appendChild(newDiv);
    
    newDiv.appendChild(newImage);
    
}