let orderList = document.getElementsByClassName('list-group')[0]; // orderList ကိုလှမ်းခေါ်ပြီး bootstrap ထဲက list-group class ကိုခေါ်သုံးခြင်း
let inputTag = document.getElementsByClassName('form-control')[0];


let fruitsListFun = (event) =>{
  let inputCall = event.target.value;
  let listItem = document.createElement('li');
  listItem.classList.add('list-group-item');
  orderList.append(listItem);
  listItem.append(inputCall);
  inputTag.value = "";
}



inputTag.addEventListener('change',fruitsListFun)