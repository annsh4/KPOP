enum Category5 {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}

function getAllworkers_5() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category5.Business_analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category5.Designer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category5.Developer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category5.QA }
    ]
    return workers;
}

function createCustomer(name: string, age: number | null = null, city: string | null = null): void {
    console.log(`Ім'я замовника: ${name}`)
    if(age){
        console.log(`Вік: ${age}`)
    }
    if(city){
        console.log(`Місто: ${city}`)
    }
}

console.log("З одним аргументом:")
createCustomer("Tom")
console.log("\nЗ двома аргументами:")
createCustomer("Tom", 20)
console.log("\nЗ трьома аргументами:")
createCustomer("Tom", 20, "Kyiv")

/*function getWorkersNamesByCategory_5(workers: {
    Name: string, surname: string, available: boolean, salary: number, category: Category5
}[], category: Category5 = Category5.Designer): string[] {
    let list: Array<string> = []
    for (let worker of workers) {
        if (worker.category === category)
            list.push(worker.Name + " " + worker.surname)
    }
    return list
}

function logWorkersNames_5(elements: string[]): void {
    elements.forEach(el => console.log(el))
}

logWorkersNames_5(getWorkersNamesByCategory_5(getAllworkers_5()))

function logFirstAvailable_5(workers: {
    Name: string, surname: string, available: boolean, salary: number
}[] = getAllworkers_5()): void {
    console.log(`${workers.length}`)
    for (const worker of workers) {
        if (worker.available) {
            console.log(`${worker.Name + " " + worker.surname}`)
        }
    }
}

logFirstAvailable_5()*/

function getWorkerByID_5(id: number) {

    let worker = getAllworkers_5().find(w => w.id === id);

    return [worker.Name, worker.surname, worker.salary, worker.available]
}

function checkoutWorkers(customer: string, ...workerIDs: number[]): string[] {
    console.log(`\nІм'я замовника: ${customer}`)
    console.log(`Доступні працівники:`)
    let res = []
    for (const id of workerIDs) {
        let worker = getWorkerByID_5(id)
        if(worker[3])
            res.push((worker[0] + ` ` + worker[1] + ` `))
    }
    return res
}

const worker = checkoutWorkers("Ann", 1, 3, 4)
worker.forEach(element => {
    console.log(element)
})
