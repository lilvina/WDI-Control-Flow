var user = prompt("How many times do you want to hear it?");
console.log(user);
for(counter = user; counter >= 1; counter--){
    if(counter === 1){
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+ " of beer on the wall.");
    if(counter < 6){
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if(counter === 1){
        console.log("No bottles of beer on the wall.");
    }
}