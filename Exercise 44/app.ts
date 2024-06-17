function makeSandwich(...items: string[]){
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Now Enjoy Sandwich")
}

makeSandwich("chicken","cheese","mayo","egg");

makeSandwich("bread","butter");

makeSandwich("bread","butter","mayo","cheese","tomato","lettuce");