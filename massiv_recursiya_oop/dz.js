'use strict';

//////ZADANIE 1
import {resolveRouteComponents} from "../../nuxt_vue/nuxt-example/.nuxt/utils";

let rec = function(n, a){
    a = a || 0;
    console.log(a);
    a++;
    if(a>n){
        return;
    }
    else{
        return rec(n,a);
    }
};
rec(10);
//////////ZADANIE 2
let srav1 = function srav(a , b) {
  if (a < b) {
      otADoB(a,b)
    } else {
      b_bolshe(a,b)
  }
};
let otADoB = function otADoB(a , b) {
    console.log(a);
    a++;
    if (a > b){
        return;
    } else {
        return otADoB(a, b)
    }
};
let b_bolshe = function b_bolshe(a , b){
    console.log(a);
    --a;
    if (a < b){
        return;
    } else {
        return b_bolshe(a, b)
    }
};
srav1(4 , 7);
srav1(7 , 4);
///////////////////////ZADANIE3
let y =0;
let sum = function(n){
    let f = Math.floor(n % 10);
    y += f;
    if (n < 10){
        return y;
    } else {
       n = Math.floor(n /10);
        return sum(n) ;
    }
};

////////////ZADANIE4

let c = function (n) {
   let g = Math.floor(n % 10);
    console.log (g);
if (n < 10 ){
    return;
} else {
    n = Math.floor(n / 10);
    return c(n) ;
}
};
///////////////////////ZADANIE 5
let p =0;
let flip = function (n) {
    p *= 10;
    p += n % 10;
    if (n < 10){
        return c(p);
    } else {
        n = Math.floor(n / 10);
        return flip(n);
    }
    };

/////////////////////////////ZADANIE 6 ZADANIE 7 ZADANIE 8

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    get Selary(){
       return this.rate * this.days;
    }
    get FormattedRate(){
        return `$${this.rate}`;
    }
    get FormattedDays(){
       if (this.days <= 1) {return `${this.days}day`} else { return `${this.days}days`}
    }
   set Rate(value) {
        this.rate = !isNaN(value) ? value : this.rate;
        return this.rate;
    }
    set Days(value){
        this.days = !isNaN(value) ? value : this.days;
        return this.days;
    }
    set FormattedDays(value){
        if (!isNaN(value)) {
            this.days = value;
        } else {
            const tmpValue = parseFloat(value.replace(/(day|days)/i, ''));
            this.days = !isNaN((tmpValue)) ? tmpValue : this.days;
        }
    }
    set FormattedRate(value){
        if(!isNaN(value)){
            this.rate = value;
        } else {
            const tmpValue = parseFloat(value.replace('$' ,''));
            this.rate = !isNaN(tmpValue) ? tmpValue : this.rate;
        }
    }
}
let worker = new Worker('Vova','Grin',10, 25);
let worker1 = new Worker('Igor', 'Popov', 15,14);
console.log(worker.Selary + worker1.Selary);
console.log(worker.FormattedRate);
worker.Rate = 11;
worker.Days = 17;
worker.FormattedRate = '$16';
worker.FormattedDays = '24days' ;

//////////////////////////////////ZADANIE 9

class MyString {
    constructor(str) {
        this.str = str;
    }
    set reverse(str) {
        this.str = str.split('');
        this.str = this.str.reverse();
        this.str = this.str.join('');

    }
    set ucFirst(str){
        this.str = str[0].toUpperCase() + str.slice(1);
    }
    set ucWords(str){
        this.str = str.split(' ');
        for (let i = 0; i < this.str.length; i++){
            this.str[i] = this.str[i][0].toUpperCase() + this.str[i].slice(1);
        }
        this.str = this.str.join(' ');
    }
}
let stroka = new MyString('qwe');
stroka.reverse = 'zxc';
stroka.ucFirst = 'abc';
stroka.ucWords = 'qwe asd zxc';

this.yearOfReceipt = yearOfReceipt;
////////////////////////////////////////// ZADANIE 10
let year = new Date();

class User{
    constructor (name,  surname) {
        this.name = name;
        this.surname = surname;
          }
    get FullName(){
        return `${this.name} ${this.surname}`
    }
}
class Student extends User{
    constructor(name,  surname, yearOfReceipt){
        super(name, surname);
        this.yearOfReceipt = yearOfReceipt;
    }
    get Course(){
        return `${year.getFullYear() - this.yearOfReceipt} курс`;
    }
}
let g = new Student('den', 'dan', 2016);
g.FullName;
g.Course;

/////////////////////////// ZADANIE 11-12
let a = ['a', 'b', 'c'];
let b = [1, 2, 3];
let c = b.concat(a);
//////////////////////////// ZADANIE 13
let q = ['a', 'b', 'c'];
q.push(1,2,3);
/////////////////////////// ZADANIE 14
let w = [1, 2, 3];
w.splice(0,0,4,5,6);
/////////////////////////  ZADANIE 15 ZADANIE 16 ZADANIE 17
let e = [1, 2, 3, 4, 5];
let r = e.slice(0,3);
let t = e.slice(3);
e.splice(1,2);
//////////////////////// ZADANIE 18
let y = [1, 2, 3, 4, 5];
let u = y.splice(1,3);

///////////////////////// ZADANIE 19
let i = [1, 2, 3, 4, 5];
i.splice(3,0,'a','b','c');
///////////////////////////////// ZADANIE 20
let o = [1, 2, 3, 4, 5];
o.splice(1,0,'a','b');
o.splice(6,0,'c');
o.splice(8,0,'e');
////////////////////////////// ZADANIE 21
let obj = {
    js : 'test',
    jq : 'hello',
    css : 'world'
};
Object.keys(obj);
///////////////////////////////// ZADANIE 22















































