let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
//stringify() takes a JavaScript object and then transforms it into a JSON string. JSON. parse() takes a JSON string and then transforms it into a JavaScript object.
localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)//pushing values that are entered into the input-el to the myLeads array
    
    // console.log(myLeads)   
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()          
    console.log(localStorage.getItem("myLeads"))        
})

function renderLeads(){
    let listItems=""
    for(let i=0;i<myLeads.length;i++){
        //  listItems+="<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li> " instead of this wecan do like below
      //by using template strings/literals
     listItems+=
     ` <li>
        <a target='_blank' href="${myLeads[i]}"> 
               ${myLeads[i]}
        </a>
      </li>`
        

    }
   /*  ulEl.innerHTML+="<li>"+myLeads[i]+"</li> "
   instead we can do this for the above line
    const li =document.createElement("li")
    li.textContent=myLeads[i]
    ulEl.append(li) */

    ulEl.innerHTML=listItems
}

