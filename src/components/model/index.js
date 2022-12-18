import { storage } from './initialData';

export class CardModel {
    constructor() {
        this.storage = storage;
    }

    getAll() {
        return this.storage;
    }
}
