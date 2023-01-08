import '../view/filter.css';
import '../model/initialData';
import { storage } from '../model/initialData';

export class FilterViewComponent {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('wrapper-filters');
        this.renderFilter();
    }

    getElement(): HTMLElement {
        return this.element;
    }

    renderFilter(): void {
        const wrapperSelectFilt = document.createElement('div');
        wrapperSelectFilt.classList.add('wrapper-select-items');
        const selectSorts = document.createElement('select');
        selectSorts.classList.add('select-sorts');
        const optionDefault = document.createElement('option');
        optionDefault.classList.add('option-default');
        optionDefault.textContent = 'Please, choose kind of sort';
        optionDefault.disabled = true;
        optionDefault.selected = true;
        const optionPrice = document.createElement('option');
        optionPrice.classList.add('option-price');
        optionPrice.textContent = 'Sort by price low-high';
        optionPrice.setAttribute('value', 'sortPrice');
        const optionPriceReverse = document.createElement('option');
        optionPriceReverse.classList.add('option-price-reverse');
        optionPriceReverse.textContent = 'Sort by price high-low';
        optionPriceReverse.setAttribute('value', 'sortPriceReverse');
        const optionRating = document.createElement('option');
        optionRating.classList.add('option-rating');
        optionRating.textContent = 'Sort by rating low-high';
        optionRating.setAttribute('value', 'sortRating');
        const optionRatingReverse = document.createElement('option');
        optionRatingReverse.classList.add('option-rating-reverse');
        optionRatingReverse.textContent = 'Sort by rating high-low';
        optionRatingReverse.setAttribute('value', 'sortRatingReverse');
        selectSorts.append(optionDefault, optionPrice, optionPriceReverse, optionRating, optionRatingReverse);
        this.element.append(selectSorts);
        const arr = storage.map((x) => x.brand);
        const setBrand = new Set(arr);
        const uniqueBrandCollection = Array.from(setBrand);
        const arrCategory = storage.map((x) => x.category);
        const setCategory = new Set(arrCategory);
        const uniqueCategoryCollection = Array.from(setCategory);
        const fieldSetBrandFilt = document.createElement('fieldset');
        fieldSetBrandFilt.classList.add('wrapper-filter-brand');
        const nameLegend = document.createElement('legend');
        nameLegend.textContent = 'Brand';
        fieldSetBrandFilt.append(nameLegend);
        for (let i = 0; i < uniqueBrandCollection.length; i += 1) {
            const inputContainer = document.createElement('div');
            inputContainer.classList.add('input-container');
            const inputBrand = document.createElement('input');
            inputBrand.classList.add('input-item');
            inputBrand.setAttribute('type', 'checkbox');
            inputBrand.id = `${uniqueBrandCollection[i]}`;
            inputBrand.setAttribute('name', 'brand');
            const labelInput = document.createElement('label');
            labelInput.classList.add('label-item');
            labelInput.setAttribute('for', `${uniqueBrandCollection[i]}`);
            labelInput.textContent = `${uniqueBrandCollection[i]}`;
            inputContainer.append(inputBrand, labelInput);
            fieldSetBrandFilt.append(inputContainer);
        }
        this.element.append(fieldSetBrandFilt);
        const fieldSetCategoryFilt = document.createElement('fieldset');
        fieldSetCategoryFilt.classList.add('wrapper-filter-category');
        const nameLegendCat = document.createElement('legend');
        nameLegendCat.textContent = 'Category';
        fieldSetCategoryFilt.append(nameLegendCat);
        for (let i = 0; i < uniqueCategoryCollection.length; i += 1) {
            const inputContainer = document.createElement('div');
            inputContainer.classList.add('input-container');
            const inputCategory = document.createElement('input');
            inputCategory.classList.add('input-item');
            inputCategory.id = `${uniqueCategoryCollection[i]}`;
            inputCategory.setAttribute('name', 'category');
            inputCategory.setAttribute('type', 'checkbox');
            const labelInput = document.createElement('label');
            labelInput.classList.add('label-item');
            labelInput.setAttribute('for', `${uniqueCategoryCollection[i]}`);
            labelInput.textContent = `${uniqueCategoryCollection[i]}`;
            inputContainer.append(inputCategory, labelInput);
            fieldSetCategoryFilt.append(inputContainer);
        }
        this.element.append(fieldSetCategoryFilt);
        const fieldSetPriceFilt = document.createElement('fieldset');
        fieldSetPriceFilt.classList.add('wrapper-filter-price');
        const nameLegendPrice = document.createElement('legend');
        nameLegendPrice.textContent = 'Price';
        fieldSetPriceFilt.append(nameLegendPrice);
        const labelInputRangePrice = document.createElement('label');
        labelInputRangePrice.classList.add('label-item-range');
        labelInputRangePrice.setAttribute('for', 'price');
        labelInputRangePrice.textContent = '12';
        const spanMaxPriceValue = document.createElement('span');
        spanMaxPriceValue.classList.add('max-price-value');
        const inputRangePriceContainer = document.createElement('div');
        inputRangePriceContainer.classList.add('input-container');
        const inputPrice = document.createElement('input');
        inputPrice.classList.add('input-item-price');
        inputPrice.setAttribute('type', 'range');
        inputPrice.setAttribute('min', '12');
        inputPrice.setAttribute('max', '1750');
        inputPrice.setAttribute('value', '1750');
        inputPrice.setAttribute('step', '1');
        spanMaxPriceValue.textContent = inputPrice.value.toString();
        labelInputRangePrice.append(inputPrice, spanMaxPriceValue);
        inputRangePriceContainer.append(labelInputRangePrice);
        fieldSetPriceFilt.append(inputRangePriceContainer);
        this.element.append(fieldSetPriceFilt);
        const fieldSetRatingFilt = document.createElement('fieldset');
        fieldSetRatingFilt.classList.add('wrapper-filter-rating');
        const nameLegendRating = document.createElement('legend');
        nameLegendRating.textContent = 'Rating';
        fieldSetRatingFilt.append(nameLegendRating);
        const labelInputRangeRating = document.createElement('label');
        labelInputRangeRating.classList.add('label-item-range');
        labelInputRangeRating.setAttribute('for', 'rating');
        labelInputRangeRating.textContent = '4';
        const spanMaxRatingValue = document.createElement('span');
        spanMaxRatingValue.classList.add('max-rating-value');
        const inputRangeRatingContainer = document.createElement('div');
        inputRangeRatingContainer.classList.add('input-container');
        const inputRating = document.createElement('input');
        inputRating.classList.add('input-item-rating');
        inputRating.setAttribute('type', 'range');
        inputRating.setAttribute('min', '4');
        inputRating.setAttribute('max', '5');
        inputRating.setAttribute('value', '5');
        inputRating.setAttribute('step', '0.01');
        (spanMaxRatingValue as HTMLSpanElement).textContent = inputRating.value.toString();
        labelInputRangeRating.append(inputRating, spanMaxRatingValue);
        inputRangeRatingContainer.append(labelInputRangeRating);
        fieldSetRatingFilt.append(inputRangeRatingContainer);
        this.element.append(fieldSetRatingFilt);
        const clearBtn = document.querySelector('.clear-btn') as HTMLButtonElement;
        (clearBtn as HTMLButtonElement).addEventListener('click', () => {
            const allInputBrand = Array.from(document.querySelectorAll('.input-item'));
            const inputPrice = document.querySelector('.input-item-price');
            const maxPriceValue = document.querySelector('.max-price-value');
            const amountGoods = document.querySelector('.amount-goods');
            const totalPrice = document.querySelector('.card-total-number');
            const optionDefault = document.querySelector('.option-default');
            (maxPriceValue as HTMLSpanElement).textContent = (inputPrice as HTMLInputElement).getAttribute('max');
            allInputBrand.forEach((x) => ((x as HTMLInputElement).checked = false));
            (inputPrice as HTMLInputElement).value = Number(
                (inputPrice as HTMLInputElement).getAttribute('max')
            ).toString();
            (inputRating as HTMLInputElement).value = Number(
                (inputRating as HTMLInputElement).getAttribute('max')
            ).toString();
            const wrapperItems = Array.from(document.querySelectorAll('.wrapper-card-item'));
            const wrapperCards = document.querySelector('.wrapper-card');
            (wrapperCards as HTMLDivElement).innerHTML = '';
            const defaultArrCards = wrapperItems.sort(
                (a, b) =>
                    Number((a as HTMLDivElement).getAttribute('data')) -
                    Number((b as HTMLDivElement).getAttribute('data'))
            );
            defaultArrCards.map((x) => (wrapperCards as Element).append(x));
            wrapperItems.forEach((x) => ((x as HTMLDivElement).style.display = 'flex'));
            wrapperItems.forEach((x) => (x as HTMLDivElement).classList.remove('active-card'));
            (amountGoods as HTMLSpanElement).textContent = '0';
            (totalPrice as HTMLSpanElement).textContent = '0';
            (optionDefault as HTMLOptionElement).selected = true;
        });
    }
}
