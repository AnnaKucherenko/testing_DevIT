const pEl = document.querySelector('p');
const divEl = document.createElement('div');
pEl.after(divEl);
const p = document.createElement('p');
const span = document.createElement('span');
p.appendChild(span);
divEl.appendChild(p);

function nodeChildCount(selector, deep) {
    const element= document.querySelector(`${selector}`);
    let child = 0;
    
    const children = element.children;
    checkingForChildren(children);
    
    function checkingForChildren(arr){
        if (arr === []) {
            child = child + 0;
            return 
        } else {
            for (let i = 0; i < arr.length; i += 1) {
                child = child + 1;
                const childHasAChild = arr[i].children;
                if (deep === undefined) {
                    checkingForChildren(childHasAChild);
                } else {
                    for (let i = 2; i <= deep; i += 1){
                        checkingForChildren(childHasAChild);
                        return
                    }
                }
                
                
                
            }
            }
        }
    console.log(child)    
}

nodeChildCount('div',7);