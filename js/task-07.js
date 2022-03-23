const object = {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
}

function isObject(obj) {
    return obj === Object(obj);
    
}

function objectToArray(obj) {
    for (let key in object) {
        let valueKey = object[key];
        if (isObject(valueKey)===true) {
            const array = Object.entries(valueKey);
            object[key] = array;
        }
    }

    const arrayAll = Object.entries(obj);
    console.log(arrayAll);
}

objectToArray(object);






