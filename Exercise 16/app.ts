
let guestList : string[] = ["Aliya","Sara","Murk"];
let dontCome = guestList[0];
console.log(dontCome,"is not coming")

guestList.splice(0, 1, "Zarnaish")
console.log("Good News ! we have found a bigger table for dinner.")

guestList.unshift("Alishba");
guestList.push("Zara")
let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Maheen");
console.log("Updated List of our Guests:");
guestList.forEach(oneguest =>  console.log(`Salam ${oneguest} , would you like to dinner with me?`)
    
);

