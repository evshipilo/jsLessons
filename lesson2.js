'use strict';
//chapter2  качество кода ----------------
//----------- objects  --------------

/*
let user = {
    name: 'nn',
    surname: 'smith',
};
user.name='pit';
delete user.surname;

alert(user.name+user.surname);
*/

//-----------------

/*
function isEmpty(obj) {
    for (let key in obj) {
        if (key in obj) return false;
    }
    return true;
}

let user = {};
alert(isEmpty(user));
user.name='john';
alert(isEmpty(user));*/
//--------------------------

/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum=0;
for (let key in salaries){
    sum+=salaries[key];
    alert(sum);
}
alert(sum);*/
//-----------------
/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') obj[key] += obj[key];
    }
}

multiplyNumeric(menu);

for (let key in menu) {
    alert(key+' : '+menu[key]);
}
*/
//--------------------------calculator

/*
let calculator = {
    read() {
        this.a = prompt('a?');
        this.b = prompt('b?');
    },
    sum() {
        return ((+this.a) + (+this.b));
    },
    mul() {
        return (this.a * this.b)
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/
//---------------------calc

/*
function Calculator()
{
    this.read = function () {
        this.a = prompt('a?');
        this.b = prompt('b?');
    };
    this.sum=function () {
        return ((+this.a)+(+this.b));
    };
    this.mul=function () {
        return (this.a*this.b)
    };


}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
*/

//------------------------------------ constructor

/*function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function (readValue) {
        this.value += +prompt('value?', '50')+readValue;

    };

}

let accumulator=new Accumulator(100);
accumulator.read(5);
accumulator.read(5);
alert(accumulator.value);*/


