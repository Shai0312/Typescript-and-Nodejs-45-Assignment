function make_shirt(size:string = "Large" ,printMessage:string = "I love Typescript"){
console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt.`)
}
make_shirt();
//Calling a function now with medium size and default message
make_shirt("Medium")
//Calling a function now with small size and different print message
make_shirt("Small","I love Javascript")