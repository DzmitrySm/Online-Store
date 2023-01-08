import '../view/header.css';

export class HeaderViewComponent {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('header');
        this.renderHeader();
    }

    getElement(): HTMLElement {
        return this.element;
    }

    renderHeader(): void {
        this.element = document.createElement('header');
        this.element.classList.add('header');
        const divEl = document.createElement('div');
        divEl.classList.add('header-logo');
        const imgLogo = document.createElement('img');
        imgLogo.classList.add('logo-img');
        imgLogo.src = require('../../assets/logo-store.png');
        const wrapperTotalPrice = document.createElement('div');
        wrapperTotalPrice.classList.add('wrapper-total-price');
        const spanCardTotal = document.createElement('span');
        spanCardTotal.classList.add('card-total-txt');
        spanCardTotal.textContent = 'Card Total: ';
        const spanSymbEur = document.createElement('span');
        spanSymbEur.classList.add('card-euro-symb');
        spanSymbEur.textContent = '€ ';
        const spanCardNumber = document.createElement('span');
        spanCardNumber.classList.add('card-total-number');
        spanCardNumber.textContent = '0';
        wrapperTotalPrice.append(spanCardTotal, spanSymbEur, spanCardNumber);
        const divBasket = document.createElement('div');
        divBasket.classList.add('wrapper-basket');
        const imgBasket = document.createElement('img');
        imgBasket.classList.add('basket-img');
        imgBasket.src = require('../../assets/shopping-basket.png');
        divEl.append(imgLogo);
        const amountGoods = document.createElement('span');
        amountGoods.classList.add('amount-goods');
        amountGoods.textContent = '0';
        const clearBtn = document.createElement('button');
        clearBtn.classList.add('clear-btn');
        clearBtn.textContent = 'Clear';
        divBasket.append(imgBasket, amountGoods, clearBtn);
        this.element.append(divEl, wrapperTotalPrice, divBasket);
    }
}
