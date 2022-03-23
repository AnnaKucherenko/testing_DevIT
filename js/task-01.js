function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return 
    }

  for (let i = 0; i < keys1.length; i += 1) {
    const key = keys1[i];
    const bothAreObjects = typeof(object1[key]) === 'object' && typeof(object2[key]) === 'object';

    if ((!bothAreObjects && (object1[key] !== object2[key]))
    || (bothAreObjects && !deepEqual(object1[key], object2[key]))) {
      return console.log(false);
    }
  }

  return console.log(true);
}


deepEqual({name: 'test'}, {name: 'test'}) 
deepEqual({name: 'test'}, {name: 'test1'}) 
deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}) 
deepEqual({name: 'test'}, {name: 'test', age: 10}) 