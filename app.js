const person = {
    name:"John",
    city:"New york",
    call:213343567
  }
   console.log(person.city);


  
  function add(a, b) {
    let sum = a + b;
    return sum;
  }
const c=add(20,10)
console.log(c);




  
  function getResult(a, b, callback) {
  
    setTimeout(() => {
      let result = a + b;
      callback(result);
    },1000)
  
  }
  
  getResult(30, 23, function(result) {
    let dom = document.getElementById("value");
    dom.innerHTML = result;
    console.log(result);
  })

  const sumOuter = add(23, 55);
console.log(sumOuter);

const add2 = (a, b) => a + b;
const r = add2(60, 23);
console.log(r);

getResult(50, 50, result => {
  let dom = document.getElementById("value1");
  dom.innerHTML = result;
  console.log(result);
});