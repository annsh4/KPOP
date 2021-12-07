function getAllworkers_4() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
    ];
    return workers;
}
function createCustomerID(name, id) {
    if (name === void 0) { name = "Someone"; }
    if (id === void 0) { id = -1; }
    return "\u0406\u043C'\u044F \u0437\u0430\u043C\u043E\u0432\u043D\u0438\u043A\u0430: " + name + ", \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440: " + id;
}
var myID = createCustomerID("Ann", 10);
console.log(myID);
var IdGenerator = function (id, name) {
    return "\u0406\u043C'\u044F \u0437\u0430\u043C\u043E\u0432\u043D\u0438\u043A\u0430: " + name + ", \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440: " + id;
};
IdGenerator = createCustomerID;
console.log(IdGenerator());
console.log(IdGenerator('Tom', 2));
