interface Person {
    name: string,
    email: string
}

interface Author extends Person {
    numBooksPublished: number
}

interface Librarian extends Person {
    department: string,
    assistCustomer: (customerName: string) => void
}

class UniversityLibrarian implements Librarian {
    department: string
    email: string
    name: string

    assistCustomer(customerName: string): void {
        console.log(`${this.name} асистує ${customerName}`)
    }
}

const favoriteAuthor: Author = {
    email: 'conan1859@gmail.com',
    name: 'Conan Doyle',
    numBooksPublished: 103
};

/*const favoriteLibrarian: Librarian = {
    department: 'Department of Industrial Literature',
    email: 'indast_literature@gov.ua',
    name: 'National Library of Ukraine',

    assistCustomer(customerName: string): void {
        console.log(`Асистуємо клієнта ${customerName}`)
    }
};*/

const favoriteLibrarian: Librarian = new UniversityLibrarian()
favoriteLibrarian.name = 'National Library of Ukraine'
favoriteLibrarian.assistCustomer('клієнта Олену')