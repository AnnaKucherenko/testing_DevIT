function deepEqual (obj1, obj2){
    const entries1 = Object.entries(obj1);
    const entries2 = Object.entries(obj2);
    if (entries1 === entries2) {
        return true;
    }
    else {
        return false;
    }
}

deepEqual({ name: 'test' }, { name: 'test' });