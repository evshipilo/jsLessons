"use strict";

//2.12--------------------------
/*

let i=prompt("введите число больше 100");
while (i<100 && i){

	i=prompt("введите число больше 100");
}*/

//prime numbers вывести простые числа от 1 до указанного числа---------------------
/*let n = prompt("введите число");
let string = "";
gg: for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
        if (i % j == 0 && j != 1) continue gg;

    }
    string += i + ', ';

}

alert(string);*/

//2.13----------------------

/*
let  b=prompt('введите браузер','');
if (b=='edge') alert('ok'); else {
    if (b=='opera'||b=='safari') alert('ok good'); else {
        alert('we hope ok');
    }
}
*/
//-----------------------------------

/*
let number=+prompt('input number between 0 and 3');
switch (number) {
    case 0: alert('0'); break;
    case 1: alert('1'); break;
    case 2:
    case 3: alert('2 or 3');

}
*/

//2.14----------------------------

/*
function checkAge(age) {
    return  confirm('Родители разрешили?');
}
alert(checkAge());
*/
//------------------------------------

/*
function getMin(a,b) {
return a<b ? a:b;

}
alert(getMin(10,10));
*/
//--------------------------------------

/*
let a = prompt('1 number');
let b = prompt('2 number');


function getDegree(a, b) {
    return a ** b;

}

alert(getDegree(a, b));
*/
//2.15---------------------------------------
/*
function say (d) {

    alert(d);

};

alert(say);
*/
//-------------стрелочные функции
let  ask = (question, yes, no) => { if (confirm(question)) yes(); else no();};

ask(
    'вы согласны?',
    ()=> alert('yes'),
    ()=> alert('no')

);

