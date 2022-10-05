let myLeads = []
//let inputBtn = document.getElementById("input-btn") reassigned 가능
const inputBtn = document.getElementById("input-btn") // reassigned 불가
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")


/*
const testContainer = document.getElementById("test-container")

testContainer.innerHTML = "<button onclick='test()'>Test!</buy>"

function test()
{
    testContainer.innerHTML += "<p>Thank you for buying</p>"
}
*/


/*inputBtn.addEventListener("click",function(){
    console.log("짜장!")
})*/

inputBtn.addEventListener("click", renderSite)
deleteBtn.addEventListener("dblclick", clearSite)

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
/*console.log(leadsFromLocalStorage)
localStorage.clear()*/

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}



tabBtn.addEventListener("click", saveTab)

function saveTab() {
    // chrome.tabs.query({ active: true, currentWindow: true },addTab(tabs))
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })

}

function addTab(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
}

function clearSite() {
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ""
    //renderLeads()
}

function renderSite() {
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads(myLeads)
    /* 내가 만든 것
    const len = myLeads.length
    ulEl.innerHTML += "<li>"+ myLeads[len-1] + "</li>"
    */
    console.log(localStorage.getItem("myLeads"))
}

function renderLeads(lead) {

    let listItems = ""

    for (let i = 0; i < lead.length; i++) {
        //ulEl.textContent += "<li>"+ myLeads[i] + "</li>"
        //ulEl.innerHTML += "<li>"+ myLeads[i] + "</li>"

        /*const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)*/

        //listItems += "<li>"+ myLeads[i] + "</li>"
        //listItems += "<li><a target='_blank' href='"+myLeads[i]+"'> "+ myLeads[i] + " </a></li>" // href open in new tab

        listItems += `
        <li>
            <a target='_blank' href='${lead[i]}'> ${lead[i]} </a>
        </li>
        `



    }
    ulEl.innerHTML = listItems

}

const hihi = "명식"
const randomStr = `야호 
${hihi} 
짜잔~ `

console.log(randomStr)


//localStorage.setItem("MyLeads","www.naver.com")
//console.log(localStorage.getItem("MyLeads"))
//localStorage.clear() 

/*
let tmp = `["www.naver.com"] `
tmp = JSON.parse(tmp)
tmp.push("www.google.com")
console.log(tmp)
*/

/*
let tmp = ["www.naver.com"]
tmp = JSON.stringify(tmp)
console.log(tmp)
*/

/*
let test = []
test.push(10)
test = JSON.stringify(test)
console.log(typeof test)
test = JSON.parse(test)
console.log(test[0]+11)
*/