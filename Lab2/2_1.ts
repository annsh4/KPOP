enum Category {
    BUSINESS_ANALYST,
    DEVELOPER,
    DESIGNER,
    QA,
    SCRUM_MASTER
}

interface Employee {
    id: number,
    name: string,
    surname: string,
    available: boolean,
    salary: number,
    category: Category
}

function getAllEmployees(): Employee[] {
    return [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.DEVELOPER },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.DEVELOPER },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.QA },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.SCRUM_MASTER },
    ];
}

function getEmployeeById(id: number): Employee | undefined {
    return getAllEmployees().find(employee => employee.id === id)
}

function printWorker(worker: Employee) {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`)
}

printWorker(getEmployeeById(3))