

//count down



let startSeconds = 10

let time = startSeconds * 60

const countDown = document.getElementById("countdown")


function setCountDown(){

    const seconds = time % 10
    
    countDown.innerHTML =  ` ${seconds}`

    time --
}

setInterval(setCountDown, 1200)


function searchHotels(){
    
    let input = document.getElementById("search").value

    let searchInput = document.getElementsByClassName("hotels")
    
   
    for(const element of searchInput){

        if(!element.innerHTML.toLowerCase().includes(input)){

            document.body.innerHTML = `<h2>${input}</h2>`
         
           console.log(element)
        }
        else{
            
            element.style.display = "block"

        }
        
    }
    
}
