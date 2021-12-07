interface Person {
    name: string,
    email: string
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string,
    assistCustomer: (customerName: string) => void
}

const favoriteAuthor: Author = {
    email: 'conan1859@gmail.com',
    name: 'Conan Doyle',
    numBooksPublished: 103
};

const favoriteLibrarian: Librarian = {
    department: 'Department of Industrial Literature',
    email: 'indast_literature@gov.ua',
    name: 'National Library of Ukraine',

    assistCustomer(customerName: string): void {
        console.log(`Асистуємо клієнта ${customerName}`)
    }
};

console.log('Улюблений автор: ' + favoriteAuthor.name)
favoriteLibrarian.assistCustomer('Олена')
console.log('у бібліотеці ' + favoriteLibrarian.name)