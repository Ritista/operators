//rest operators and spread opreators

//spread opertors
let w=[6,7,8,9,10];
console.log(...y,...w);

//rest operators
function g(name, ...other){
    console.log(name);
    console.log(other);
}
g("hari", "pkr", "nepal");
