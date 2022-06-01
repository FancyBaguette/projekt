const featureCards = document.querySelectorAll('.feature-card');
const featureCardsImages = document.querySelectorAll('.feature-card img');

// featureCardsImages.forEach(element => {
//     element.addEventListener("mouseenter", () => {
//         element.classList.add('animate__animated', 'animate__tada');
//     });

//     element.addEventListener("animationend", () => {
//         element.classList.remove('animate__animated', 'animate__tada');
//     });
// });

for (let i = 0; i < featureCards.length; i++) {
    featureCards[i].addEventListener("mouseenter", () => {
        featureCardsImages[i].classList.add('animate__animated', 'animate__tada');

        featureCardsImages[i].addEventListener("animationend", () => {
            featureCardsImages[i].classList.remove('animate__animated', 'animate__tada');
        });
    });
}