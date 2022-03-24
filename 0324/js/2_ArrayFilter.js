const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6); 
// callback함수 직접 만들어보기
const result = words.filter(callback);

function callback(element){
   return element.length > 6;
}

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



// reference - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter



/*직접 함수 만들어 보기 */
const words2 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function myFilter(str,callback){
    let result2 = [];
    let current;
    for(let i = 0; i< str.length;i++){
        current = str[i];
        if(callback(current)){
            result.push(current);
        }
    }
    return result2;
}

let result2 = myFilter(words2, element => element.length > 6);
console.log(result2);
