



let a = document.getElementById("first")
let b = document.getElementById("second")

let c = document.getElementById("click")

c.onclick = function(){

    if(a.value == b.value)
    {
        console.log("This matches")
    }
    else
    {
        console.log("This does not match")
    }
    if(a.value.length ==0)
    {
        console.log(" 1st password is blank")
    }
    else if(a.value.length < 8)
    {
        console.log(" 1st password is less than 8 letters")
    }

    if(b.value.length ==0)
    {
        console.log(" 2nd password is blank")
    }
    else if(b.value.length < 8)
    {
        console.log(" 2nd password is less than 8 letters")
    }

}