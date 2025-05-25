
const catForm = document.getElementById('catForm');
const catName = document.getElementById('catName');
const catType = document.getElementsByName('indoor-outdoor');
const catPersonality = document.getElementsByName('personality');
const catFavoriteActivity = document.getElementById('favoriteActivity');

const submitHandler = async (event) => {
    event.preventDefault();

    const catNameValue = catName.value;
    const catTypeSelected = [...catType].find(radio => radio.checked)?.value;
    const catPersonalitySelected = [...catPersonality]
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const catFavoriteActivitySelected = catFavoriteActivity.value;

    console.log('Cat Name', catNameValue)
    console.log('Cat Type', catTypeSelected)
    console.log('Cat Personality', catPersonalitySelected)
    console.log('Cat Favourite Activity', catFavoriteActivitySelected)

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
        
        const result = await response.json();
        console.log('✅ Server response:', result);

    } catch (error) {
    console.error('❌ Error submitting cat profile:', error);
    }
};


catForm.addEventListener('submit', submitHandler);