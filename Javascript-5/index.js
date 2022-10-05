/*1. 구조체 

let person = {
    name: "Myugnsik",
    age: 26,
    country: "Korea"
}


function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}


logData()*/

/* 2. 반복문
let alpha = ["A","B","C","D","E"]


for(let i=0; i<alpha.length; i++)
{
    console.log(alpha[i])
}
*/

/* 3. pop,push,shift,unshift
let alpha = ["A","B","C","D","E"]

alpha.pop()
alpha.push("F")
alpha.shift()
alpha.unshift("G")

console.log(alpha)*/

/*4 . if문
let num = 5
let str = "good"

if(num===5 && str === "good")
{
    console.log("true")
}
*/

/* 5. random Function
let num = [2,4,3]


function getNum(){
    let randomIdx =Math.floor(Math.random()*3)
    return num[randomIdx]
}

console.log(getNum())
*/

/* 6.sorting fruit 
let appleEl = document.getElementById("apple-el")
let orangeEl = document.getElementById("orange-el")


let fruit = ["🍎", "🍊", "🍎", "🍊", "🍎"]

for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
        appleEl.textContent += "🍎"
    }
    else if (fruit[i] === "🍊") {
        orangeEl.textContent += "🍊"
    }
}*/