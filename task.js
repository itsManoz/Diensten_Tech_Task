// 1. Write a function that rotates an array by k positions to the right.
// Rotation involves shifting elements to the right k times, with elements at the end wrapping around. Example: Rotate [1, 2, 3, 4] by 2 → [3, 4, 1, 2].

function rotateArr(arr, k) {
    if (!Array.isArray(arr) || arr.length === 0 || k < 0) {
        throw new Error("Invalid input");
    }
    const n = arr.length;
    k = k % n;
    if (k === 0) return arr;
    return arr.slice(-k).concat(arr.slice(0, n - k));
}

const arr = [5, 6, 7, 8];
const k = 2;
console.log(rotateArr(arr, k)); // Output: [ 7, 8, 5, 6 ]

// 2. Write a function that removes duplicates from a sorted array.
// In a sorted array, duplicates are consecutive. Removing them involves retaining one of each. Example: [1, 1, 2, 2, 3] → [1, 2, 3], [4, 5, 5, 6] → [4, 5, 6].

function removeDup(sortedArr) {
    if (!Array.isArray(sortedArr) || sortedArr.length === 0) {
        return [];
    }

    let uIndex = 0; // Tracks the position for unique elements

    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[uIndex]) {
            uIndex++; // Move to the next position for a unique element
            sortedArr[uIndex] = sortedArr[i]; // Update the unique position
        }
    }

    return sortedArr.slice(0, uIndex + 1); // Return only the unique portion of the array
}

// Example usage
const arr1 = [1, 2, 2, 3, 3, 4];
const arr2 = [ 5, 5, 6, 6 ,7, 8];
console.log(removeDup(arr1)); // Output: [1, 2, 3, 4]
console.log(removeDup(arr2)); // Output: [ 5, 6, 7, 8 ]
