let complaints=[]

function login(){

document.getElementById("loginPage").style.display="none"
document.getElementById("mainSite").style.display="block"

showPage("home")

}

function showPage(page){

let pages=document.querySelectorAll(".page")

pages.forEach(p=>p.style.display="none")

document.getElementById(page).style.display="block"

}

function openComplaint(category){

showPage("complaint")

document.getElementById("category").value=category

}

function submitComplaint(){

let category=document.getElementById("category").value
let room=document.getElementById("room").value
let desc=document.getElementById("desc").value

let id=complaints.length+1

complaints.push({
id:id,
category:category,
room:room,
status:"Pending"
})

updateTable()

alert("Complaint Submitted Successfully!")

document.getElementById("room").value=""
document.getElementById("desc").value=""

showPage("status")

}

function updateTable(){

let table=document.getElementById("statusTable")

table.innerHTML=`
<tr>
<th>ID</th>
<th>Category</th>
<th>Room</th>
<th>Status</th>
</tr>
`

complaints.forEach(c=>{

table.innerHTML+=`
<tr>
<td>${c.id}</td>
<td>${c.category}</td>
<td>${c.room}</td>
<td>${c.status}</td>
</tr>
`

})

}
