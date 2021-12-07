var Category3;
(function (Category3) {
    Category3[Category3["Business_analyst"] = 0] = "Business_analyst";
    Category3[Category3["Developer"] = 1] = "Developer";
    Category3[Category3["Designer"] = 2] = "Designer";
    Category3[Category3["QA"] = 3] = "QA";
    Category3[Category3["Scrum_master"] = 4] = "Scrum_master";
})(Category3 || (Category3 = {}));
function getAllworkers_3() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category3.Business_analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category3.Designer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category3.Developer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category3.QA }
    ];
    return workers;
}
function getWorkersNamesByCategory_3(category, workers) {
    var list = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.category === category)
            list.push(worker.surname + " " + worker.Name);
    }
    return list;
}
function logWorkersNames_3(elements) {
    elements.forEach(function (el) { return console.log(el); });
}
logWorkersNames_3(getWorkersNamesByCategory_3(Category3.Developer, getAllworkers_3()));
function getWorkerByID_3(id, workers) {
    var worker = workers.find(function (w) { return w.id === id; });
    return worker.Name + " " + worker.surname + " \u043E\u0442\u0440\u0438\u043C\u0443\u0454 " + worker.salary + "$";
}
console.log(getWorkerByID_3(3, getAllworkers_3()));
