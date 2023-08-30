// debouncing -> it limits the execution of function call
// and it waits for a certain amount of time before running 
// that function call again

const input1= document.getElementById('input-1');
const input2= document.getElementById('input-2');


function searchFn(){
    console.log(input1.value);
}

function searchFn2(){
    console.log(input2.value);
}

// debounceFn -> it takes a fn and convert it into
// optimised fn

const debounceFn = (callback, delay) => {
    let timerId;
    return function(...args){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

const optimisedSearchFn2 = debounceFn(searchFn2, 300);

// timerId -> 'a'
// timerId -> 'ap'