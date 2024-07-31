
const draggable = document.getElementById('drag1');
const dropzone1 = document.getElementById('lowDrop');
const dropzone2 = document.getElementById('highDrop');
const result = document.getElementById('result');
const audioText = document.querySelector('audio')
const audioValue = audioText.getAttribute('data-value');
audioText.play().then(r => console.log(r));
// Add dragstart event listener to the draggable element
draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
});

// Add dragover event listener to the dropzone
dropzone1.addEventListener('dragover', (event) => {
    event.preventDefault(); // Prevent default to allow drop
});
dropzone2.addEventListener('dragover', (event) => {
    event.preventDefault(); // Prevent default to allow drop
});

// Add drop event listener to the dropzone
// the 'drop' is just the type of thing you're doing (refer to the API docs)
dropzone1.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(data);
    dropzone1.appendChild(draggableElement);
    result.textContent = `You dropped the item in ${dropzone1.id}`;
    const resultDisplay = document.createElement('div');
    dropzone1.appendChild(resultDisplay)
    if (audioValue === dropzone1.getAttribute('data-value')) {
        resultDisplay.textContent = "Correct!"
    } else {
        resultDisplay.textContent = "Wrong!"
    }
    setTimeout(() => {
        window.location.reload()
    }, 1000)
});
dropzone2.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(data);
    dropzone2.appendChild(draggableElement);
    result.textContent = `You dropped the item in ${dropzone2.id}`;
    const resultDisplay = document.createElement('div');
    dropzone2.appendChild(resultDisplay)
    if (audioValue === dropzone2.getAttribute('data-value')) {
        resultDisplay.textContent = "Correct!"
    } else {
        resultDisplay.textContent = "Wrong!"
    }
    setTimeout(() => {
        window.location.reload()
    }, 1000)

});
// Get the value associated with the audio file


// // Optional: Display the value associated with the audio file
// const audioValueDisplay = document.createElement('div');
// audioValueDisplay.textContent = `Audio Value: ${audioValue}`;
// document.body.appendChild(audioValueDisplay);
