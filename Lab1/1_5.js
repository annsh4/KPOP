var Category5;
(function (Category5) {
    Category5[Category5["Business_analyst"] = 0] = "Business_analyst";
    Category5[Category5["Developer"] = 1] = "Developer";
    Category5[Category5["Designer"] = 2] = "Designer";
    Category5[Category5["QA"] = 3] = "QA";
    Category5[Category5["Scrum_master"] = 4] = "Scrum_master";
})(Category5 || (Category5 = {}));
function getAllworkers_5() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category5.Business_analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category5.Designer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category5.Developer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category5.QA }
    ];
    return workers;
}
function createCustomer(name, age, city) {
    if (age === void 0) { age = null; }
    if (city === void 0) { city = null; }
    console.log("\u0406\u043C'\u044F \u0437\u0430\u043C\u043E\u0432\u043D\u0438\u043A\u0430: " + name);
    if (age) {
        console.log("\u0412\u0456\u043A: " + age);
    }
    if (city) {
        console.log("\u041C\u0456\u0441\u0442\u043E: " + city);
    }
}
console.log("З одним аргументом:");
createCustomer("Tom");
console.log("\nЗ двома аргументами:");
createCustomer("Tom", 20);
console.log("\nЗ трьома аргументами:");
createCustomer("Tom", 20, "Kyiv");
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
function getWorkerByID_5(id) {
    var worker = getAllworkers_5().find(function (w) { return w.id === id; });
    return [worker.Name, worker.surname, worker.salary, worker.available];
}
function checkoutWorkers(customer) {
    var workerIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        workerIDs[_i - 1] = arguments[_i];
    }
    console.log("\n\u0406\u043C'\u044F \u0437\u0430\u043C\u043E\u0432\u043D\u0438\u043A\u0430: " + customer);
    console.log("\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438:");
    var res = [];
    for (var _a = 0, workerIDs_1 = workerIDs; _a < workerIDs_1.length; _a++) {
        var id = workerIDs_1[_a];
        var worker_1 = getWorkerByID_5(id);
        if (worker_1[3])
            res.push((worker_1[0] + " " + worker_1[1] + " "));
    }
    return res;
}
var worker = checkoutWorkers("Ann", 1, 3, 4);
worker.forEach(function (element) {
    console.log(element);
});
