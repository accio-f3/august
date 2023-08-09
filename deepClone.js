// obj is arg for deepClone
const deepClone = (obj) => {
    const type = typeof obj;
    // thiw will handle every case be it null
    // undefined or not obj
    if(type!=='object' || !obj) return obj;

    // logic for arrays
    if(Array.isArray(obj)) {
        return obj.map(item=>deepClone(item));
    }
    // logic for objects
    // this condition is working only for Objects not for arrays
    let arrObj=Object.entries(obj);
    // (item) -> ([key,value])
    let deepCloneArrObj= arrObj.map(([key,value])=>[key,deepClone(value)]);
    return Object.fromEntries(deepCloneArrObj);
};

let obj1={
    a:10,
    b:{
        c:100,
    }
}

[{a:10},{b:10}];

// let obj2=deepClone(obj1);
// obj1.b.c=200;
// console.log(obj1===obj2);
// console.log(obj1);
// console.log(obj2);

// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };

//   arr = [['a','somestring'],['b','42']];

// obj -> array -> deepClone(value) -> array -> obj