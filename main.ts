// **************** 100 days coding challenge "15 day" ************* //


/* Q43 Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. 
This exercise demonstrates array copying and manipulation.*/


let magiciansName: string[] = ["Alice", "HarryPotter", "David", "Chris"];

function showmagicians(magiciansName:string[]){
    magiciansName.forEach(magiciansName => {
        console.log(magiciansName);
    })
}


function Make_great(magiciansName:string[]){
    magiciansName.forEach(magiciansName => {
        console.log(`${magiciansName} the great!`);
    });
    return Make_great;
}

showmagicians(magiciansName);
Make_great(magiciansName);


/* Q44 Sandwiches: Summarize sandwich orders with varying ingredients.
Explain & TIP: Utilizing rest parameters allows functions to accept an 
indefinite number of arguments, useful for handling lists of data like 
sandwich ingredients.*/


function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");


/*Q45  Cars: Create detailed car objects with flexible properties.
Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters 
let you create detailed and flexible objects. This is ideal for data with a 
few required fields and many optional fields.*/


function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
