function show_magicians(magicians:string[]) {
    magicians.forEach(name => console.log(name))
    }


function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)

}
let magician_names = ["Harry poter","Usman","Hamza"];

let copy_magician_names = magician_names.slice()

let  copy_great_magicians = make_great(copy_magician_names);

show_magicians(magician_names);

show_magicians(copy_great_magicians);

