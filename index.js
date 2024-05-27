function sliceArray(array) {
    // Extract elements from index 2 (inclusive) to index 6 (exclusive)
    const slicedArray = array.slice(2, 6);
    // Return the new array containing the sliced elements
    return slicedArray;
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];
console.log(sliceArray(fruits)); 
// Output: [ 'Orange', 'Mango', 'Pineapple', 'Grapes' ]
