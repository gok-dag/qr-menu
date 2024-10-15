// Tüm kartlar ve butonları seçelim
const filterButtons = document.querySelectorAll('.filter-btn');
const cardBoxes = document.querySelectorAll('.card-box');

// Butonlara tıklama işlevi ekliyoruz
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Tüm kartları gizliyoruz
        cardBoxes.forEach(card => {
            if (category === 'all') {
                card.style.display = 'block'; // Hepsi gösterilsin
            } else {
                // Seçili kategoriye ait olanları göster, diğerlerini gizle
                if (card.classList.contains(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});
