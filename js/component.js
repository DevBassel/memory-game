let imgs = 6;

function card(src) {
  let card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <div class="box">
    <div class="front"></div>
      <div class="back">
       <img src=${src}>
     </div>
   </div>`;
  document.querySelector('.game').appendChild(card);

  card.addEventListener('click', function() {
    this.querySelector('.box').classList.add('active');
    if (!this.querySelector('.box').classList.contains('done'))
      this.classList.add('select');
    compare()
  })
}
let score = 0;

function compare() {
  let select = Array.from(document.querySelectorAll('.select'));
  if (select.length == 2) {
    if (select[0].querySelector('img').src == select[1].querySelector('img').src) {
      console.log('done')
      select.forEach(el => {
        el.querySelector('.box').classList.add('done')
        el.classList.remove('select');
        el.querySelector('.box').classList.remove('active');
        score++;
      });
    } else {
      select.forEach(el => {
        el.classList.remove('select');
        setTimeout(() => el.querySelector('.box').classList.remove('active'), 1000);
      });
    }
  }
}

function first_show() {
  timer();
  document.querySelectorAll('.card .box').forEach(el => {
    el.classList.add('active');
    setTimeout(() => el.classList.remove('active'), 3000)
  })
}
let settime = 60;

function timer() {
  let time = setInterval(() => {
    settime--;
    let m = Math.floor(settime / 60);
    let s = Math.floor(settime % 60)
    document.querySelector('.timer span').textContent = `${m < 10 ? '0' + m : m }:${s < 10 ? '0' + s : s}`
    if (settime == 0 || winner(score)) {
      winner(score)
      clearInterval(time);
    }
  }, 1000)
}

function winner(score) {
  let end = document.querySelector('.end');
  if (score == imgs * 2) {
    console.log('winner');
    end.classList.add('active');
    end.querySelector('p').textContent = 'Winner :)';
    return true;
  }
  if (score < imgs * 2 && settime == 0) {
    end.classList.add('active');
    end.querySelector('p').textContent = 'Loser :(';
    console.log('loser');
  }
}


export {
  card,
  first_show,
  imgs
}
