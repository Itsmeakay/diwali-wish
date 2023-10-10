
// Function to navigate to part2.html
function navigateToPart2() {
    window.location.href = 'part2index.html'; // Redirect to part2.html
}

// Handle button click event
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', navigateToPart2);

document.addEventListener('DOMContentLoaded', () => {
    const backgroundVideo = document.getElementById('backgroundVideo');
    const startButton = document.getElementById('startButton');

    // Add a click event listener to the button
    startButton.addEventListener('click', () => {
        // Reset the video to the beginning
        backgroundVideo.currentTime = 0;

        // Play the video
        backgroundVideo.play();
        
        // Handle any other logic or redirection to Part 2 as needed
    });
});
