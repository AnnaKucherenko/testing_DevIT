function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a, b) {
    const rand = Math.random();
    // console.log(rand)
  if (rand < 0.5) {
    return console.log(a * b);
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

function reliableMultiply(a, b) {
    primitiveMultiply(a, b)
    
}

console.log(reliableMultiply(8, 8));