const generateCatFactsButton = document.getElementById('generateCatFactsBtn');
const generatedCatFacts = document.getElementById('generatedCatFact');

generateCatFactsButton.addEventListener('click', async () => {
    try {
        const response = await fetch('/catFactsGenerator');
        if (response.ok) {
            const data = await response.json();
            const catFact = data.fact
            generatedCatFacts.textContent = catFact;
        } else {
            throw new Error('Network response was not ok');
        } 
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        generatedCatFacts.textContent = 'Failed to fetch cat fact';
    }
});

