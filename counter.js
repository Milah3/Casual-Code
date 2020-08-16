// initialize variables
let i = 0;

// create counter function
counter = function() { 
    if (i < 100){
    return i++;
}
}
//set counter to increment at 1 sec intervals
interval = setInterval(counter, 1000);