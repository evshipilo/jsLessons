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
//--------------------------
