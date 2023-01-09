import { CardModel } from '../model/index';
import { CardView } from '../view/cardView';

export class CardController {
    model;
    view;
    constructor(view: CardView, model: CardModel) {
        this.view = view;
        this.model = model;
    }

    getAll() {
        const cards = this.model.getAll();
        this.view.renderCards(cards);
    }
}
