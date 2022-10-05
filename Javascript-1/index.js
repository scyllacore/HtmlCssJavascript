//1. 요소받기 document.getElementById("count-el").innerText = 5

/*2. 변수 
let num1 = 10
 let num2 = 20

 let num = num1+num2

 console.log(num) */


/*3.  함수
function increment(){
    console.log("good")
}

increment() */

/*4. 2,3 응용
let lap1=10
let lap2=20
let lap3=30

function logLapTime()
{
    let totalTime = lap1+lap2+lap3
    console.log(totalTime)
}

//logLapTime()

//console.log(totalTime) */

/*5. 버튼 클릭시 숫자 증가
 let count =0
let countEl = document.getElementById("count-el") // count Element

function increment()
{
  count = count +1
  countEl.innerText = count
}
 */


/* 6. 문자열 자료형 : 숫자가 섞이면 숫자는 문자열로 자동 타입 변환되서 처리된다.
 let username = "MyungSik"
let message = "suddenAttack"

let messageToUser = username + " : " + message

console.log(messageToUser) */



/* 7. 문자열 웹페이지 출력 , 복합대입연산자
 let welcomeEl = document.getElementById("welcome-el")
let username = "Myungsik"
let greeting  = " good life"

welcomeEl.innerText = username+greeting
welcomeEl.innerText +=  " 오우오우" */

let countEl = document.getElementById("count-el")
let preEntries = document.getElementById("pre-entries")
let count = 0

function increment()
{
  count +=1
  countEl.textContent=count // (count)가 아니라 = count 이다.
}

function save(){
  preEntries.textContent +=  count + " - " // innerText -> textContent 로 수정
  countEl.textContent= 0
  count = 0
}