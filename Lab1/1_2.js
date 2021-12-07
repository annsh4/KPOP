var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
function getAllworkers_2() {
    var workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ];
    return workers;
}
function getWorkersNamesByCategory(category, workers) {
    var list = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.category === category)
            list.push(worker.surname);
    }
    return list;
}
function logWorkersNames(list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var list_elem = list_1[_i];
        console.log("" + list_elem);
    }
}
logWorkersNames(getWorkersNamesByCategory(Category.Business_analyst, getAllworkers_2()));
