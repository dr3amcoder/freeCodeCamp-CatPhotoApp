const generatedCatPhotosButton = document.getElementById('generateBtn');
const generatedCatPhotos = document.getElementById('catPhotoContainer');


generatedCatPhotosButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        if (response.ok) {
            const data = await response.json();
            const catImageUrl = data[0].url;
            displayCatPhoto(catImageUrl);
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error fetching cat photo:', error);
    }
    setTimeout(() => {
        generatedCatPhotos.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
});


const displayCatPhoto = (imageUrl) => {
    const container = document.getElementById('catPhotoContainer');
    const img = document.createElement('img');
    img.src = imageUrl;
    container.innerHTML = '';  // Clear any existing image
    container.appendChild(img);  // Add the new image
}
