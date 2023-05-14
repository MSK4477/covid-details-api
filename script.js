let h1=document.createElement("h1")
h1.innerHTML="covid details"
h1.style.fontSize="35px"
var div=document.createElement("div")
div.style.textAlign="center"
div.style.margin="50px"
var input= document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("id","country")

input.setAttribute("placeholder","Enter Country Name")
input.style.width="40%"
input.style.height="50px"
input.style.borderRadius="10px"
input.style.border="1px solid black"
var br= document.createElement("br")
var button= document.createElement("button")
button.setAttribute("type","text")
button.classList.add("btn","btn-primary")
button.style.width="10%"
button.style.height="40px"
button.style.margin="20px"
button.innerHTML="Search"
div.append(h1,input,br,button)
document.body.append(div)
 button.addEventListener("click",bar)
 async function bar(){
  
 var res=document.getElementById("country").value
console.log(res)

 var url=`https://api.covid19api.com/dayone/country/${res}`
 var res1= await fetch(url)
 var res2 =  await res1.json()
 console.log(res2)
 var index=res2.length-1
 final=res2[index].Active;
 Confirmed=res2[index].Confirmed
 Recovered =res2[index].Recovered
 Deaths=res2[index].Deaths

 var div1=document.createElement("div")
 div1.style.textAlign="center"
 div1.style.color="red"
 div1.style.position = "relative";
 div1.style.bottom = "40px";
  div1.innerHTML=
 `Active: ${final}<br>
 Confirmed: ${Confirmed}<br>
  Deaths: ${Deaths}<br>
  Recovered: ${Recovered}`
document.body.append(div1)
 }

