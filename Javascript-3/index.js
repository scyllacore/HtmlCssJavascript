
function addSum(){
    let tmp1=document.getElementById("Num1").value
    let tmp2=document.getElementById("Num2").value
    let sumText = document.getElementById("Sum")
    let num1=parseInt(tmp1)
    let num2=parseInt(tmp2)

    let sum = num1+num2
    console.log(sum)
    sumText.textContent  = "sum = " + sum
}


function subSum(){
    let tmp1=document.getElementById("Num1").value
    let tmp2=document.getElementById("Num2").value
    let sumText = document.getElementById("Sum")
    let num1=parseInt(tmp1)
    let num2=parseInt(tmp2)

    let sum = num1-num2
    console.log(sum)
    sumText.textContent  = "sum = " + sum
}


function mulSum(){
    let tmp1=document.getElementById("Num1").value
    let tmp2=document.getElementById("Num2").value
    let sumText = document.getElementById("Sum")
    let num1=parseInt(tmp1)
    let num2=parseInt(tmp2)

    let sum = num1*num2
    console.log(sum)
    sumText.textContent  = "sum = " + sum
}


function divSum(){
    let tmp1=document.getElementById("Num1").value
    let tmp2=document.getElementById("Num2").value
    let sumText = document.getElementById("Sum")
    let num1=parseInt(tmp1)
    let num2=parseInt(tmp2)

    let sum = num1/num2
    console.log(sum)
    sumText.textContent  = "sum = " + sum
}

// 전역 변수 적용이 안됨. 원인 찾아 낼 것