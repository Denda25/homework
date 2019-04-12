(() => {
'use strict';
/////ZADANIE 1
function arrayFill(a, b) {
    let mas = [];
    for (let i = 0; i < a; i++) {
        mas.push(b);
        return mas;
    }
    let c = arrayFill(5, "tt");
}

///ZADANIE 2
let mas = [[1 , 2, 3], [4, 5], [6]];
console.log(mas);
   function sumArray(mas){
       for (let i = 0 ; i < mas.length; i++){
           mas[i] = mas[i].reduce((a , b) => a + b, 0)
       }
       return mas.reduce((a , b ) => a +b );
   }
    console.log(sumArray(mas));
//// ZADANIE 3
let mass = [[[1 , 2], [3 , 4]], [[5 , 6], [7, 8]]];
    function sumArray(mass){
        for (let i = 0 ; i < mass.length; i++){
            for (let j = 0; j < mass.length; j++){
                mass[i][j] = mass[i][j].reduce((a , b) => a + b)
            }
            mass[i] = mass[i].reduce((a , b) => a + b, 0)
        }
        return mass.reduce((a , b ) => a +b );
    }
    console.log(sumArray(mass));
/// ZADANIE 4
function isNumberInRange(a) {
    a = (a > 0 && a < 10) ;
    console.log(a);
}
////ZADANIE 5
function isEven(b) {
    b = (b % 2 === 0);
    console.log(b);
}
///ZADANIE 6
let mac = [1 , 2, 8, 12, 66, 15, 23];
let kk = [];
for (let i = 0; i < mac.length; i++){
    if (isEven(mac[i]))  {
        kk.push(mac[i])
    }
}
    console.log(kk);
//// ZADANIE 7
    function getDevisors(a) {
        let deliteli = [];
        for (let i = 0 ; i <= a; i++) {
            if (((a / i) % 1) === 0) {
                deliteli.push(i)
            }
        }
        console.log(deliteli);
    }
/////// ZADANIE 8.1

    function  getMatrix() {
        const matrix = [];
        const size = 11;
        for ( let row = 1; row < size ; row++) {
            matrix[row] = [];
            for (let cell = 0; cell < size; cell++ ){
                matrix[row][cell] = row * cell ;
            }
        }
        return matrix;
    }
let h = getMatrix();
///////   ZADANIE 8.2
function getMatr() {
    const matrix = [];
    const size = 10;
    for (let row = 0; row < size; row++){
        matrix[row] = [];
        for (let cell = 0; cell < size; cell++){
            if (row < cell + 1) {
                matrix[row][cell] = 3
            } else {
                matrix[row][cell] = 6
            }
            if (row > size - 1 - cell) {
                matrix[row][cell] = 5
            }
            if (row < cell + 1 && row > size - 1 - cell) {
                matrix[row][cell] = 4
            }
            if (row === cell) {
                matrix[row][cell] = 1
            }
           if (row === size - 1 - cell) {
               matrix[row][cell] = 2
           }
        }
    }
return matrix;
}
let h = getMatr();
/////////////ZADANIE 8.3

    function  getTriangl() {
        const  matrix = [];
        const size = 10;
            for (let row = 0; row < size; row++) {
                matrix[row] = [1];
                for (let cell = 1; cell <= row; cell++) {
                    if (row > cell ) {
                        matrix[row][cell] = matrix[row - 1][cell] + matrix[row - 1][cell - 1]
                    } else {
                    matrix[row].push(1)
                    }
            }
        }
        return matrix;
    }
    let j = getTriangl();

/////ZADANIE 9

function getPow( chislo, pow) {
    let result = Math.pow(chislo, pow);
    alert(result);}
    let f = getPow(+prompt(`vvedite chislo`), +prompt(`vvedite stepen'`));

/////ZADANIE 10

    function checkAge(age = +prompt(`Введите аш возраст`)) {
        (age >= 16)? alert(`Добро пожаловать`) : alert(`Вы еще слишком молоды`);}
    let k = checkAge();

////ZADANIE 11

    function checkAge(age)
    {
        if (typeof age === 'undefined') {
            alert(`Введите ваш возраст`)
        } else if (age >= 16) {
            alert(`Добро пожаловать`)
        } else {
            alert(`Вы еще слишком молоды`)
        }
    }
         let l = checkAge();


////////ZADANIE 12

    function sizeMas(mas) {
       if (typeof mas === 'undefined' || Array.isArray(mas) === false) {
           alert(`Массив не задан`)
       } else {
           alert(` Длина массива${mas.length}`)
       }
    }
        let p = sizeMas();

////ZADANIE 13

function vse(chis) {
    if (chis >= 10) {
        return chis * chis;
    }
        else if (chis <= 7) {
            return `${chis} < 7`;
        }
        else if (chis === 8 || chis === 9) {
            return `chislo = ${chis}`;
        } else {
            return ` vvedeno ne chislo`;
        }
}
let chis = +prompt(`vvedite chislo`);
vse(chis);


///////////ZADANIE 14
let stroka = prompt(`vvedite text`);
stroka = stroka.split(' ');
    for (let i = 0; i < stroka.length; i++) {
        stroka[i] = (ucFirst(stroka[i]));
    }
    function ucFirst(str) {
            if (!str) {
                return str
            } else {
                return str[0].toUpperCase() + str.slice(1)
            }
    }
stroka.join(' ');
/////////////ZADANIE 15

let newText = ('var_text_hello');
    newText =  newText.split('_');
function ucFirstNew(str) {
    if (!str) {
        return str
    } else {
        return str[0].toUpperCase() + str.slice(1)
    }
}
    for (let i = 0; i < newText.length; i++) {
        newText[i] = ucFirstNew(newText[i])
    }
newText.join('');
/////ZADANIE 15.1
function inArray(text, found) {
    for (let i = 0; i < text.length; i++) {
    return (text.indexOf(found) != -1);
}
}
////ZADANIE 16

let nabor = '4589356';
nabor = nabor.split('');
let array =[];
for (let i = 0; i < nabor.length; i++){
    if (nabor.length % 2 === 1){
        nabor.push(nabor[nabor.length - 1])
    }
   if (i % 2 === 0)   {
       array[i] = nabor[i + 1]
   } else if (i % 2 === 1) {
       array[i] = nabor[i - 1]
   }
}
array.splice(array.length - 1, 1);
array.join('');

/////////ZADANIE 17
function  sequence(start = 0, step = 1) {
    function* gen(start, step) {
        while (true) {
            yield  start;
            start += step;
        }
    }
    let generator = gen(start, step);
    return function () {
        return generator.next().value;
    }
    }


////////////////ZADANIE 18
function take(generator, size){
    for (let i = 0; i < size; i++){
      let mas = [];
          mas[i] = generator();
    }
    return mas;
}
    let generator = sequence(0,2);
 console.log(take(generator() ,5)); //[0, 2, 4, 6, 8]

////////////// ZADANIE 19
function map(square , arr) {
    let a =[];
    for (let i = 0; i < arr.length; i++){
            a[i] = square(arr[i]);
    }
    return a;
}
let  square = function square(x) {return x * x };
let arr = [2, 4 , 5];

///////ZADANIE 20

///////ZADANIE 21


    function filter(input,isEven) {
        let mas = [];
        for (let i = 0; i < input.length; i++) {
            if ((isEven(input[i])) === true) {
                mas.push(input[i])
            }
        }
        return mas;
      }
   function isEven(x) { return x % 2 === 0}

    let input = [1, 2, 3, 4, 5];
    let result = filter(input, isEven);



})();

