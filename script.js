let value1 = document.getElementById("price")
let value2 = document.getElementById("price2")
let value3 = document.getElementById("price3")
function togggle () {
  if (value1.innerHTML === '$19.99',value2.innerHTML === '$24.99',value3.innerHTML === '$39.99'){
    value1.innerHTML = '$199.99',value2.innerHTML = '$249.99',value3.innerHTML = '$399.99'   
  } else {
    value1.innerHTML = '$19.99',value2.innerHTML = '$24.99',value3.innerHTML = '$39.99'
  }
}

