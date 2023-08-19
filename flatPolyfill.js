const arr1 = [
    100, // this is not -> else
    [1,2], //-> this is array -> depth 0 -> [1,2]
    [3,4],
    99,
    [5,6,[7,[100,2],8],9],
    [10,11,12]
  ];

//   [100,1,2,3,4,99,5,6,[7,8],9,10,11,12]

  const arr2 = [
    100,
    [1,2],
    [3,4],
    99,
    [5,6,7,8,9],
    [10,11,12]
  ];
// iterate over array, if it's number push in the new array
// else just spread the array

const flattendArr = arr1.flat(1);
console.log(flattendArr);
// reducing the depth of nested array
function customFlat(array, depth = 1) {
    let result = [];
    array.forEach(element=>{
        if(Array.isArray(element) && depth > 0){
            const flattendElement = customFlat(element, depth - 1);
            result.push(...flattendElement);
        }
        else{
            result.push(element);
        }
    })
    return result;
}

console.log(customFlat(arr1,3));