var arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];

arrayToObject(arr);

// рабочий вариант без рекурсии

// function arrayToObject(array) {
//     const obj = Object.fromEntries(array);
        
//     for (let key in obj) {
//         if (Array.isArray(obj[key])) {
//             const obj1 = Object.fromEntries(obj[key]);
//             obj[key] = obj1;
//             console.log(obj)
//         }
        
//     }
// }

// не рабочий вариант с рекурсией

// function arrayToObject(array) {
//     const obj = Object.fromEntries(array);
       
//     for (let key in obj) {
//         if (Array.isArray(obj[key])) {
//             arrayToObject(obj[key]);
//             obj[key] = obj;
//             console.log(obj); 
//         }
        
//     }
// }

    
// function arrayToObject(array) {
        
//         const obj = Object.fromEntries(array);
                
//         const values = Object.values(obj);
//         const arrayLookup = values.find(value => Array.isArray(value));
//         // console.log(obj); 
//     if (arrayLookup === undefined) {
//             return
//     }
    
//        for (let key in obj) {
//             if (Array.isArray(obj[key])) {
//                 console.log(obj[key])
//                 console.log(arrayLookup)
//                 arrayToObject(arrayLookup);
//                 // obj[key] = obj;
//                 // console.log(obj)
                
//             }
            
//         } 
        
//         // console.log(obj);     
        
//     } 






// function isArr(element) {
//     if (Array.isArray(element)) {
//         return true;
//     }
//     return false;
// }



// function arrayToObject(array) {
//     let map = new Map(array);
//     const obj = Object.fromEntries(map);

//     const values = Object.values(obj);
//     if (values.find(isArr) === undefined) {
//         return 
//     } else {
//         for (let key in obj) {
//             if (Array.isArray(obj[key])) {
//                 const obj1 = obj[key];
//                 arrayToObject(obj1);
//                 obj[key] = obj;
//             }
//         }
//     }
//     console.log(obj);
// }

// не получится применить рекурсию

// function arrayToObject(array) {
//     array.map(arr => {
//         const arrayLookup = arr.find(value => Array.isArray(value))
//         console.log(arrayLookup);
//         if (arrayLookup === undefined) {
//             return
//         } else {
//             const objectAsKeyProperty = Object.fromEntries(arrayLookup);
//             console.log(objectAsKeyProperty);
//         }
//     })
//     //   console.log(obj)
// }

// arrayToObject(arr);





