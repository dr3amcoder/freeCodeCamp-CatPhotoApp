document.getElementById('generateCatFactsBtn').addEventListener('click', fetchCatFact);

const fetchCatFact = () => {
    fetch('https://cat-fact.herokuapp.com//facts/random?animal_type=cat&amount=1')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok')
        })
        .then(data => {
            document.getElementById('generated-cat-fact').innerText = data.text;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('generated-cat-fact').innerText = 'Failed to fetch cat fact'
        })
}