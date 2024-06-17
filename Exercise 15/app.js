var guestList = ["Aliya", "Sara", "Murk"];
var absent_guest = "Aliya";
var new_guest = "Zarnaish";
guestList[0] = new_guest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Miss \n", guestList[i], "\n It is our pleasure to invite you to dinner\n Thank you.");
}
