let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"

String.prototype.removeDuplicate = function(){
    const set = new Set(this.split(" "))
    console.log(set)
    return [...set].join(" ")
}
 
console.log(x.removeDuplicate())


