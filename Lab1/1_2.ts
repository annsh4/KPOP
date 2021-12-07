enum Category {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}

function getAllworkers_2() {
    let workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ]
    return workers;
}

function getWorkersNamesByCategory(category: Category, workers: {
    Name: string,
    surname: string,
    available: boolean,
    salary: number,
    category: Category
}[]): string[] {
    let list: Array<string> = []
    for (let worker of workers) {
        if (worker.category === category)
            list.push(worker.surname)
    }
    return list
}

function logWorkersNames(list: string[]): void {
    for (let list_elem of list) {
        console.log(`${list_elem}`)
    }
}

logWorkersNames(getWorkersNamesByCategory(Category.Business_analyst, getAllworkers_2()))
