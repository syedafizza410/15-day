// **************** 100 days coding challenge "15 day" ************* //
/* Q43 Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data.
This exercise demonstrates array copying and manipulation.*/
var magiciansName = ["Alice", "HarryPotter", "David", "Chris"];
function showmagicians(magiciansName) {
    magiciansName.forEach(function (magiciansName) {
        console.log(magiciansName);
    });
}
function Make_great(magiciansName) {
    magiciansName.forEach(function (magiciansName) {
        console.log("".concat(magiciansName, " the great!"));
    });
    return Make_great;
}
showmagicians(magiciansName);
Make_great(magiciansName);
/* Q44 Sandwiches: Summarize sandwich orders with varying ingredients.
Explain & TIP: Utilizing rest parameters allows functions to accept an
indefinite number of arguments, useful for handling lists of data like
sandwich ingredients.*/
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
/*Q45  Cars: Create detailed car objects with flexible properties.
Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters
let you create detailed and flexible objects. This is ideal for data with a
few required fields and many optional fields.*/
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
