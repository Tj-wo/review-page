const ratingStars = document.querySelectorAll('#rating .dot');
const submitButton = document.getElementById('submit-btn');
const messageElement = document.getElementById('message');
let selectedRating = null;

ratingStars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.dataset.value;
        ratingStars.forEach(star => star.classList.remove('selected'));
        star.classList.add('selected');
    });
});

submitButton.addEventListener('click', () => {
    if (selectedRating) {
        // messageElement.textContent = `Thank you for your rating! You selected ${selectedRating} out of 5.`;
        // messageElement.style.display = 'block';

        



    } else {
        alert('Please select a rating.');
    }
});
