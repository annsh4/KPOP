var favoriteAuthor = {
    email: 'conan1859@gmail.com',
    name: 'Conan Doyle',
    numBooksPublished: 103
};
var favoriteLibrarian = {
    department: 'Department of Industrial Literature',
    email: 'indast_literature@gov.ua',
    name: 'National Library of Ukraine',
    assistCustomer: function (customerName) {
        console.log("\u0410\u0441\u0438\u0441\u0442\u0443\u0454\u043C\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430 " + customerName);
    }
};
console.log('Улюблений автор: ' + favoriteAuthor.name);
favoriteLibrarian.assistCustomer('Олена');
console.log('у бібліотеці ' + favoriteLibrarian.name);
