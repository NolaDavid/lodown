'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Returns the value given
 * 
 * @param{*} value: The value returned
 * @returns{*}: The value given unchanged;
 */
 function identity(value){
     return value;
 }
 module.exports.identity = identity;
 
 /**
  * typeOf: Designed to test the type of a given input
  * 
  * 
  * @param{*} arg1: The input to test the type of on
  * @returns{*}: The type of value of the given input
  */
  function typeOf (arg1) {
    if(Array.isArray(arg1)) return "array";
    if(arg1 === null) return "null";
    else return typeof arg1;
}
module.exports.typeOF = typeOf;


/**
 * first: Given an array and a number, first is designed to go through an array and return the elements up to that number
 * 
 * @param{Array} arr: the list to go through;
 * @param{Number} num: this indicates how far down the list we want to extract;
 * 
 * @return{array}: returns a new array with all the elements that are within the range of the beginning of the list and the number given;
 */
 function first(arr,num){
    if(!Array.isArray(arr) || num < 0){
        return [];
    } else if( num === null || isNaN(num)){
        return arr[0];
    } else if(num > arr.length){
        return arr
    } else {
        return arr.slice(0,num);
    }
    
}
module.exports.first = first;

/**
 * last: given an array and a number, last's objective is to return a new array containing elements from the end of the original array to the number specified
 * 
 * @param{Array} arr: The list to iterate through
 * @param{Number} num: The number which determines how far back from the end to stop at.
 * 
 *@returns{arra}: Returns a new array starting from the back of the given array, with the number given determining how far back to go.
 */
 function last(arr,num){
    if(!Array.isArray(arr) ||num < 0 ){
        return []
    } else if(num === null || isNaN(num)){
        return arr[arr.length - 1];
    } else if(num > arr.length){
        return arr;
    }
    else {
        return arr.slice(num -1)
    }
    
}
module.exports.last = last;


/**
 * indexOf: Designed to search through an array and return the index of that value if that element exists or -1 if it does not exit;
 * 
 * @param{Array}arr: The list to iterate through
 * @param{*}value: The given value to check if it exists in the array given
 * 
 *@returns{Number}: Returns the index of the test value or -1 if it doesnt exist
 */ 
 function indexOf(arr,value){
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i
        }
    }
    return -1
}
module.exports.indexOf = indexOf;
/**
 * Contains: Designed to return if a given value exists in an array
 * 
 * @param{Array} arr: The list to search through.
 * @param{*} value: Value to test if it is within thee given array;
 * 
 * @returns{Boolean}: If the value is within the array returns true if not returns false;
 */ 
 function contains(arr,value){
return arr.indexOf(value) > 0 ? true: false;
}
module.exports.contains = contains;
/**
 * each: Designed to test what kind collection is given and then perform the given function on that particular collection
 * 
 * @param{Array or Object}collection: The collection in which to perform the given function on.
 * @param{Function}func: to be performed on the given collection
 * 
 * @returns{Array or Object}: Returns a modified version of the given collection
 */
  function each(collection,func){
if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
        func(collection[i], i, collection)
    }
} else if(typeof collection === "object"){
    for(let keys in collection){
        func(collection[keys], keys, collection )
    }
}

}
module.exports.each = each;

/**
 * Unique: Designed to filter an array of duplicates and returns a new array of unique items
 * 
 * @param{Array}arr: List given to iterate through
 * 
 * @returns{Array}: Returns a new array with all unique values;
 */
 function unique(arr){
   let unique =  function (value, index, arr) {
  return arr.indexOf(value) === index
}
let newArr = arr.filter(unique)
return newArr;
}
module.exports.unique = unique

/**
 * Filter: Designed to take an array and a test function, and return a new array of the parts of the array that evaluate to true in the given test
 * 
 * @param{array}arr: List for the given function to go through;
 * @param{function}func: Test implemented on the given array;
 * 
 * @returns{array}: Returns a new array of the elements in the original array that evaluated to true;
 */
 function filter(arr, func){
let newArray = [];
for(let i = 0; i < arr.length; i++){
 if(func(arr[i], i, arr) === true){
  newArray.push(arr[i]);
 } }
return newArray;
}
module.exports.filter = filter;

/**
 * Reject: Desgined to create a new array with the results of a test returning false
 * 
 *@param{Array}arr: list to be searched through 
 *@param{Function}func: Given to test elements in array and return the falsy values;
 * 
 *@returns{Array}: returns a new array containing the falsy elements;
 */
 function reject (arr, func){
let newArray = [];
for(let i = 0; i < arr.length; i++){
 if(func(arr[i], i, arr) === false){
  newArray.push(arr[i]);
 } }
return newArray;
}
module.exports.reject = reject;

/**
 * Partition: The primary object is to go through a list and create a new array with two sub arrays one array containing all the values that
 * return truthy and then another sub array containing all the falsy values;
 * 
 *@param{Array}arr: list to be searched through;
 *@param{Function}func: Function to be used to test each value 
 * 
 *@returns{Array}: returns a new array with two sub arrays within.
 */
 function partition (arr,func){
    let array = [];
    let arrayTrue = [];
    let arrayFalse = []
    for(let i = 0; i < arr.length; i++){
     if(func(arr[i], [i], arr) === true){
      arrayTrue.push(arr[i]);
     }else {
      arrayFalse.push(arr[i]);
     }
     
    }
    array.push(arrayTrue);
    array.push(arrayFalse);
    return array;
}
module.exports.partition = partition;

/**
 * Map: Designed to loop over an array and perform a given function on all elements of that array;
 * 
 * @param{Array}collection: Desired list to have an action performed on
 * @params{Function}func: Callback function to perform a test on the given collection
 * 
 * @returns{Array}: Newly created array with the truthy elements of the call back function
 */ 
 function map(collection,func){
 let newArray = [];
 for(let i = 0; i < collection.length; i++){
  if(func(collection[i],[i],collection) === true){
   newArray.push(collection[i]);
  };
 }for (let key in collection ){
  newArray.push(func(collection[key],[key], collection));
 }return newArray;
}
module.exports.map = map;

/**
 * Pluck: Designed to create a new array of the value of a given property in each element;
 * 
 * @param{Array, Object}collection: collection to search through for a given key
 * *param{String}key: The key to be extracted at each element in the array;
 * 
 * @returns{Array}: Returns the value of each key in a new array.
 */
  function pluck (collection, key) {
    return collection.map(collection, function(obj) {
        return obj[key];
    });
};
module.exports.pluck = pluck;

/**
 * Every: Designed to go through a collection if each element results to truthy return true,
 * if even one element is negative return false;
 * 
 * @param{Object or Array}collection: List or object to be searched through and tested by function
 * @param{Function}func: action performed on each element in an array;
 * 
 * @returns{Boolean}: If all elements in the array result in truthy, true is returns. If atleast one element fails, function returns falsy
 *
 */
 function every(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (func === undefined){
                if (!collection[i]){
                    return false;
                }
            } else if (func(collection[i], i, collection) !== true){
                return false;
            }
        }
    } else if (collection instanceof Object){
        for (var key in collection){
            if (func === undefined){
                if (!collection[key]){
                    return false;
                }
            } else if (func(collection[key], key, collection) !== true){;
                return false;
            }
        }
    } return true;
}

module.exports.every = every;

/**
 * Some: Desgined to call a function on a collection and return a boolean. If one element results in truuthy the function returns true otherwise false.
 * 
 * @param{cObject or Array}collection: List or object to be searched through and each element will be tested 
 * @param{Function}func: The action to be performed on each element in the collection.
 * 
 * @returns{Boolean}: If at least one element in the collection is truthy it returns true otherwise it returns false;
 */ 
 
function some(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (func === undefined){
                if (collection[i]){
                    return true;
                }
            } else if (func(collection[i], i, collection)){
                return true;
            }
        }
    } else if (collection instanceof Object){
        for (var key in collection){
            if (func === undefined){
                if (collection[key]){
                    return true;
                }
            } else if (func(collection[key], key, collection) === true){;
                return true;
            }
        }
    } return false;
}

module.exports.some = some;

/**
 * Reduce:  Go through a collection and starting with a number provided or begining of collection if no number provided and reduce the number of elements in the array to a single value
 * 
 * @param{Array}arr: the list to be iterated through with a function being called on each element.
 * @param{Function}func: the function to used on determining how to consolidate the values of the collection.
 * @param{Number}seed: optional but a given starting point to collect each value of the remaining values;Otherwise the starting point is the beginning of the collection;
 * 
 *@returns{Array}: Reduce will return a given array with only one element.
 * 
 */
function reduce (arr, func, seed) {
    let accumulator = seed || seed === undefined;
    for(let i = 0; i < arr.length; i++){
        accumulator = func(accumulator,arr[i],i)
    }
    return accumulator;
}
module.exports.reduce = reduce;

/**
 * Extend: Designed to combind object properties into one object
 * 
 *@param{Object('s)')}obj: Object to accumulate all other object property values
 * 
 *@returns{Object}: Returns an updated object with the key values of the other objects passed into the callback function
 */
 function extend(obj) {
    each(arguments, function(newObj) {
        for (var key in newObj)
            obj[key] = newObj[key];
    });
    return obj;
};
module.exports.extend = extend;