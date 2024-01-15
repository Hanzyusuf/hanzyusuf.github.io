// Get all elements with class 'showcase-item' and 'card'
const cf_showcaseItems = document.querySelectorAll('.showcase-item');
const cf_cards = document.querySelectorAll('.card');

// Function to prevent event propagation when a clickable inside flip card is clicked
function stopPropagation(event) {
    event.stopPropagation();
}

// Function to handle card flip
function handleCardFlip(event) {
    // Find the corresponding card element
    const card = event.currentTarget.querySelector('.card');

    // Toggle the 'flipped' class on the card to trigger the flip animation
    card.classList.toggle('flipped');
}

// Add click event listeners to showcase items
cf_showcaseItems.forEach(showcaseItem => {
    showcaseItem.addEventListener('click', handleCardFlip);
});

// Add click event listeners to cards
cf_cards.forEach(card => {
    card.addEventListener('click', handleCardFlip);

    card.addEventListener('mouseenter', () => {
        card.classList.add('flipped');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('flipped');
    });

    // Add click event listener to buttons within the card
    const card_clickables = card.querySelectorAll('.links a, .links button');
    card_clickables.forEach(clickable => {
        clickable.addEventListener('click', stopPropagation);
    });
});