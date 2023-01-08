import { storage } from './initialData';

export class CardModel {
    storage;
    constructor() {
        this.storage = storage;
    }

    getAll() {
        return this.storage;
    }

    getUniqueBrand() {
        const arr = this.storage.map((x) => x.brand);
        return arr;
    }

    filterBrand(value: string) {
        const filterBrand = this.storage.filter((x) => x.brand === value);
        return filterBrand;
    }
}
