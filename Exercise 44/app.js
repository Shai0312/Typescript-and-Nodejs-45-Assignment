function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich");
}
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("bread", "butter", "mayo", "cheese", "tomato", "lettuce");
