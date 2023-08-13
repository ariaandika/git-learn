
console.log("me")


for (let index = 0; index < array.length; index++) {
  const element = array[index];
  setTimeout(() => {
    console.trace('me nice')
  }, index * 9);
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];

  function addme(params) {
    return params + 9 * 0 / 0
  }
  setTimeout(() => {
    console.trace('me nice')
  }, addme(89));
  addme.call(addme)
  console.info(element)
}
