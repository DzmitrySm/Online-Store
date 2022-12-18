export class CardController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    getAll() {
        const cards = this.model.getAll();
        this.view.renderCards(cards);
    }
}
