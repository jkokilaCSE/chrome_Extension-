let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")

//stringify() takes a JavaScript object and then transforms it into a JSON string. JSON. parse() takes a JSON string and then transforms it into a JavaScript object.

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
   render(myLeads)
}
//need to clear localstorage,DOM,and the myLeads by the user double clicked the button
deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads=[]
  render(myLeads)
})
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)//pushing values that are entered into the input-el to the myLeads array
    
    // console.log(myLeads)   
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)          
    console.log(localStorage.getItem("myLeads"))        
})

function render(leads){
    let listItems=""
    for(let i=0;i<leads.length;i++){
        //  listItems+="<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li> " instead of this wecan do like below
      //by using template strings/literals
     listItems+=
     ` <li>
        <a target='_blank' href="${leads[i]}"> 
               ${leads[i]}
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

