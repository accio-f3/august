// intersectionWith(arrays,compartor);

var arr1 = [{ a: 1, b: 2 }, { a: 2, b: 1 }];
var arr2 = [{ a: 1, b: 1 }, { a: 1, b: 2 }];
var arr3 = [{ a: 2, b: 1 }, { a: 1, b: 2 }];

// arr2 will be compared with arr1
// arr3 will be compared with arr1

// every will give me true if all the elements passes the condition && AND
// some will give me true if any element passes the condition || OR


// some on arr2 is giving true for arr2 when startingArrayItem is { a: 1, b: 2 }
// some on arr3 is giving true for arr3 when startingArrayItem is { a: 1, b: 2 }

const otherArrays = [[{ a: 1, b: 1 }, { a: 1, b: 2 }], [{ a: 1, b: 1 }, { a: 1, b: 2 }]];
// what ever this functio return
function helper(otherArrays, startingArrayItem, comp) {
    // every element that is (array) otherArrays should follow this condition
    return otherArrays.every(otherArray => otherArray.some(otherArrayItem => comp(startingArrayItem, otherArrayItem)));
}

function intersectionWith(comp, ...restArrays) {
    if(!restArrays.length) return [];
    const startingArray = restArrays[0]; // arr1
    const otherArrays = restArrays.slice(1); // [arr2,arr3]
    // this helper function will decide the fate of elements inside startingArray
    const result = startingArray.filter(startingArrayItem => helper(otherArrays, startingArrayItem, comp));
    return result;
}
// filter, some & every

// function intersectionWithProperArgs(...args) {
//     let comp = args.pop();
//     let restArrays=args;
//     if(!restArrays.length) return [];
//     const startingArray = restArrays[0]; // arr1
//     const otherArrays = restArrays.slice(1); // [arr2,arr3]
//     // this helper function will decide the fate of elements inside startingArray
//     const result = startingArray.filter(startingArrayItem => helper(otherArrays, startingArrayItem, comp));
//     return result;
// }

const res = intersectionWith((item1, item2) => item1.a === item2.a && item1.b === item2.b, arr1, arr2, arr3);

console.log(res);



