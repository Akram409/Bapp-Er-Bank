
function setInnerValue(id)
{
    let x = document.getElementById(id).value
    return x
}

function setInnerText(id)
{
    let x = document.getElementById(id).innerText
    return x
}
function setvalue(id,value)
{
    document.getElementById(id).innerText = value
}
function space(id)
{
    document.getElementById(id).value = ""
}

function totalbaldep(amount)
{
    let x = document.getElementById("baltk").innerText
    let y = parseInt(x) + parseInt(amount)
    setvalue("baltk",parseInt(y))
}
function totalbalwd(amount)
{
    let x = document.getElementById("baltk").innerText
    if(parseInt(amount) > parseInt(x))
    {
        alert("insufficient balance!!")
    }
    else
    {
        let y = parseInt(x) - parseInt(amount)
    setvalue("baltk",y)
    }
}



document.getElementById("depositebtn").addEventListener("click",function(){
    const depinput = setInnerValue("depamount")
    const depamount = setInnerText("deptk")

    if(isNaN(depinput))
    {
        alert("Please Input Number!!")
    }
    else
    {
        let totalDep = parseInt(depinput) + parseInt(depamount)
        console.log(totalDep)
        setvalue("deptk",totalDep)
        totalbaldep(depinput)
        space("depamount")
    }

})


document.getElementById("withdrawbtn").addEventListener("click",function(){
    const wdinput = setInnerValue("wdamount")
    const wdamount = setInnerText("wdtk")

    if(isNaN(wdinput))
    {
        alert("Please Input Number!!")
    }
    else
    {
        let totalwd = parseInt(wdinput) + parseInt(wdamount)
        setvalue("wdtk",totalwd)
        totalbalwd(wdinput)
        space("wdamount")
    } 
})

