//Exercise 1

//function capital_letters(str) 
// { 
//    str = str.split(" ");

//    for (var i = 0, x = str.length; i < x; i++) {
//        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//    }

//    return str.join(" ");
//}
//console.log(capital_letters("the dog runs fast.")); 

//----------------------------------------------------------------

// Exercise 3

function move_letters(str) {
    if (str.length > 1) {
        return str.slice(-3) + str.slice(0, -3);
    }
    return str;
}

console.log(move_letters("borderlands"));
console.log(move_letters("ghosts"));
console.log(move_letters("sky")); 