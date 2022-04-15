const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = `Hey I'm red!`
container.append(p);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = `I'm a blue h3!`;
container.append(h3);

const secondDiv = document.createElement('div');
secondDiv.classList.add('content-2');
const secondDivControls = document.querySelector('.content-2');

secondDiv.style.border = 'solid black';
secondDiv.style.backgroundColor = 'pink';


const h1 = document.createElement('h1');
h1.textContent = `I'm in  a div`

const secondp = document.createElement('p');
secondp.textContent = "ME TOO!"

secondDiv.appendChild(h1)
secondDiv.appendChild(secondp);
container.append(secondDiv)

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});