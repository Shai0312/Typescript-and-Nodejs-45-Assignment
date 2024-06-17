var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the location in a array.make sure the array is not in alphabetical order.
var places = ["Pakistan", "Australia", "NewZealand", "SaudiArabia", "China"];
//print array in original order.
console.log("original order:", places);
//print array in alphabetical order.
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
//Show that array is still in its original order.
console.log("original order:", places);
//print array in reverse alphabetical order.
console.log("Reverse Alphabetical order:", __spreadArray([], places, true).sort().reverse());
//print array is still in its original order.
console.log("original order:", places);
//Reverse the order of list.
console.log("Reverse order:", places.reverse());
//Reverse the order of list again back to its original order
console.log(" original order:", places.reverse());
//sort your array so its stored in alphabetical order.print the array to show that its order.
console.log("Alphabetical order:", places.sort());
//sort to change your array so its stored in reverse alphabetical order.
console.log("Reverse Alphabetical order:", places.sort().reverse());
