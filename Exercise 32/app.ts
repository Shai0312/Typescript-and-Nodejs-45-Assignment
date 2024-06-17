//Array of Current Users
let currentUsers: string[] = ["Usman","Ali","Areeba","Zain","Osama"];
//Array of current users
let newUsers :string[] = ["Osama","Zain","Ali","Hamza","Sara"];

for (let new_users of newUsers) {
    const lowercase_new_users = new_users.toLowerCase();

if(currentUsers.map(user => user.toLowerCase()).includes(lowercase_new_users)){
console.log(`the username ${new_users} is not availaable`);

}else{
    console.log(`the username ${new_users} is  available`);
}
}
