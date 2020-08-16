let a = true;
let b = true;
let x;
let A;
let B;

if (a) {
    A = 1;
}
else {
    A = 0;
}
if (b) {
    B = 1;
}
else {
    B = 0;
}

x = (A + B);

console.log('A is ' + A + ' and B is '+ B + ', therefore the Sum is: ' + x);
/*
setTimeout(x, 5000);
x = () {
    if (A && !B || B && !A) {

}
console.log('Carry is: ' + x);    }*/