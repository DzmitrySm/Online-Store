import { CardModel } from './components/model/index';
import { CardView } from './components/view/cardView';
import { CardController } from './components/controller/index';
import { HeaderViewComponent } from './components/view/headerViewComponent';
import { FooterViewComponent } from './components/view/footerViewComponent';
import { FilterViewComponent } from './components/view/filterViewComponent';

function init() {
    const header = new HeaderViewComponent();
    document.body.append(header.getElement());
    const filters = new FilterViewComponent();
    document.body.append(filters.getElement());
    const model = new CardModel();
    const view = new CardView();
    const cardController = new CardController(view, model);
    cardController.getAll();
    const footer = new FooterViewComponent();
    document.body.append(footer.getElement());
}

init();
