"use strict";

//----5 глава учебника---------


//alert(prompt('1 number','1')+prompt('2 number','1'));


//----------------

/*function readNumber() {
    while (1) {
        let a=prompt('input number','');
        if (a==='') return null;
        if(a==undefined) return null;
        if (+a==a) return +a;


    }

}
alert(readNumber());*/

//-------------------------- math random integer
/*
function random (min,max) {
    return Math.floor(Math.random()*(max-min)+min);


}
let d='';
for(let i=0; i<100;i++){
    d+=(random(5,10)+' ; ');

}
alert(d);*/

//-------------------strings
//------ 1 letter to upper case

/*function ucFirst(str) {
    if(!str) return 'empty';
    str= str[0].toUpperCase()+str.slice(1);
    return str;

}
alert(ucFirst('scscsdcsc'));*/

//-------------------- check spam

/*
function checkSpam(str) {
    if (str.toLowerCase().includes('viagra')|| str.toLowerCase().includes('xxx')) return true;
    else return false;



}

alert(checkSpam('jkshbcas xwlkjexnwqlkjxx xx enxxwwd'));*/

//---------------------truncate усечение строки

/*function truncate(str, maxLength) {
    if (str.length>maxLength){
        return (str.slice(0,maxLength-1)+'…');
    }
    return str;
}
alert(truncate('jsahcbsjkhcskdhcb',5));*/

//---------------
/*function extractCurrencyValue(str) {
    return +str.slice(1);

}*/

//------------------------ARRAYS
/*
let styles = ['джаз','блюз',];
alert(styles);
styles.push('рокнролл');
alert(styles);
//alert(styles.length/2);
//alert(Math.round(styles.length/2));
styles[Math.floor(styles.length/2)]='классика';
alert(styles);
styles.shift();
alert(styles);
styles.unshift('реп','регги');
alert(styles);

*/

//------------------------sum of array items

/*
function sumInput() {
    let arr = [];


    while (true) {
        let a = prompt('input int', '0');
        if (a.trim() === '' || a === null || !isFinite(a)) break;
        arr.push(+a);

    }
let sum=0;
    for (let item of arr) {
        sum += item;
        alert(item + '  ' + sum);
    }
    return sum;
}

alert(sumInput());*/
//---------------------- max subArray + начало и конец субмассива с максимальной суммой ---

/*
let arr = [-1, 100, -20, 5, 7, 15, -8, 6, 7, 2, 3, -10, 12, 2, -3,333];

function getMaxSubSum(array) {
    let sum = 0;
    let maxCurrent = 0;
    let max = 0;
    let countStart = 0;
    let countEnd = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            sum += array[j];
            maxCurrent = Math.max(maxCurrent, sum);
            if (maxCurrent > max) {
                countStart = i;
                countEnd = j;
            }
            max = Math.max(maxCurrent, max);
        }
        sum = 0;
        maxCurrent = 0;
    }
    alert('maxSum=' + max + ' start ' + countStart + '  fin ' + countEnd);
}

alert(getMaxSubSum(arr));*/
