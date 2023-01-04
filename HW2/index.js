// HW2 OBJECTS and ARRAYS

//// 1 ////
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const arrExpression = [];

for(const key in citiesAndCountries) {
    arrExpression[arrExpression.length] = `${key} - эта страна называется ${citiesAndCountries[key]}`;
}

console.log(arrExpression);


//// 2 ////
const amount = 9;

if(amount % 3 !== 0) {
    throw new Erorr('Не делится нацело, на 3!');
}

const arr = []
for(let i = 1; i <= amount; i+=3) {
    const innerArr = [];
    for(let j = i; j <= i+2; j++) {
        innerArr[innerArr.length] = j;
    }
    arr[arr.length] = innerArr;
}
console.log(arr)

//2-й вариант
const amount = 9
const arr = []
for(let i = 1; i <= amount; i+=3) {
    const innerArr = [];
    for(let j = 0; j < 3; j++) {
        innerArr[innerArr.length] = j + i;
    }
    arr[arr.length] = innerArr;
}
console.log(arr)

//// 3 ////

const namesOfDays = {
    ua: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця','Субота', 'Неділя'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}


function getNameOfDay(){
    const lang = 'en';
    const day = 7;
    
    for (const key in namesOfDays) {
        if (key === lang) {
            return namesOfDays[key][day - 1];
        }
    }
}

console.log(getNameOfDay()); /// 'Sunday'

//// 4 ////

const arrayOfNumbers = [19, 5, 42, 2, 77];

let firstNum = null;

let secondNum = null;

for(const num of arrayOfNumbers) {
    if(firstNum === null) {        //проверяем firstNum равняется ли "ничего" (может быть нет числа)
        firstNum = num;
        continue;                  //континьйо говорит что тело цикла (if), выходит из него, и заходит на следйющую итнрацию. Т.е. код который ниже, не отработает. (break - прерывает весь цикл)
    }

    if(secondNum === null) {       //если ничего, заходим. Если есть число, идем на следующий if
        if(firstNum > num) {       //если первое число больше числа (второго) которое он берет
            secondNum = firstNum;
            firstNum = num;
        } else {
            secondNum = num;
        }
        continue;
    }

    if(firstNum > num) {
        secondNum = firstNum;
        firstNum = num;
        continue;
    }

    if(secondNum > num) {
        secondNum = num;
        continue;
    }
}

console.log(firstNum, secondNum)

//// 5 ////

const biteArr = [0, 1, 0, 1]; //5

let lambda = 1;

let result = 0;

for(let i = biteArr.length - 1; i >= 0; i--) {
    const bite = biteArr[i];
    if(bite) {
        result += lambda;
    }

    lambda *= 2;
}

console.log(result)