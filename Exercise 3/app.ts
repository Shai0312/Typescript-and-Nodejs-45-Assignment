let personName : string = "Zain Ali";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, c=> c.toUpperCase()));