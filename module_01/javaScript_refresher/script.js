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

// concat 

const conName = ['rahim', 'karim', 'ibrahim'];
console.log(conName.concat(['abul', 'habul']));

// map 

const fruit = ['banana', 'apple', 'grape', 'apple'];

const mapResult = fruit.map((f)=> f === 'apple');
console.log(mapResult);

// reduce 

const number = [1, 2, 3, 4, 5];
const reduceResult = number.reduce((acc, curr)=>{
   return acc + curr;
}, 0);
console.log(reduceResult);

// for of

const textName = 'ibrahim';
for(text of textName){
    console.log(text);
}

// object method

// for in

const lang = {
    name: 'JS',
    age: 1995,
    easy: 'Yes'
}

for(property in lang){
    console.log(property);
    console.log(lang[property]);
}

const userInfo = {
    name: 'Habul',
    age: 33,
    designation: 'Web Engineer'
}

console.log(Object.keys(userInfo));
console.log(Object.values(userInfo));
console.log(Object.entries(userInfo));

// spread operator

const seasonalFruit = ['Mango', 'Jack Fruit', 'Apple'];
const seasonalFruitResult = [...seasonalFruit];
console.log(seasonalFruitResult);

// Destructuring 

const user = {
    id: 20011,
    names: 'Ibrahim',
    age: 28,
    work: {
      designation: 'Web Engineer'  
    }
}

const {names, age} = user;
console.log(names, age);
const {work:{designation}} = user;
console.log(designation);

// nullish coalescing

const language = 'PYton';
console.log(language ?? 'Js');
console.log(language || 'TypesCript');

// Asynchronous javascript

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
 }
 getData()
