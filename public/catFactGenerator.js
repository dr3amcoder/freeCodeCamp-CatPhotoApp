// Breaking down the problem
//
// Requirements:
// 1. Event Listener for generate cat facts button
// 2. Function to make the generate cat facts button work
//  2.1 Fetch function to send a GET REQ to Cat-fact API to retrieve cat facts
//      2.1.1 If GET REQ status code 200:
//          2.1.1.1 Transform response into a JSON Object
//          2.1.1.2 Update element that will capture and display the cat facts
//      2.1.2 Else, Handle Error
//          2.1.2.1 Throw an erroa
//          2.1.2.2 Console error using a user-friendly message
//
// 
// Scenario:
// 1. User-interacts with the button to generate cat facts
// 2. Generate Cat Facts button sends a GET REQ to Cat-Facts API
// 3. Cat-Facts API sends a response object
// 4. FetchCatFacts transform response object to retrieve just the text part from the response object.
// 5. FetchCatFacts handles error and displays user-friendly error to user should there be issues with data retrieval from cat-facts API
// 6. Cat facts is displayed to the appropriate element in the web page


const generateCatFactsButton = document.getElementById('generateCatFactsBtn');
const generatedCatFacts = document.getElementById('generated-cat-fact');

generateCatFactsButton.addEventListener('click', async () => {
    try {
        const response = await fetch('/catFactsGenerator');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            generatedCatFacts.textContent = data.fact;
        } else {
            throw new Error('Network response was not ok');
        } 
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        generatedCatFacts.textContent = 'Failed to fetch cat fact';
    }
});

