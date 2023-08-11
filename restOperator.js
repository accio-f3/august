function abc(arg1, arg2, ...args) {
    console.log(args);
}

abc(1,2,3,4,5);

// these ... in argument ???
// what it is ???
// this is known as rest operator
// rest operator -> rest of the
// arguments


// '...' -> can be rest as well as spread
// if '...' are there in function argument definition (very important) then
// it is rest operator
// else everywhere in js it is spread operator

// rest operator should be the last argument

// in function call it will be like spread operator.