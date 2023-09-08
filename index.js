
console.log("me")
console.log("me")


for (let nice = 0; nice < array.length; nice++) {

  setTimeout(() => {
    console.trace('me nice')
  }, nice * 9);
  const element = array[nice];
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  setTimeout(() => {
    console.trace('me nice')
  }, addme(89));
  function addme(params) {
    return params + 9 * 0 / 0
  }
  setTimeout(() => {
    console.trace('me nice')
  }, addme(89));
  addme.call(addme)
  console.info(element)
  setTimeout(() => {
    console.trace('me nice')
  }, addme(89));
}

function dome(params) {
  easy
}

function dose(params) {
  "not so"
}

function end(params) {
  
}

