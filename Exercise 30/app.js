var userNames = ["Ali", "Hammad", "Admin", "Zain", "Mueez"];
//Using ForEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, " ,would you like to see a status report?"));
    }
    else {
        console.log("Hello".concat(oneUser, ",thank you for logging in again."));
    }
});
