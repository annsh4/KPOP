var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (customerName) {
        console.log(this.name + " \u0430\u0441\u0438\u0441\u0442\u0443\u0454 " + customerName);
    };
    return UniversityLibrarian;
}());
var favoriteAuthor = {
    email: 'conan1859@gmail.com',
    name: 'Conan Doyle',
    numBooksPublished: 103
};
/*const favoriteLibrarian: Librarian = {
    department: 'Department of Industrial Literature',
    email: 'indast_literature@gov.ua',
    name: 'National Library of Ukraine',

    assistCustomer(customerName: string): void {
        console.log(`Асистуємо клієнта ${customerName}`);
    }
};*/
var favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'National Library of Ukraine';
favoriteLibrarian.assistCustomer('клієнта Олену');
