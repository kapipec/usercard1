/*
let s1='hello',
    s2='Vasya';
let res;
res=s1+" "+s2;
console.log(res);

let x1=5,
    x2=10;
res = x1+ x2;
console.log(res);
console.log('result is', res);
alert(`result is ${res}`);

let x = 'hello js';
let a = 100;
let b = 5.5;
let c = true;
const COLOR='RedColor';
console.log(x,a,b,c,COLOR);

let z = prompt("Vvedite znachenie A dlya formuly s=1/2*a*h", 1);
let h = prompt("Vvedite znachenie H dlya formuly s=1/2*a*h", 1);
res=z*h*0.5;
console.log(res);
*/

//operator +
console.log('------------------------');
let x7=100, x8=200;
res = x7+x8;
console.log(res);
let x9='hello', x10='Vasya';
res = x9+x10;
console.log(res);

//summ
//преобразование из Строки в число - это ПЛЮС перед переменной или перед промптом
// 1 способ оператор + Example +x
// 2 способ Number() Example Number (x)
// let x11 = prompt ('1 number'); // x11 string
// let x12 = +prompt ('2 number');
// res = +x11+x12;
console.log(res);
// alert(res);

// let x11 = prompt ('1 number'); // x11 string
// let x12 = prompt ('2 number');
//res = Number(x11)+Number(x12) // Привели к одному типу
console.log(res);

// Операторы:
// + - * /
// % остаток от деления
// ** возведение в степень
let x13 = 10, x14 = 3;
console.log('delenie', x13 / x14);
console.log('ostatok ot deleniya', x13 % x14);
console.log ('vozvedenie v stepen', x13 ** x14);

// Корень квадратный из 25
res = 25 ** (1/2);
console.log('квадр корень 25 is', res);
// Кубический корень из 1000
res = 1000 ** (1/3);
console.log('куб корень 25 is', res);

// унарный минус
let x15 = 5;
res = -x15; // -5 (x15 * -1)
res -= x15; // res - x15 

//task 3 
// У нас есть 3-х значное число, вывести его первую цифру
let userValue = 597;
let firstDigit = userValue % 16;
console.log(firstDigit);
let middleDigit = userValue % 12;
console.log(middleDigit);
let lastDigit = userValue % 10;
console.log(lastDigit);

// Оператор сравнения == (Проверяет по значению)
// Оператор строгое равенство === сравнение по типу И значению
// Проверка на четность
let x16 = 10;
console.log ('----------------');
console.log (x16 % 2 == 0);
// проверка типа - typeof()
typeof('58');

// Оператор условия: If
/*
if(условие){
    действие 1
    дейсвтие 2
    действие 3
} else {
    другое действие 1
    другое дейсвтие 2
}
*/

let userValue1;
userValue1 = 100;
if (userValue1 == 100){
    console.log("Да, оно ровняется");
}
else{
    console.log("Нет, оно не равно числу 100");
}
if (userValue1 > 100){
    console.log("Да, оно больше 100");
}
if (userValue1 < 100){
    console.log("Да, оно меньше 100");
}
if (userValue1 != 100){
    console.log("Число не равно 100");
}
if (userValue1 % 2 == 0){
    console.log(`Число ${userValue1} является четным`)
}
/*
равно ==
больше >
меньше <
больше или равно >=
меньше или равно <=
неравно !=  либо ещё с типом !==
*/

/* Tasks
3 Вычислите стоимость покупки, которая состоит из Н тетрадей и М ручек
4 Правильно ли пользователь вычислил 2+2
5 Рещить предыдую задачу с учетом скидки 2% если сумма покупки превысит 500грн
6 по введенному числу прописывает суииу в гривнах и копейках. Например 120.75 - вернет строку "120грн. 75 коп."
*/

//5
let price1, price2;
price1 = prompt('Сколько стоили тетради?');
price2 = prompt('Сколько стоили ручки?');
res = Number(price1)+Number(price2);
// console.log('Сумма покупки составляет',res,'грн.')
let skidka;
if (res>500){
    skidka = res*0.02;
    res = res*0.98;
    console.log('Сумма покупки составляет =',res,'грн.,',' Ваша скидка составляет = ',skidka," грн.")
} else {
    console.log('Сумма покупки составляет',res,'грн.')
}

//правильно ли пользователь вычислил 2+2
let p;
p=prompt('Сколько будет 2+2?');
if (p==4){
    console.log("Да, вы правы!")
}else{
    console.log("Ответ не верен!")
}


//задача 7 не удалась без помощей :с
let z;
z=prompt("Введите сумму в формате 100.00 грн");
Number (z);
hrn=Math.trunc(z);
kop=z*100%100;
console.log(`${hrn} грн. ${kop} коп.`);

//
let userRole;
if (userRole == "user"){
    //deystviya
} else if (userRole == "moderator") {
    //deystviya
} else if (userRole == "admin") {
    //deystviya
} else {
    console.log(`Неопределенный статус. Права не наданы.`)
}

// Логический оператор И - &&
// Логический оператор ИЛИ - ||

let val = prompt("Введите число для проверки от 0 до 100");
if (val>0 && val<100) {
    console.log('Число входит в диапазон 0-100')
} else {
    console.log(`${val} - не входит в числа от 0 до 100`)
}

//Определить какую четверть часа относится отведенное кол-во минут
let min = prompt('Введите значение минут');

if (min>=0 && min<15) {
    console.log("1 chetvert'")
} else if (min >=15 && min<30) {
    console.log("2 chetvert'")
} else if (min >=30 && min<45) {
    console.log("3 chetvert'")
} else if (min >=45 && min<59) {
    console.log("4 chetvert'")
}