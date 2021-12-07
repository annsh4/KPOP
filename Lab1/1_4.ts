
function getAllworkers_4() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
    ]
    return workers;
}

function createCustomerID(name: string = "Someone", id: number = -1): string {
    return `Ім'я замовника: ${name}, ідентифікатор: ${id}`
}

const myID = createCustomerID("Ann", 10)
console.log(myID)

let IdGenerator: typeof createCustomerID = (id, name) => { 
    return `Ім'я замовника: ${name}, ідентифікатор: ${id}` 
}

IdGenerator = createCustomerID
console.log(IdGenerator())
console.log(IdGenerator('Tom', 2))