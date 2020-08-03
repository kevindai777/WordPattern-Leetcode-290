//Objective is to see if a string follows a given pattern

let pattern = "abba", str = "dog cat cat dog"


//O(n) solution that uses a hashmap to keep track of patterns to words

let map = {}
let arr = str.split(' ')

if (pattern.length != arr.length) {
    return false
}

for (let i = 0; i < pattern.length; i++) {
    //If it doesn't exist in the map AND no other letter in the pattern
    //is mapped to the word already
    if (!map[pattern[i]] && !Object.values(map).includes(arr[i])) {
        map[pattern[i]] = arr[i]
    } else {
        if (map[pattern[i]] != arr[i]) {
            return false
        }
    }
}

return true