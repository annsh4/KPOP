class ReferenceItem {
    /*title: string
    year: number

    constructor(title: string, year: number) {
        this.title = title
        this.year = year
        console.log(`Створюємо новий ReferenceItem...`)
    }*/

    static department: string = 'Department of Industrial Literature'

    private _publisher: string

    constructor(public title: string, private year: number) {
    } 

    get publisher(): string {
        return this._publisher.toUpperCase()
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher
    }

    public printItem() {
        console.log(`${this.title} був опублікований у ${this.year} у департаменті ${ReferenceItem.department}`)
    }
}

const ref = new ReferenceItem('Sherlock Holmes', 1887)
ref.printItem()
ref.publisher = 'Beeton Christmas Annual'
console.log(`Видавництво: ` + ref.publisher)