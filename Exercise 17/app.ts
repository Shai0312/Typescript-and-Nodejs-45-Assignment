let guestList : string[] = ["Murk","Alishba","Maheen","Zarnaish","Zara","Alina"];
console.log("Sorry we can't arrange a bigger dinner table so only two guest are invited.")

while (guestList.length > 2) {
    
    let removedGuest = guestList.pop();
    console.log(removedGuest, "\n sorry you are not invited to dinner ");
}

for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Miss\n" , guestList[i] , "\n You are still invited to dinner \n Thank you")
}
guestList.splice(0,2);
console.log(guestList)