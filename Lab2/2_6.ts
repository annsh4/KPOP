class ReferenceItem {
    public static department: string = 'Department of Industrial Literature';

    private _publisher: string;

    constructor(public title: string, protected year: number) {
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher
    }

    public printItem() {
        console.log(`${this.title} був опублікований у ${this.year} у департаменті ${ReferenceItem.department}`)
    }
}

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    public printItem(): void {
        super.printItem();
        console.log(`Видання: ${this.edition} (${this.year})`);
    }
}

const refBook = new Encyclopedia('The Memoirs of Sherlock Holmes', 1894, 2);
refBook.printItem();