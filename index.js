
const ratingStars = document.querySelectorAll('#rating .dot');
const submitButton = document.getElementById('submit-btn');
const messageElement = document.getElementById('selection');
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
    const message = `You selected ${selectedRating} out of 5.`;
    window.location.href = `thankyou.html?message=${encodeURIComponent(message)}`;
  } else {
    alert('Please select a rating.');
  }
});