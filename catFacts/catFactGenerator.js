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




// DRAFT Code -- below code contains issues with CORS; replacing with my own db to manage and amend data and create this project into full stack
// const fetchCatFact = () => {
//     fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
//         .then(response => {
//             console.log(response)
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error('Network response was not ok')
//         })
//         .then(data => {
//             document.getElementById('generated-cat-fact').innerText = data.text;
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//             document.getElementById('generated-cat-fact').innerText = 'Failed to fetch cat fact'
//         })
// }



// document.getElementById('generateCatFactsBtn').addEventListener('click', fetchCatFact);
