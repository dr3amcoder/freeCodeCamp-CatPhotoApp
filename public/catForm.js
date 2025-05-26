
const catForm = document.getElementById('catForm');
const catName = document.getElementById('catName');
const catType = document.getElementsByName('indoor-outdoor');
const catPersonality = document.getElementsByName('personality');
const catFavoriteActivity = document.getElementById('favoriteActivity');
const successMessage = document.getElementById('successfulCatProfile');

const successfulMsg = 'Cat profile sent successfully!';
const unsuccessfulMsg = 'Please fill out all fields before submitting.'


const submitHandler = async (event) => {
    event.preventDefault();

    const catNameValue = catName.value;
    const catTypeSelected = [...catType].find(radio => radio.checked)?.value;
    const catPersonalitySelected = [...catPersonality]
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const catFavoriteActivitySelected = catFavoriteActivity.value;

    !catNameValue || !catTypeSelected || catPersonalitySelected.length === 0 || !catFavoriteActivitySelected
    ? successMessage.textContent = successfulMsg : unsuccessfulMsg

    const catData = {
        name: catNameValue,
        type: catTypeSelected,
        personalities: catPersonalitySelected,
        activity: catFavoriteActivitySelected
    }

    try {
        console.log('catData to send:', catData);
        const response = await fetch('/catForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(catData),
        });

        if (!response.ok) {
            throw new Error('Failed to save cat profile');
        }
        
        const result = await response.json();
        console.log('✅ Server response:', result);

        successMessage.style.display = 'block';

        catForm.reset();

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

    } catch (error) {
        console.error('❌ Error submitting cat profile:', error);
    }
};


catForm.addEventListener('submit', submitHandler);