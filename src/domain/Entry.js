import { nanoid } from "nanoid";

export class Entry {
    constructor(title) {
        this.id = nanoid();
        this.title = title;
    }
}