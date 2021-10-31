// const square = (x) => {
//   return x * x
// } 
// console.log(square(3))


// const square = (x) => x*x
// console.log(square(2.4))


const event = {
    name : 'Birthday party',
    GuestList : ['Aayu','Bhaiyu','Dad'] ,
    printGuestList(){                              
    // arrow functions arent well suited for 'this' keyword 
        console.log('Guest List For ' +this.name)

    // function have their own binding 
        this.GuestList.forEach((guest) =>{
            console.log(guest + " is attending "+this.name)
        })
    }
}

event.printGuestList()