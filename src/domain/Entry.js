import { nanoid } from "nanoid";

export class Entry {
    constructor(title, note) {
        this.id = nanoid();
        this.title = title;
        this.createdAt = Date.now();
        this.note = note;
    }

    getFormattedDate() {
        const date = new Date(this.createdAt);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }
}