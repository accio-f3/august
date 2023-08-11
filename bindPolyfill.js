delete Function.prototype.bind;

Function.prototype.bind = function(obj,...fixedArgs){
    let oldFn=this;
    const newFunction = function(...nonFixedArgs){
        // 1. I have my oldFn in fn
        // 2. I have my obj
        // 3. all the arguments -> (...fixedArgs,...nonFixedArgs);
        // 4. newFunction should execute oldFunction defi but with context
        //    of provided object.
        // fn.call(object,args);
        // return oldFn.call(obj, ...fixedArgs, ...nonFixedArgs);
        obj.tempFunction = oldFn;
        const result = obj.tempFunction(...fixedArgs, ...nonFixedArgs);
        delete obj.tempFunction;
        return result;
        // what ever the above line return
    }
    return newFunction;
}

// 

// Doubt ????

// 1. Storing function defi in oldFn
// 2. passing oldFn to my obj.tempFunction
// 3. saving output of obj.tempFunction(with args);
// 4. deleting obj.tempFunction
// 5. returning the result.

let obj = {
    nam: 'pc',
    age: 23,
}

function intro(city){
    return `Hi I am ${this.nam} and my age is ${this.age} and my city is ${city}`;
}

// newIntro('goa') -> `Hi I am pc and my age is 23 and my city is goa`
// newIntro('jaipur') -> `Hi I am pc and my age is 23 and my city is jaipur`


const newIntro2 = intro.bind(obj,'delhi') // pass obj,fixed arguments
console.log(newIntro2());
console.log(newIntro2());

// console.log(newIntro('goa')); // 'goa' nonFixed arguments // Obj

// console.log(newIntro('random city'));

// console.log(newIntro('random cit 2'));

console.log(obj);



// function abc(arg1,arg2,arg3,arg4){
//     console.log(arg1,arg2,arg3,arg4);
// }

// // fixedArguments -> 1

// // newAbc will accept only _ arguments?

// // newAbc(nonFixedArguments) -> abc(...fixedArguments,...nonFixedArguments)

// function newAbc(...nonFixedArguments){
//     return abc(...nonFixedArguments);
// }