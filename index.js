let lines3=document.getElementById("lines3")
console.log(lines3);

lines3.onclick=()=>
{
    let airbnb3=document.getElementById("airbnb3")
    console.log(airbnb3);
    let res=airbnb3.classList.toggle("true")
    if(res){
        airbnb3.style.display="block"
    }
    else{
        airbnb3.style.display="none"
    }
}


let login=document.getElementById("login")
console.log(login);

login.onclick=()=>{
    login.style.visibility="hidden"
    overlay.style.visibility="hidden"
    login.style.visibility="visible"
    overlay.style.visibility="visible"
    let bar=document.getElementById("bar")
    console.log(bar);
    let res1=bar.classList.toggle("true")
    if(res1){
        bar.style.visibility="visible"
        bar.style.transform="translateY(-600px)"
        bar.style.transition="ease all 1.5s"
        // bar.style.filter="blur"
    }
    else{
        bar.style.visibility="hidden"
        bar.style.transform="translateY(600px)"
        bar.style.transition="ease all 1.5s"
    }
}



function globe(){
    login.style.visibility="hidden"
    overlay.style.visibility="hidden"
    login.style.visibility="visible"
    overlay.style.visibility="visible"
    let z=document.getElementById("z")
    console.log(z);
    let res2=z.classList.toggle("true")
    if(res2){
        z.style.visibility="visible"
        z.style.transform="translateY(-600px)"
        z.style.transition="ease all 1.5s"

    }
    else{
        z.style.visibility="hidden"
        z.style.transform="translateY(600px)"
        z.style.transition="ease all 1.5s"
    }

}
