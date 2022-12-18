export class CardView {
    renderCards(cards) {
        cards.forEach((card) => {
            let image = document.createElement('img');
            document.body.append(image);
            image.src = card.images[0];
        });
    }
}
