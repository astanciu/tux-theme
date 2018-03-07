// Comment here
const things = require("things");

start(things).catch(err => {
  console.log(err);
});

async function start(things) {
  try {
    let obj = {
      name: "John",
      age: 30
    };
    let array = await things.get(obj).more();
    array.forEach(item => item.storeObject(obj));
  } catch (error) {
    throw new Error(`Something happened ${error.message}`);
  }
}
