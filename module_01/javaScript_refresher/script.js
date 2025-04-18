var lan = 'Bangla';

function myLang(topic) {
    var lan = topic;
    console.log(`I Love ${topic}`);
}

myLang('JavaScript');
console.log(lan);

// regular function 

function text(){
    console.log('hello');
}
text();


// function expression

const hello = function (){
    console.log('Javascript');
};
hello();

// named function expression

const name = function hello(){
    console.log('HTML');
}
name();

// array function

const num = (a, b)=> a + b;
console.log(num(5, 10));

const newObj = () => {
    return {
        a: 6,
        b: 7
    }
}
console.log(newObj());

// anonymous function

function anonymousFun (){
    return function (){
        console.log('Anonymous Function');
    }
}

// event listener

const button = document.querySelector('#click');

button.addEventListener('click', ()=>{
    alert('Clicked');
})


// array method

const fruits = ['apple', 'mango', 'banana', 'orange'];

// find method
const result = fruits.find((f)=> f === 'banana');
console.log(result);

const resultIndex = fruits.findIndex((f)=> f === 'orange');
console.log(resultIndex);

// filter method
const fruitFilter = fruits.filter((f)=> f === 'apple' || f === 'orange');
console.log(fruitFilter);

// slice method

const fruitSlice = fruits.slice(1, 3);
console.log(fruitSlice);

// splice method

// const fruitSplice = fruits.splice(1, 2, 'potato', 'tomato', 'grape');
// console.log(fruitSplice);
// console.log(fruits);
