const btn = document.createElement('button');
const mainCon = document.createElement('main');
let boxCon = document.createElement('div');
let btnOuter = document.createElement('div');
boxCon.classList.add('box-container');
boxCon.style.padding = '30px';

for (let i = 0; i <= 2; i++) {
    let box = document.createElement('div');
    let h3 = document.createElement('h3');
    let para = document.createElement('p');

    box.classList.add('box');
    box.style.marginRight = '2%';
    
    h3.innerHTML = `BOX title`;
    para.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium odio, beatae distinctio ut aperiam eligendi vero voluptates alias ratione neque impedit odit deleniti architecto ducimus, tempora expedita dolore, quaerat pariatur.`;

    box.append(h3, para);
    boxCon.appendChild(box);
}

let h2 = document.createElement('h2');
h2.innerHTML = `HTML Elements Create Using DOM`;
btn.innerHTML =  `Remove element`;
h2.classList.add('heading');
btnOuter.classList.add('btnOuter');
mainCon.appendChild(boxCon);
btnOuter.appendChild(btn);
mainCon.insertBefore(btnOuter, boxCon);
mainCon.prepend(h2);
document.body.appendChild(mainCon);

let firstCard = boxCon.firstChild;
let secChild = firstCard.nextSibling;
let lastChild = boxCon.lastChild;

let count = 0;
btn.addEventListener('click', () => {
    count++;
    if(count == 1){
        firstCard.style.display = 'none';
    }else if(count == 2){
        secChild.style.display = 'none';
    }
    else{
        lastChild.style.display = 'none';
    }
})