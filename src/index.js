import { CardModel } from './components/model/index.js';
import { CardView } from './components/view/index.js';
import { CardController } from './components/controller/index.js';

function init() {
    const model = new CardModel();
    const view = new CardView();
    const cardController = new CardController(view, model);
    cardController.getAll();
}

init();
