import '../view/card.css';

export class CardView {
    renderCards(cards) {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-card');
        cards.forEach((card) => {
            const cardItemWrapper = document.createElement('div');
            cardItemWrapper.classList.add('wrapper-card-item');
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
            brandWrapper.append(brandSpan, brandSpanValue);
            cardItemWrapper.append(brandWrapper);
            const priceWrapper = document.createElement('div');
            const priceSpan = document.createElement('span');
            const priceSpanValue = document.createElement('span');
            priceSpan.textContent = 'Price: ';
            priceSpanValue.textContent = card.price;
            priceWrapper.append(priceSpan, priceSpanValue);
            cardItemWrapper.append(priceWrapper);
            const ratingWrapper = document.createElement('div');
            const ratingSpan = document.createElement('span');
            const ratingSpanValue = document.createElement('span');
            ratingSpan.textContent = 'Rating: ';
            ratingSpanValue.textContent = card.rating;
            ratingWrapper.append(ratingSpan, ratingSpanValue);
            cardItemWrapper.append(ratingWrapper);
            const stockWrapper = document.createElement('div');
            const stockSpan = document.createElement('span');
            const stockSpanValue = document.createElement('span');
            stockSpan.textContent = 'Stock: ';
            stockSpanValue.textContent = card.stock;
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
    }
}
