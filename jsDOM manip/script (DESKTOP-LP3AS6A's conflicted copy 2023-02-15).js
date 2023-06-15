const body = document.querySelector('body');

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color="blue";

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style["color"] = 'blue';

const div = document.createElement('div');
div.setAttribute('style','border:1px solid black; background-color:pink;');
const h1 = document.createElement('h1');
h1.textContent="I'm in a div";
const newP = document.createElement('p');
div.appendChild(h1);
div.appendChild(newP);

body.appendChild(p);
body.appendChild(h3);
body.appendChild(div);

//Events

const btn = document.querySelector('#btn')
btn.onclick = () =>alert("Hi");

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', ()=>{
 alert('Hello Everyone');
})

//U can alternatively use functions like so:

let alertFunc = ()=>{
    alert('Hi Everyone');
}

btn.onclick = alertFunc;

btn2.addEventListener('click', alertFunc);

//With Event Parameter

btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function(e){
    e.target.style["background"]='blue';
    console.log(e);
})

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        alert(button.classList)
    })
})

const notes=['do', 're', 'mi'];
notes.forEach((note)=>console.log(note));
// or notes.forEach(console.log)


//Callbacks
//Ex.1
let myMap = (array,callback)=>{
    const newArray=[];
    for(i=0;i<array.length;i++){
        callbackResult = callback(array[i]);
        newArray.push(callbackResult);
    }
    console.log(newArray);
    
}

myMap([1,2,3],(item) =>item+2)

//Ex.2
function printPlus2(array,callback){
    for(i=0;i<array.length;i++){
        callback(array[i]);
    }
    
}

printPlus2([1,2,3], (item)=>console.log(item+2));
