var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " \u0431\u0443\u0432 \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u0438\u0439 \u0443 " + this.year + " \u0443 \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u0456 " + ReferenceItem.department);
    };
    /*title: string
    year: number

    constructor(title: string, year: number) {
        this.title = title
        this.year = year
        console.log(`Створюємо новий ReferenceItem...`)
    }*/
    ReferenceItem.department = 'Department of Industrial Literature';
    return ReferenceItem;
}());
var ref = new ReferenceItem('Sherlock Holmes', 1887);
ref.printItem();
ref.publisher = 'Beeton Christmas Annual';
console.log("\u0412\u0438\u0434\u0430\u0432\u043D\u0438\u0446\u0432\u0442\u043E: " + ref.publisher);
