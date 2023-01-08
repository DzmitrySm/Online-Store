import '../view/card.css';
import { ICard } from '../types/index';

export class CardView {
    renderCards(cards: ICard[]) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-card');
        cards.forEach((card) => {
            const cardItemWrapper = document.createElement('div');
            cardItemWrapper.classList.add('wrapper-card-item');
            cardItemWrapper.id = card.brand;
            cardItemWrapper.setAttribute('data', `${cards.indexOf(card)}`);
            cardItemWrapper.setAttribute('cat', `${card.category}`);
            cardItemWrapper.setAttribute('price', `${card.price}`);
            cardItemWrapper.setAttribute('rating', `${card.rating}`);
            const nameProduct = document.createElement('p');
            nameProduct.textContent = card.title;
            const image = document.createElement('img');
            image.classList.add('card-image');
            document.body.append(wrapper);
            image.src = card.images[0];
            cardItemWrapper.append(nameProduct);
            cardItemWrapper.append(image);
            wrapper.append(cardItemWrapper);
            const categoryWrapper = document.createElement('div');
            categoryWrapper.classList.add('wrapper-category');
            const categorySpan = document.createElement('span');
            const categorySpanValue = document.createElement('span');
            categorySpan.textContent = 'Category: ';
            categorySpanValue.textContent = card.category;
            categoryWrapper.append(categorySpan, categorySpanValue);
            cardItemWrapper.append(categoryWrapper);
            const brandWrapper = document.createElement('div');
            const brandSpan = document.createElement('span');
            const brandSpanValue = document.createElement('span');
            brandSpan.textContent = 'Brand: ';
            brandSpanValue.textContent = card.brand;
            brandSpanValue.classList.add('brand-name');
            brandWrapper.append(brandSpan, brandSpanValue);
            cardItemWrapper.append(brandWrapper);
            const priceWrapper = document.createElement('div');
            const priceSpan = document.createElement('span');
            const priceSpanValue = document.createElement('span');
            priceSpan.textContent = 'Price: ';
            priceSpanValue.textContent = card.price.toString();
            priceWrapper.append(priceSpan, priceSpanValue);
            cardItemWrapper.append(priceWrapper);
            const ratingWrapper = document.createElement('div');
            const ratingSpan = document.createElement('span');
            const ratingSpanValue = document.createElement('span');
            ratingSpan.textContent = 'Rating: ';
            ratingSpanValue.textContent = card.rating.toString();
            ratingWrapper.append(ratingSpan, ratingSpanValue);
            cardItemWrapper.append(ratingWrapper);
            const stockWrapper = document.createElement('div');
            const stockSpan = document.createElement('span');
            const stockSpanValue = document.createElement('span');
            stockSpan.textContent = 'Stock: ';
            stockSpanValue.textContent = card.stock.toString();
            stockWrapper.append(stockSpan, stockSpanValue);
            cardItemWrapper.append(stockWrapper);
            const wrapperButton = document.createElement('div');
            wrapperButton.classList.add('wrapper-btn');
            const addBasketBtn = document.createElement('button');
            addBasketBtn.classList.add('add-prod-btn');
            addBasketBtn.textContent = 'add to cart';
            const detailsBtn = document.createElement('button');
            detailsBtn.textContent = 'details';
            wrapperButton.append(addBasketBtn, detailsBtn);
            cardItemWrapper.append(wrapperButton);
        });
        const currentUrl = window.location.href;
        function setLocation(currentUrl: string) {
            location.hash = currentUrl;
        }
        const selectSorts = Array.from(document.querySelectorAll('select'));
        selectSorts.map((x) =>
            x.addEventListener('change', (event: Event) => {
                const wrapperItems = Array.from(document.querySelectorAll('.wrapper-card-item'));
                const wrapperCards = document.querySelector('.wrapper-card');
                if ((event.target as HTMLSelectElement).value === 'sortPrice') {
                    (wrapperCards as Element).innerHTML = '';
                    const sortedArr = wrapperItems.sort(
                        (a, b) =>
                            Number((a as HTMLDivElement).getAttribute('price')) -
                            Number((b as HTMLDivElement).getAttribute('price'))
                    );
                    sortedArr.map((x) => (wrapperCards as Element).append(x));
                    setLocation(currentUrl);
                }
                if ((event.target as HTMLSelectElement).value === 'sortPriceReverse') {
                    (wrapperCards as Element).innerHTML = '';
                    const sortedArr = wrapperItems.sort(
                        (a, b) =>
                            Number((b as HTMLDivElement).getAttribute('price')) -
                            Number((a as HTMLDivElement).getAttribute('price'))
                    );
                    sortedArr.map((x) => (wrapperCards as Element).append(x));
                    setLocation(currentUrl);
                }
                if ((event.target as HTMLSelectElement).value === 'sortRating') {
                    (wrapperCards as Element).innerHTML = '';
                    const sortedArr = wrapperItems.sort(
                        (a, b) =>
                            Number((a as HTMLDivElement).getAttribute('rating')) -
                            Number((b as HTMLDivElement).getAttribute('rating'))
                    );
                    sortedArr.map((x) => (wrapperCards as Element).append(x));
                }
                if ((event.target as HTMLSelectElement).value === 'sortRatingReverse') {
                    (wrapperCards as Element).innerHTML = '';
                    const sortedArr = wrapperItems.sort(
                        (a, b) =>
                            Number((b as HTMLDivElement).getAttribute('rating')) -
                            Number((a as HTMLDivElement).getAttribute('rating'))
                    );

                    sortedArr.map((x) => (wrapperCards as Element).append(x));
                }
            })
        );
        const checkbox = document.querySelectorAll('input[name="brand"]');
        const checkboxCategory = document.querySelectorAll('input[name="category"]');
        let arr: Element[] = [];
        Array.from(checkboxCategory).map((x) => {
            x.addEventListener('change', function (event) {
                const target = (event.target as Element).getAttribute('id');
                const wrapperItems = Array.from(document.querySelectorAll('.wrapper-card-item'));
                if ((event.target as HTMLInputElement).checked) {
                    wrapperItems.map((x) =>
                        x.getAttribute('cat') === target ? arr.push(x) : ((x as HTMLDivElement).style.display = 'none')
                    );
                    arr.map((x) => ((x as HTMLDivElement).style.display = 'flex'));
                }
                if ((event.target as HTMLInputElement).checked === false) {
                    const invisibleCard = arr.filter((x) => target === x.getAttribute('cat'));
                    invisibleCard.map((x) => ((x as HTMLDivElement).style.display = 'none'));
                }
                if (
                    Array.from(checkbox).every(
                        (x) =>
                            (x as HTMLInputElement).checked === false &&
                            Array.from(checkboxCategory).every((x) => (x as HTMLInputElement).checked === false)
                    )
                ) {
                    wrapperItems.map((x) => ((x as HTMLDivElement).style.display = 'flex'));
                    arr = [];
                }
            });
        });
        Array.from(checkbox).map((x) => {
            x.addEventListener('change', function (event: Event) {
                const target = (event.target as Element).getAttribute('id');
                const wrapperItems = Array.from(document.querySelectorAll('.wrapper-card-item'));
                if ((event.target as HTMLInputElement).checked) {
                    wrapperItems.map((x) =>
                        x.id === target ? arr.push(x) : ((x as HTMLDivElement).style.display = 'none')
                    );
                    arr.map((x) => ((x as HTMLDivElement).style.display = 'flex'));
                }
                if ((event.target as HTMLInputElement).checked === false) {
                    const invisibleCard = arr.filter((x) => target === x.id);
                    invisibleCard.map((x) => ((x as HTMLDivElement).style.display = 'none'));
                }
                if (
                    Array.from(checkbox).every(
                        (x) =>
                            (x as HTMLInputElement).checked === false &&
                            Array.from(checkboxCategory).every((x) => (x as HTMLInputElement).checked === false)
                    )
                ) {
                    wrapperItems.map((x) => ((x as HTMLDivElement).style.display = 'flex'));
                    arr = [];
                }
            });
        });
        const range = document.querySelector('.input-item-price');
        (range as HTMLInputElement).addEventListener('input', () => {
            const wrapperItems = Array.from(document.querySelectorAll('.wrapper-card-item'));
            const filteredPriceArr = wrapperItems.filter(
                (x) => Number((x as HTMLDivElement).getAttribute('price')) <= Number((range as HTMLInputElement).value)
            );
            wrapperItems.map((x) => ((x as HTMLDivElement).style.display = 'none'));
            filteredPriceArr.map((x) => ((x as HTMLDivElement).style.display = 'flex'));
            const maxPriceValue = document.querySelector('.max-price-value');
            (maxPriceValue as HTMLSpanElement).textContent = (range as HTMLInputElement).value.toString();
        });
        const rangeRating = document.querySelector('.input-item-rating');
        (rangeRating as HTMLInputElement).addEventListener('input', () => {
            const wrapperItems = Array.from(document.querySelectorAll('.wrapper-card-item'));
            const filteredPriceArr = wrapperItems.filter(
                (x) =>
                    Number((x as HTMLDivElement).getAttribute('rating')) <=
                    Number((rangeRating as HTMLInputElement).value)
            );
            wrapperItems.map((x) => ((x as HTMLDivElement).style.display = 'none'));
            filteredPriceArr.map((x) => ((x as HTMLDivElement).style.display = 'flex'));
            const maxRatingValue = document.querySelector('.max-rating-value');
            (maxRatingValue as HTMLSpanElement).textContent = (rangeRating as HTMLInputElement).value.toString();
        });
        const totalBinPrice = document.querySelector('.card-total-number');
        const wrapperItems = Array.from(document.querySelectorAll('.wrapper-card-item'));
        wrapperItems.forEach((x) =>
            x.addEventListener('click', (event: Event) => {
                const targetEl = event.target as HTMLButtonElement;
                const targetDivCard: HTMLDivElement = targetEl.closest('.wrapper-card-item') as HTMLDivElement;
                const condition = true;
                const amountGoods = document.querySelector('.amount-goods');
                switch (condition) {
                    case targetEl.classList.contains('add-prod-btn') && targetDivCard.classList.contains('active-card'):
                        (targetDivCard as HTMLDivElement).classList.remove('active-card');
                        targetEl.textContent = 'add to cart';
                        (totalBinPrice as HTMLSpanElement).textContent = (
                            Number((totalBinPrice as HTMLSpanElement).textContent) -
                            Number((targetDivCard as HTMLDivElement).getAttribute('price'))
                        ).toString();
                        (amountGoods as HTMLSpanElement).textContent = (
                            Number((amountGoods as HTMLSpanElement).textContent) - 1
                        ).toString();
                        break;
                    case targetEl.classList.contains('add-prod-btn') &&
                        !targetDivCard.classList.contains('active-card'):
                        (targetDivCard as HTMLDivElement).classList.add('active-card');
                        targetEl.textContent = 'drop from cart';
                        (totalBinPrice as HTMLSpanElement).textContent = (
                            Number((totalBinPrice as HTMLSpanElement).textContent) +
                            Number((targetDivCard as HTMLDivElement).getAttribute('price'))
                        ).toString();
                        (amountGoods as HTMLSpanElement).textContent = (
                            Number((amountGoods as HTMLSpanElement).textContent) + 1
                        ).toString();
                        break;
                }
            })
        );
    }
}
