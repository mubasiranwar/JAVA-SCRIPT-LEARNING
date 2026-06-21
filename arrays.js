// //Array--->In this file i will learn about arrays in javascript

// let arr=[1,2,3,4,5];
// console.log(arr);

// //Accessing elements of an array
// console.log(arr[0]);


// //Modifying elements of an array
// arr[0]=10;
// console.log(arr);

// //Array methods
// //push() method adds an element to the end of an array
// arr.push(6);
// console.log(arr);

// //pop() method removes the last element from an array
// arr.pop();
// console.log(arr);

// //shift() method removes the first element from an array
// arr.shift();
// console.log(arr);

// //unshift() method adds an element to the beginning of an array
// arr.unshift(0);
// console.log(arr);

// //length property returns the number of elements in an array
// console.log(arr.length);

// //indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present
// console.log(arr.indexOf(3));

// //slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// console.log(arr.slice(1, 4));


// let marks=[90,80,70,60,50];
// let result=0;
// for(let i of marks){
//     result+=i;
// }
// console.log(result/marks.length);


let items=[250,645,300,900,50];


for(let i in items){
    items[i]-=(items[i]*0.1);
    console.log(items[i]);
}

