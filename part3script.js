document.addEventListener('DOMContentLoaded', () => {
    const namePlaceholder = document.getElementById('namePlaceholder');

    // Get the name from the URL query parameter (assuming you're passing it via the URL)
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    if (name) {
        // Display the name in the placeholder
        namePlaceholder.textContent = name;
    } else {
        // Handle the case where there is no name parameter in the URL
        namePlaceholder.textContent = 'Friend';
    }
});


// Add functionality to the "Share" button
document.getElementById('shareButton').addEventListener('click', () => {
    const shareText = `Check out my Diwali wish on this Diwali Wishing Website!`;
    // You can customize the sharing method here (e.g., copying to clipboard, opening in a new window, etc.)
    // For simplicity, we'll just display a message with the share text.
    alert(shareText);
});

