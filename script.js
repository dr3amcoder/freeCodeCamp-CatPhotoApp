document.getElementById('generateBtn').addEventListener('click', function() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(data => {
            const catImageUrl = data[0].url;  // Get the URL of the cat image
            displayCatPhoto(catImageUrl);  // Call the function to display the image
        })
        .catch(error => {
            console.error('Error fetching cat photo:', error);
        });
        setTimeout(() => {
                const photoContainer = document.getElementById('cat-photo-container');
                photoContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500);
});

function displayCatPhoto(imageUrl) {
    const container = document.getElementById('cat-photo-container');
    const img = document.createElement('img');
    img.src = imageUrl;
    container.innerHTML = '';  // Clear any existing image
    container.appendChild(img);  // Add the new image
}
