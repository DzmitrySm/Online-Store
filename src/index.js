import { CardModel } from './components/model/index.js';
import { CardView } from './components/view/cardView';
import { CardController } from './components/controller/index.js';
import { HeaderViewComponent } from './components/view/headerViewComponent';
import { FooterViewComponent } from './components/view/footerViewComponent';

function init() {
    const header = new HeaderViewComponent();
    document.body.append(header.getElement());
    const model = new CardModel();
    const view = new CardView();
    const cardController = new CardController(view, model);
    cardController.getAll();
    const footer = new FooterViewComponent();
    document.body.append(footer.getElement());
}

init();
