import { card , first_show} from './component.js';
let arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(`imgs/img${i + 1}.svg`)
  arr.push(`imgs/img${i + 1}.svg`)
}

while (arr.length > 0) {
  let rand = Math.floor(Math.random() * 9);
  let index = arr.indexOf(arr[rand]);
  card(arr.splice(index, 1))
}

first_show();
document.querySelector('.restart').onclick  = ()=> window.location.reload();
