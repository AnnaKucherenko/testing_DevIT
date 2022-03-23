function* chunkArray(array, num){
    while(true)
    yield array.splice(0, num);
}

var iterator  = chunkArray([1,2,3,4,5,6,7,8],3);


console.log(iterator.next()); 
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
