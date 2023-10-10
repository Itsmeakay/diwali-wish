// JavaScript for Part 2

// Function to trigger the firecracker animation
function triggerFirecrackerAnimation() {
    const firecrackers = document.querySelectorAll('.firecracker');

    firecrackers.forEach((firecracker) => {
        // Remove any existing animation class
        firecracker.classList.remove('explode');

        // Trigger the animation by adding the explode class
        setTimeout(() => {
            firecracker.classList.add('explode');
        }, Math.random() * 1000);
    });
}

// Part 2 JavaScript (part2script.js)

document.getElementById('generateButton').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value;
    const diwaliWish = document.getElementById('diwaliWish');

    if (nameInput.trim() !== '') {
        const wish = `Happy Diwali, ${nameInput}!`; // Customize your wish here
        diwaliWish.textContent = wish;

        // Redirect to Part 3 with the name as a query parameter
        window.location.href = `part3index.html?name=${encodeURIComponent(nameInput)}`;
    } else {
        diwaliWish.textContent = 'Please enter your name!';
    }
});

// Rest of your Part 2 JavaScript code...


// Function to share the name
function shareName() {
    const name = document.getElementById('nameInput').value;
    const shareURL = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(name)}`;
    const shareText = `Check out my name: ${name} on this Diwali Wishing Website! ${shareURL}`;
    
    // You can customize the sharing method here (e.g., copying to clipboard, opening in a new window, etc.)
    // For simplicity, we'll just display a message with the share text.
    alert(shareText);
}

// Add an event listener for the Share button
document.getElementById('shareButton').addEventListener('click', shareName);

// Part 2 JavaScript (part2script.js)

// Add an event listener to the "Enter Your Name" button
document.getElementById('enterNameButton').addEventListener('click', () => {
    // Get the name input from the user (you can modify this part)
    const nameInput = prompt('Enter your name:');
    
    if (nameInput) {
        // Redirect to the next page with the name as a query parameter
        window.location.href = `part3.html?name=${encodeURIComponent(nameInput)}`;
    }
});
