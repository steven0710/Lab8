
let count = 1




let previous = document.getElementById("previous")
let next = document.getElementById("next")
let picture = document.getElementById("picture")

next.onclick = function(){

    count++

    if(count == 2)
    {
        picture.src = "assets/2.jpg"
    }

    if(count == 3)
    {
        picture.src = "assets/3.jpg"
    }

    if(count == 4)
    {
        picture.src = "assets/4.jpg"
    }
    if(count == 5)
    {
        picture.src = "assets/5.jpg"
    }
    if(count == 6)
    {
        picture.src = "assets/1.jpg"
        count = 1
    }
}

previous.onclick = function(){
    count--

    if(count == 0)
    {
        picture.src = "assets/5.jpg"
        count = 5
    }

    if(count == 1)
    {
        picture.src = "assets/1.jpg"
    }
    if(count == 2)
    {
        picture.src = "assets/2.jpg"
    }

    if(count == 3)
    {
        picture.src = "assets/3.jpg"
    }

    if(count == 4)
    {
        picture.src = "assets/4.jpg"
    }
    if(count == 5)
    {
        picture.src = "assets/5.jpg"
    }
}

