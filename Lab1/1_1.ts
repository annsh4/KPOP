
function getAllworkers_1() {
    let workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
    ]
    return workers;
}

function logFirstAvailable(workers : {
    Name: string,
    surname: string,
    available: boolean,
    salary: number
}[]): void {
    console.log(`Кількість працівників: ${workers.length}`)
    console.log()
    for (let worker of workers) {
        if (worker.available)
            console.log(`Ім'я працівника: ${worker.Name + " " + worker.surname}`)
    }
}

logFirstAvailable(getAllworkers_1())