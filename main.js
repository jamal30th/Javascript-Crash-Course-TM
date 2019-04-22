const ul = document.querySelector('.items')
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent='Hello'
ul.children[1].innerHTML = 'Brad'
ul.children[0].innerText = 'Andrew Russel'
ul.children[2].textContent = 'mS D'
ul.lastElementChild.innerHTML = '<h1>Rishab Pant</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'red'
