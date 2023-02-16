const email = "test@gmail.com"
const pass = "123"
function set_input_value(id)
{
    let x = document.getElementById(id).value
    return x
}

document.getElementById("user-btn").addEventListener("click",function(){
    const emailInput = set_input_value("userEmail")
    const passInput = set_input_value("userPass")

    if(emailInput === "test@gmail.com" && passInput === pass)
    {
        window.location.href = 'bank.html'
    }
    else
    {
        alert("Invalid Email Address!!!")
    }
})

