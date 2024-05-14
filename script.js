const mainCon = document.createElement('main');
let boxCon = document.createElement('div');
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
h2.classList.add('heading');
mainCon.appendChild(boxCon);
mainCon.prepend(h2);
document.body.appendChild(mainCon);
