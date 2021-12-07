enum Category3 {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}

function getAllworkers_3() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category3.Business_analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category3.Designer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category3.Developer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category3.QA }
    ]
    return workers;
}

function getWorkersNamesByCategory_3(category: Category3, workers: {
    Name: string,
    surname: string,
    available: boolean,
    salary: number,
    category: Category3
}[]): string[] {
    let list: Array<string> = []
    for (let worker of workers) {
        if (worker.category === category)
            list.push(worker.surname + " " + worker.Name)
    }
    return list
}

function logWorkersNames_3(elements: string[]): void {
    elements.forEach(el => console.log(el))
}

logWorkersNames_3(getWorkersNamesByCategory_3(Category3.Developer, getAllworkers_3()))

function getWorkerByID_3(id: number, workers: {
    id: number,
    Name: string,
    surname: string,
    available: boolean,
    salary: number,
    category: Category3
}[]): string {

    let worker = workers.find(w => w.id === id);

    return `${worker.Name} ${worker.surname} отримує ${worker.salary}$`
}

console.log(getWorkerByID_3(3, getAllworkers_3()))